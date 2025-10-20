# ESEC - Vercel Deployment Guide

## 🚀 Quick Deploy (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign in with GitHub, GitLab, or Bitbucket

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Choose "Import Git Repository" OR "Deploy from local directory"

3. **Configure Settings** (Vercel will auto-detect most settings)
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Click "Deploy"**
   - Wait 1-2 minutes
   - Your site will be live! 🎉

5. **Get Your URL**
   - You'll get a URL like: `https://your-project-name.vercel.app`
   - Share this URL with anyone!

---

## Option 2: Deploy via Vercel CLI (Faster for Re-deployments)

### First Time Setup:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```
   - Follow the prompts to login

3. **Deploy**
   ```bash
   cd "/Users/ayushmanthakur/Downloads/openlm-inspired-ui 3"
   vercel
   ```

4. **Answer the prompts:**
   - Set up and deploy? `Y`
   - Which scope? (Choose your account)
   - Link to existing project? `N`
   - Project name? (Press Enter for default or type a name)
   - In which directory is your code located? `./`
   - Want to override settings? `N`

5. **Wait for deployment**
   - You'll get a preview URL immediately
   - Production URL will be ready in ~1 minute

### Subsequent Deployments:

```bash
cd "/Users/ayushmanthakur/Downloads/openlm-inspired-ui 3"
vercel --prod
```

---

## Option 3: Deploy via GitHub (Automatic Deployments)

### Setup (One-time):

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Create a new repository

2. **Push Your Code to GitHub**
   ```bash
   cd "/Users/ayushmanthakur/Downloads/openlm-inspired-ui 3"
   git init
   git add .
   git commit -m "Initial commit - ESEC website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Click "Deploy"

4. **Automatic Deployments**
   - Every time you push to GitHub, Vercel automatically deploys! 🚀
   - Push to `main` branch = Production deployment
   - Push to other branches = Preview deployments

---

## 📋 Pre-Deployment Checklist

✅ Build tested locally (already done!)
✅ `vercel.json` created (already done!)
✅ All environment variables set (if any)
✅ Logo and favicon in place (already done!)

---

## 🎨 Custom Domain (Optional)

After deployment, you can add a custom domain:

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `esec.yourdomain.com`)
4. Follow Vercel's DNS configuration steps

---

## 🔧 Troubleshooting

### Build Fails?

**Check Node Version:**
```bash
node --version  # Should be 18.x or higher
```

**Clear cache and rebuild:**
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Routes Not Working?

The `vercel.json` file (already created) handles this with rewrites.

### Large Bundle Warning?

The warning about chunk size is normal for React apps. Your app will still work perfectly!

To optimize (optional):
```typescript
// In vite.config.ts, add:
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
        }
      }
    }
  }
})
```

---

## 🌐 Environment Variables (If Needed)

If you need environment variables:

1. Create `.env.production` file:
   ```
   VITE_API_URL=https://api.example.com
   ```

2. In Vercel Dashboard:
   - Go to project settings
   - Click "Environment Variables"
   - Add your variables

3. Access in code:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

---

## 📊 After Deployment

Your site will be available at:
- **Preview URL**: `https://your-project-git-main-your-username.vercel.app`
- **Production URL**: `https://your-project.vercel.app`

### Share Your Site:
- Copy the production URL
- Share with anyone for testing!
- Analytics available in Vercel dashboard

### Monitor Performance:
- Vercel provides built-in analytics
- See real-time visitors and performance
- Access via Vercel dashboard

---

## 🎯 Quick Commands Reference

```bash
# First deployment
vercel

# Production deployment
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel remove
```

---

## 📱 Test Your Deployment

After deployment, test:
- ✅ Home page loads
- ✅ All navigation works
- ✅ Light/Dark theme toggle works
- ✅ Logo displays correctly
- ✅ All pages are accessible
- ✅ Responsive on mobile

---

## 🆘 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Vite Deployment**: https://vitejs.dev/guide/static-deploy.html
- **Vercel Support**: https://vercel.com/support

---

Good luck with your deployment! 🚀✨
