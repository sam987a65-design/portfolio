# Quick Reference Card

## 🚀 Essential Commands

```bash
npm install              # Install dependencies
npm run dev             # Start development (localhost:3000)
npm run build           # Build for production
npm start               # Start production server
npm test                # Run unit tests
npm run test:e2e        # Run E2E tests
npm run lint            # Lint code
vercel --prod           # Deploy to Vercel
```

## 📁 Key Files to Edit

| File | Purpose |
|------|---------|
| `src/lib/constants.ts` | **All content** (skills, projects, bio, etc.) |
| `tailwind.config.ts` | Colors, fonts, theme |
| `public/resume.pdf` | Your resume |
| `.env.local` | Environment variables |

## 🎨 Customization Quick Guide

### Update Personal Info
```typescript
// src/lib/constants.ts
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Title',
  links: { github, linkedin, email }
}
```

### Update Skills
```typescript
// src/lib/constants.ts
export const SKILLS = {
  'Category Name': [
    { name: 'Skill', level: 'Advanced', icon: '🎯' }
  ]
}
```

### Update Projects
```typescript
// src/lib/constants.ts
export const PROJECTS = [
  {
    id: 'project-id',
    title: 'Project Name',
    description: '...',
    // ... more fields
  }
]
```

### Change Colors
```typescript
// tailwind.config.ts
colors: {
  midnight: '#0b1020',  // Background
  azure: '#2dd4bf',     // Primary
  warm: '#ff8a65',      // Secondary
}
```

## 🔧 Environment Variables

```env
# Required for contact form
EMAIL_API_KEY=your_sendgrid_key
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=your@email.com

# Required for production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RATE_LIMIT_MAX=5
```

## 📂 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts    # Contact form API
│   ├── page.tsx                # Home page
│   └── layout.tsx              # Root layout
├── components/
│   ├── 3d/                     # Three.js components
│   ├── sections/               # Page sections
│   └── ui/                     # UI components
└── lib/
    ├── constants.ts            # ⭐ EDIT THIS
    ├── types.ts                # TypeScript types
    └── utils.ts                # Utilities
```

## 🎯 Common Tasks

### Add a New Project
1. Open `src/lib/constants.ts`
2. Add to `PROJECTS` array
3. Include: id, title, description, tags, highlights, kpis, links

### Add a New Skill
1. Open `src/lib/constants.ts`
2. Add to appropriate category in `SKILLS`
3. Include: name, level, icon

### Change Theme Colors
1. Open `tailwind.config.ts`
2. Update `colors` in `theme.extend`
3. Restart dev server

### Add Project Images
1. Add image to `public/projects/`
2. Update `thumbnail` in project object
3. Use: `/projects/image-name.png`

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| 3D not showing | Normal if WebGL unavailable, check browser |
| Build errors | `rm -rf .next node_modules && npm install` |
| Form not working | Check console in dev, set up email in prod |
| Port in use | Change port: `npm run dev -- -p 3001` |

## 📚 Documentation Map

| Need | Read |
|------|------|
| Quick start | START_HERE.md |
| Detailed setup | SETUP_INSTRUCTIONS.md |
| Deploy guide | DEPLOYMENT.md |
| Development | CONTRIBUTING.md |
| Full overview | PROJECT_SUMMARY.md |
| Feature list | FEATURES.md |
| This reference | QUICK_REFERENCE.md |

## 🎨 Component Quick Reference

### Import a Component
```tsx
import ComponentName from '@/components/path/ComponentName'
```

### Use 3D Scene
```tsx
import Scene3D from '@/components/3d/Scene3D'
import YourComponent from '@/components/3d/YourComponent'

<Scene3D>
  <YourComponent />
</Scene3D>
```

### Use Modal
```tsx
import Modal from '@/components/ui/Modal'

<Modal isOpen={open} onClose={() => setOpen(false)} title="Title">
  Content
</Modal>
```

## 🔐 Security Checklist

- [ ] Environment variables in `.env.local` (not committed)
- [ ] Email API key secured
- [ ] Rate limiting enabled
- [ ] Honeypot in contact form
- [ ] Input validation active
- [ ] Security headers configured

## ✅ Pre-Deployment Checklist

- [ ] Personal info updated in `constants.ts`
- [ ] Resume PDF replaced
- [ ] All content customized
- [ ] Tested locally (`npm run dev`)
- [ ] Built successfully (`npm run build`)
- [ ] Environment variables set in Vercel
- [ ] Custom domain configured (optional)

## 🚀 Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to vercel.com
   - Import repository
   - Add environment variables
   - Deploy

3. **Verify**
   - Check all sections load
   - Test contact form
   - Test on mobile
   - Run Lighthouse audit

## 📊 Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| LCP | < 2.5s | Lighthouse |
| FID | < 100ms | Lighthouse |
| CLS | < 0.1 | Lighthouse |
| Performance | 90+ | Lighthouse |
| Accessibility | 95+ | Lighthouse |

## 🎓 Tech Stack Quick Ref

- **Framework**: Next.js 14
- **UI**: React 18 + Tailwind CSS
- **3D**: Three.js + react-three-fiber
- **Forms**: React Hook Form + Zod
- **Language**: TypeScript
- **Testing**: Jest + Playwright
- **Deploy**: Vercel

## 💡 Pro Tips

1. **Content First** - Update `constants.ts` before anything else
2. **Test Mobile** - Always check responsive design
3. **Real Data** - Use actual projects and skills
4. **Optimize Images** - Use WebP/AVIF formats
5. **Monitor Performance** - Run Lighthouse regularly
6. **Keep Updated** - Update dependencies monthly

## 🆘 Get Help

1. Check documentation files
2. Review code comments
3. Search GitHub issues
4. Open new issue with details

## 📞 Quick Links

- **Repo**: github.com/aryankumbhare/portfolio
- **Deploy**: vercel.com
- **Next.js**: nextjs.org/docs
- **Three.js**: threejs.org/docs
- **Tailwind**: tailwindcss.com/docs

---

**Keep this file handy for quick reference!** 📌
