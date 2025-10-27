# Deployment Guide

This guide will help you deploy the Aryan Kumbhare portfolio website to production.

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- Vercel account (recommended) or other hosting provider

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Email Service (Required for contact form)
EMAIL_API_KEY=your_sendgrid_api_key
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=aryan@yourdomain.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://aryankumbhare.com

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key

# Rate Limiting
RATE_LIMIT_MAX=5
```

## Vercel Deployment (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Configure environment variables in the dashboard
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Vercel Configuration

The `vercel.json` file is already configured with:
- Security headers
- Cache control for static assets
- Performance optimizations

## GitHub Actions CI/CD

The repository includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that:

1. **Lints** code on every push
2. **Builds** the project
3. **Runs tests** (unit and E2E)
4. **Deploys** to Vercel on main branch

### Required GitHub Secrets

Add these secrets to your GitHub repository:

- `VERCEL_TOKEN` - Your Vercel API token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID
- `NEXT_PUBLIC_SITE_URL` - Your production URL

To get Vercel credentials:
```bash
vercel login
vercel link
cat .vercel/project.json
```

## Manual Deployment to Other Platforms

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

### AWS Amplify

1. Connect your GitHub repository
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Add environment variables
4. Deploy

### Docker

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## Email Service Setup

### SendGrid Setup

1. Create a SendGrid account
2. Generate an API key
3. Verify your sender email
4. Add API key to environment variables

### AWS SES Setup

1. Create AWS account
2. Verify email addresses in SES
3. Create IAM user with SES permissions
4. Add credentials to environment variables

Update `src/app/api/contact/route.ts` with your email service implementation.

## Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Use WebP/AVIF formats
   - Compress images
   - Use Next.js Image component

2. **Minimize Bundle Size**
   ```bash
   npm run build
   # Check bundle size in output
   ```

3. **Test Performance**
   ```bash
   npm run build
   npm start
   # Run Lighthouse audit
   npx lighthouse http://localhost:3000
   ```

### After Deployment

1. **Monitor Core Web Vitals**
   - LCP (Largest Contentful Paint) < 2.5s
   - FID (First Input Delay) < 100ms
   - CLS (Cumulative Layout Shift) < 0.1

2. **Set up Analytics**
   - Google Analytics 4
   - Vercel Analytics
   - Plausible (privacy-friendly)

3. **Enable CDN**
   - Vercel automatically provides CDN
   - For other platforms, use Cloudflare

## Domain Configuration

### Custom Domain on Vercel

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### SSL Certificate

Vercel automatically provisions SSL certificates. For other platforms:
- Use Let's Encrypt
- Enable automatic renewal

## Monitoring & Maintenance

### Error Tracking

Set up error tracking with:
- Sentry
- LogRocket
- Vercel Analytics

### Uptime Monitoring

Use services like:
- UptimeRobot
- Pingdom
- StatusCake

### Regular Updates

```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Update Next.js
npm install next@latest react@latest react-dom@latest
```

## Troubleshooting

### Build Failures

1. Check Node.js version (18+)
2. Clear cache: `rm -rf .next node_modules && npm install`
3. Check environment variables
4. Review build logs

### 3D Scenes Not Loading

1. Verify WebGL support in target browsers
2. Check Three.js version compatibility
3. Ensure fallback content is working

### Contact Form Not Working

1. Verify email service credentials
2. Check API route logs
3. Test rate limiting
4. Verify CORS settings

## Security Checklist

- [ ] Environment variables secured
- [ ] API routes protected with rate limiting
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Dependencies updated
- [ ] Honeypot field in contact form
- [ ] Input validation on all forms
- [ ] CSP headers configured (optional)

## Post-Deployment Tasks

1. **Test all functionality**
   - Navigation
   - 3D scenes
   - Contact form
   - Mobile responsiveness

2. **Submit to search engines**
   - Google Search Console
   - Bing Webmaster Tools

3. **Set up redirects** (if migrating)
   ```json
   // vercel.json
   {
     "redirects": [
       {
         "source": "/old-path",
         "destination": "/new-path",
         "permanent": true
       }
     ]
   }
   ```

4. **Create sitemap** (already configured)
   - Accessible at `/sitemap.xml`

5. **Test with different devices**
   - Desktop browsers
   - Mobile devices
   - Tablets
   - Screen readers

## Support

For issues or questions:
- Check the README.md
- Review Next.js documentation
- Open an issue on GitHub

## License

© 2025 Aryan Kumbhare. All rights reserved.
