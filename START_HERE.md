# 🚀 START HERE - Quick Guide

Welcome to the Aryan Kumbhare 3D Portfolio project! This guide will get you up and running in **5 minutes**.

## ⚡ Super Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — Done! 🎉

## 📋 What You Need

- **Node.js 18+** ([Download](https://nodejs.org/))
- **Code Editor** (VS Code recommended)
- **Modern Browser** (Chrome, Firefox, Safari, Edge)

## 🎯 Next Steps

### 1. Customize Your Content (5 minutes)

Open `src/lib/constants.ts` and update:

```typescript
// Your personal info
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Title',
  // ... update all fields
}

// Your skills, projects, education, experience
```

### 2. Add Your Resume (1 minute)

Replace `public/resume.pdf` with your actual resume PDF.

### 3. Test Everything (2 minutes)

- ✅ Click through all sections
- ✅ Test the contact form
- ✅ Check mobile menu
- ✅ Try 3D interactions

### 4. Deploy (5 minutes)

```bash
# Build for production
npm run build

# Deploy to Vercel
npm i -g vercel
vercel --prod
```

## 📚 Documentation

Choose your path:

### For Quick Setup
👉 **[SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md)** - Step-by-step guide

### For Deployment
👉 **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deploy to production

### For Development
👉 **[CONTRIBUTING.md](CONTRIBUTING.md)** - Development guidelines

### For Overview
👉 **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Complete project overview

## 🎨 What's Included

✅ **Hero Section** - Interactive 3D glass cards
✅ **About Section** - Bio and education timeline
✅ **Skills Section** - 3D floating icons with 30+ technologies
✅ **Projects Section** - 3 featured projects with modals
✅ **Experience Section** - Professional timeline
✅ **Contact Section** - Validated form with 3D background

## 🛠 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Testing
npm test             # Run unit tests
npm run test:e2e     # Run E2E tests
npm run lint         # Lint code

# Deployment
vercel --prod        # Deploy to Vercel
```

## 🐛 Troubleshooting

### 3D Scenes Not Showing?
- **Normal!** Fallback content shows if WebGL unavailable
- Try a modern browser (Chrome, Firefox, Safari)

### Build Errors?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Contact Form Not Working?
- In development: Check console logs
- For production: Set up email service (see DEPLOYMENT.md)

## 🎯 Customization Checklist

- [ ] Update personal info in `constants.ts`
- [ ] Add your skills
- [ ] Add your projects
- [ ] Add your education
- [ ] Add your experience
- [ ] Update about text
- [ ] Replace resume PDF
- [ ] Add project images (optional)
- [ ] Customize colors (optional)
- [ ] Set up email service
- [ ] Test on mobile
- [ ] Deploy to production

## 💡 Pro Tips

1. **Start with content** - Update `constants.ts` first
2. **Test locally** - Make sure everything works before deploying
3. **Use real data** - Replace placeholder content
4. **Optimize images** - Use WebP/AVIF formats
5. **Set up analytics** - Track your visitors
6. **Custom domain** - Add your own domain in Vercel

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Three.js](https://threejs.org/docs)

## 🆘 Need Help?

1. Check the documentation files
2. Review the code comments
3. Search existing issues on GitHub
4. Open a new issue with details

## 🎉 You're Ready!

Your portfolio is set up and ready to customize. Here's what to do:

1. ✅ **Customize content** in `constants.ts`
2. ✅ **Add your resume** to `public/`
3. ✅ **Test everything** locally
4. ✅ **Deploy** to Vercel
5. ✅ **Share** your portfolio!

---

**Questions?** Check [README.md](README.md) or [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

**Ready to deploy?** See [DEPLOYMENT.md](DEPLOYMENT.md)

**Want to contribute?** Read [CONTRIBUTING.md](CONTRIBUTING.md)

---

**Good luck with your portfolio! 🚀**
