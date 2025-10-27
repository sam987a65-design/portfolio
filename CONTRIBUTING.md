# Contributing Guide

Thank you for your interest in contributing to this portfolio project!

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/aryankumbhare/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── 3d/               # Three.js components
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI components
├── lib/                  # Utilities and helpers
│   ├── constants.ts      # App constants
│   ├── types.ts          # TypeScript types
│   └── utils.ts          # Utility functions
└── styles/               # Global styles
```

## Code Style

### TypeScript

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type when possible

### React

- Use functional components with hooks
- Follow React best practices
- Use proper prop types

### Styling

- Use Tailwind CSS utility classes
- Follow the existing design system
- Maintain responsive design

### Naming Conventions

- Components: PascalCase (e.g., `HeroSection.tsx`)
- Files: kebab-case for utilities (e.g., `use-scroll.ts`)
- Functions: camelCase (e.g., `handleSubmit`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_URL`)

## Git Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, documented code
   - Follow existing patterns
   - Add tests if applicable

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

   Use conventional commits:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation
   - `style:` Formatting
   - `refactor:` Code restructuring
   - `test:` Adding tests
   - `chore:` Maintenance

4. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Describe your changes
   - Reference any related issues
   - Wait for review

## Testing

### Run Tests

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Lint
npm run lint
```

### Writing Tests

- Add tests for new features
- Ensure existing tests pass
- Aim for good coverage

## Accessibility

- Use semantic HTML
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios

## Performance

- Optimize images and assets
- Lazy load heavy components
- Use React.memo for expensive renders
- Monitor bundle size

## 3D Development

When working with Three.js components:

- Keep polygon counts low
- Use compressed models (glTF with Draco)
- Provide fallbacks for non-WebGL browsers
- Respect `prefers-reduced-motion`
- Test performance on various devices

## Documentation

- Update README.md if needed
- Add JSDoc comments for complex functions
- Document props for components
- Update CHANGELOG.md

## Pull Request Checklist

- [ ] Code follows project style
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No console errors
- [ ] Responsive design maintained
- [ ] Accessibility checked
- [ ] Performance optimized
- [ ] Browser compatibility verified

## Questions?

Feel free to open an issue for:
- Bug reports
- Feature requests
- Questions about the code
- Suggestions for improvements

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.
