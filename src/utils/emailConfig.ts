// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create email templates for each form
// 4. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (found in Account > General)
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE',

  // Service ID (found in Email Services)
  SERVICE_ID: 'YOUR_SERVICE_ID_HERE',

  // Template IDs for each form (create these in Email Templates)
  TEMPLATES: {
    CONTACT: 'template_contact_form',
    PRICING_PROPOSAL: 'template_pricing_proposal',
    PARTNER_REQUEST: 'template_partner_request'
  }
}

// Recipient email address
export const RECIPIENT_EMAIL = ''
