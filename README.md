# ESEC - Engineering Software Expertise Capture

A modern, responsive web application for intelligent software asset management solutions.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=flat-square&logo=typescript)
![Material-UI](https://img.shields.io/badge/MUI-6.1.3-007FFF?style=flat-square&logo=mui)
![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?style=flat-square&logo=vite)

## 🚀 Features

- ✨ **Modern UI/UX** - Clean, professional design with smooth animations
- 🌓 **Dark/Light Mode** - Fully theme-aware with seamless switching
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Centralized Color System** - Easy theme customization from one file
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🔒 **Type-Safe** - Full TypeScript support

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.8
- **Language**: TypeScript 5.6.3
- **UI Library**: Material-UI (MUI) 6.1.3
- **Routing**: React Router DOM 6.26.2
- **Icons**: Iconify React 5.0.2
- **Charts**: Recharts 2.12.7

## 📦 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:5173
```

## 🏗️ Build & Deploy

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Changing Colors

All colors are in `src/theme/colors.ts`:

```typescript
export const brandColors = {
  primary: {
    dark: '#00f0ff',   // Change this
    light: '#0097a7',  // And this
  }
}
```

See [COLOR_SYSTEM_GUIDE.md](./COLOR_SYSTEM_GUIDE.md) for details.

## 📁 Project Structure

```
src/
├── components/         # Reusable components
├── pages/             # Page components
├── theme/             # Color system & theming
├── assets/            # Images & static files
└── App.tsx            # Main app
```

## 📚 Documentation

- [COLOR_SYSTEM_GUIDE.md](./COLOR_SYSTEM_GUIDE.md) - Color customization
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Deploy to Vercel

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for instructions.

---

**Developed in India for the World 🇮🇳**
