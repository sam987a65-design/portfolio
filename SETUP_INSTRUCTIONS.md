# Quick Setup Instructions

Get your portfolio up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js, React, TypeScript
- Three.js and 3D libraries
- Tailwind CSS
- Form validation libraries
- Testing tools

## Step 2: Configure Environment

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your information:

```env
# Email Configuration (for contact form)
EMAIL_API_KEY=your_sendgrid_api_key_here
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=your.email@example.com

# Site URL (for production)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Note**: The contact form will log to console in development if email is not configured.

## Step 3: Customize Content

### Update Personal Information

Edit `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Name',
  title: 'Your Name — Your Title',
  description: 'Your description',
  url: 'https://yourdomain.com',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'mailto:your@email.com',
  },
}
```

### Update Skills

Edit the `SKILLS` object in `src/lib/constants.ts` to match your skills.

### Update Projects

Edit the `PROJECTS` array in `src/lib/constants.ts` with your projects:

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Short description',
  tags: ['Tech1', 'Tech2'],
  highlights: ['Achievement 1', 'Achievement 2'],
  // ... more fields
}
```

### Update Education & Experience

Edit `EDUCATION` and `EXPERIENCE` arrays in `src/lib/constants.ts`.

### Update About Text

Edit `ABOUT_TEXT` in `src/lib/constants.ts` with your bio.

## Step 4: Add Your Resume

Replace `public/resume.pdf` with your actual resume PDF file.

## Step 5: Add Images (Optional)

Add project thumbnails and icons to the `public/` directory:

```
public/
├── projects/
│   ├── project1.png
│   ├── project2.png
│   └── project3.png
├── icon-192.png
├── icon-512.png
├── favicon.ico
└── og-image.png
```

## Step 6: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 7: Test Your Site

### Check Functionality
- ✅ Navigation works
- ✅ 3D scenes load (or show fallback)
- ✅ All sections display correctly
- ✅ Contact form validates input
- ✅ Mobile menu works
- ✅ Links open correctly

### Test Responsiveness
- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px)

### Test Accessibility
- Tab through all interactive elements
- Check focus indicators
- Test with screen reader (optional)

## Step 8: Build for Production

```bash
npm run build
```

This will:
- Compile TypeScript
- Optimize assets
- Generate static pages
- Create production bundle

Check the output for any errors or warnings.

## Step 9: Deploy

### Option A: Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Click Deploy

### Option B: Deploy via CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

See `DEPLOYMENT.md` for detailed deployment instructions.

## Common Issues & Solutions

### Issue: 3D scenes not showing

**Solution**: This is normal if WebGL is not available. The site provides fallback content. Test in a modern browser (Chrome, Firefox, Safari).

### Issue: Contact form not sending emails

**Solution**: 
1. Check if `EMAIL_API_KEY` is set in `.env.local`
2. In development, check console logs
3. For production, set up SendGrid or AWS SES (see `DEPLOYMENT.md`)

### Issue: Build errors

**Solution**:
1. Delete `.next` and `node_modules`: `rm -rf .next node_modules`
2. Reinstall: `npm install`
3. Try building again: `npm run build`

### Issue: TypeScript errors

**Solution**: 
1. Check `tsconfig.json` is present
2. Ensure all dependencies are installed
3. Run `npm run lint` to see specific errors

### Issue: Slow performance

**Solution**:
1. Optimize images (use WebP/AVIF)
2. Reduce 3D scene complexity
3. Enable lazy loading
4. Check bundle size: `npm run build` and review output

## Next Steps

1. **Customize Design**: Edit colors in `tailwind.config.ts`
2. **Add More Projects**: Update `PROJECTS` array
3. **Set Up Analytics**: Add Google Analytics or Plausible
4. **Configure Email**: Set up SendGrid for contact form
5. **Custom Domain**: Add your domain in Vercel settings
6. **SEO**: Submit sitemap to Google Search Console

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Three.js Documentation](https://threejs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

## Need Help?

- Check `README.md` for detailed information
- Review `DEPLOYMENT.md` for deployment help
- See `CONTRIBUTING.md` for development guidelines
- Open an issue on GitHub

## Checklist

- [ ] Dependencies installed
- [ ] Environment variables configured
- [ ] Personal information updated
- [ ] Skills customized
- [ ] Projects added
- [ ] Resume uploaded
- [ ] Development server running
- [ ] Site tested locally
- [ ] Production build successful
- [ ] Deployed to hosting

Congratulations! Your portfolio is ready! 🎉
