import translate from '@vitalets/google-translate-api';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the English translation file
const enPath = path.join(__dirname, 'src/i18n/locales/en.json');
const enContent = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Target languages
const languages = {
  ja: 'Japanese',
  fr: 'French',
  de: 'German'
};

// Function to translate text with retry logic
async function translateText(text, targetLang, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const result = await translate(text, { to: targetLang });
      return result.text;
    } catch (error) {
      console.log(`Retry ${i + 1} for: ${text.substring(0, 30)}...`);
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      if (i === retries - 1) {
        console.error(`Failed to translate: ${text}`);
        return text;
      }
    }
  }
}

// Recursive function to translate nested objects
async function translateObject(obj, targetLang, depth = 0) {
  const translated = {};
  const entries = Object.entries(obj);

  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];

    if (typeof value === 'string') {
      console.log(`[${targetLang}] Translating (${i + 1}/${entries.length}): ${value.substring(0, 40)}...`);
      translated[key] = await translateText(value, targetLang);
      await new Promise(resolve => setTimeout(resolve, 100));
    } else if (typeof value === 'object' && value !== null) {
      translated[key] = await translateObject(value, targetLang, depth + 1);
    } else {
      translated[key] = value;
    }
  }

  return translated;
}

// Main translation function
async function translateAll() {
  console.log('Starting auto-translation process...\n');

  for (const [langCode, langName] of Object.entries(languages)) {
    console.log(`\n======================================`);
    console.log(`Translating to ${langName} (${langCode})`);
    console.log(`======================================\n`);

    try {
      const translated = await translateObject(enContent, langCode);

      const outputPath = path.join(__dirname, `src/i18n/locales/${langCode}.json`);
      fs.writeFileSync(outputPath, JSON.stringify(translated, null, 2), 'utf8');

      console.log(`\n✅ Successfully translated to ${langName} and saved to ${langCode}.json`);
    } catch (error) {
      console.error(`\n❌ Error translating to ${langName}:`, error.message);
    }
  }

  console.log('\n======================================');
  console.log('Translation process completed!');
  console.log('======================================\n');
}

// Run the translation
translateAll().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
