# Aryan Kumbhare - 3D Portfolio Website

A modern, interactive 3D portfolio website built with Next.js, React, Three.js, and Tailwind CSS. Features immersive 3D animations, excellent performance, full accessibility support, and a beautiful minimalist design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-0.163-black?style=for-the-badge&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Interactive 3D Elements** - Immersive Three.js scenes with mouse/touch controls
- ⚡ **High Performance** - Lighthouse score 90+, LCP < 2.5s, optimized assets
- ♿ **Fully Accessible** - WCAG AA compliant, keyboard navigable, screen reader friendly
- 📱 **Responsive Design** - Mobile-first approach, works on all devices
- 🎯 **SEO Optimized** - Structured data, meta tags, sitemap, OpenGraph support
- 🌙 **Modern UI** - Minimalist design with smooth animations and micro-interactions
- 🔒 **Secure** - Rate limiting, spam protection, security headers
- 📧 **Contact Form** - Validated form with email integration ready

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

```bash
# Clone the repository
git clone https://github.com/aryankumbhare/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Option 2: Manual Setup

See **[SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md)** for detailed step-by-step guide.

## 📋 Prerequisites

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (or yarn/pnpm)
- Modern browser with WebGL support (Chrome, Firefox, Safari, Edge)

## 🛠 Tech Stack

### Core
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks
- **TypeScript 5** - Type-safe development

### Styling & Animation
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion 11** - Animation library
- **Lucide React** - Beautiful icon library

### 3D Graphics
- **Three.js 0.163** - WebGL 3D library
- **react-three-fiber 8** - React renderer for Three.js
- **@react-three/drei 9** - Useful helpers for R3F

### Forms & Validation
- **React Hook Form 7** - Form state management
- **Zod 3** - Schema validation

### Testing & Quality
- **Jest 29** - Unit testing
- **Playwright 1** - E2E testing
- **ESLint** - Code linting
- **TypeScript** - Type checking

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/contact/       # Contact form API route
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/
│   ├── 3d/               # Three.js 3D components
│   ├── sections/         # Page sections (Hero, About, etc.)
│   └── ui/               # Reusable UI components
└── lib/
    ├── constants.ts      # Site content and configuration
    ├── types.ts          # TypeScript type definitions
    └── utils.ts          # Utility functions
```

## 🎨 Customization

### Update Personal Information

Edit `src/lib/constants.ts` to customize:

```typescript
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'mailto:your@email.com',
  },
}

// Update SKILLS, PROJECTS, EDUCATION, EXPERIENCE, ABOUT_TEXT
```

### Customize Design

Edit `tailwind.config.ts` to change colors, fonts, and animations:

```typescript
colors: {
  midnight: '#0b1020',    // Background
  azure: '#2dd4bf',       // Primary accent
  warm: '#ff8a65',        // Secondary accent
  // ... customize as needed
}
```

## Performance Optimizations

- Lazy loading for 3D assets and images
- Compressed glTF models with Draco compression
- Code splitting and dynamic imports
- Optimized images with Next.js Image component
- Reduced motion support for accessibility
- WebGL fallbacks for non-supporting browsers

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aryankumbhare/portfolio)

Or via CLI:

```bash
npm i -g vercel
vercel --prod
```

### Environment Variables

Set these in your hosting platform:

```env
EMAIL_API_KEY=your_sendgrid_api_key
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=your@email.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for detailed deployment instructions.

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run E2E tests
npm run test:e2e

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## ♿ Accessibility

This portfolio is built with accessibility in mind:

- ✅ Semantic HTML5 structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus management in modals
- ✅ Screen reader friendly
- ✅ High contrast ratios (WCAG AA)
- ✅ Prefers-reduced-motion support
- ✅ Skip to main content link

## 🌐 Browser Support

- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 📚 Documentation

- **[SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md)** - Quick setup guide
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment instructions
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Development guidelines
- **[CHANGELOG.md](CHANGELOG.md)** - Version history
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Comprehensive overview

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📝 License

© 2025 Aryan Kumbhare. All rights reserved.

## 📧 Contact

- **Email**: aryan@example.com
- **GitHub**: [@aryankumbhare](https://github.com/aryankumbhare)
- **LinkedIn**: [Aryan Kumbhare](https://linkedin.com/in/aryankumbhare)

---

**Built with ❤️ using Next.js, React, Three.js, and Tailwind CSS**
