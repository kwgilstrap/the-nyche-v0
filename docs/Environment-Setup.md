# The NYChe Environment Setup Guide

_Last updated: 2025-04-30_

## Prerequisites

- Node.js 23.x LTS (specified in `.nvmrc`)
- npm 10.x or later
- Git
- VS Code (recommended) with Cursor extension

## Initial Setup

1. **Clone the repository**
   ```bash
   git clone git@github.com:your-username/the-nyche-v0.git
   cd the-nyche-v0
   ```

2. **Use correct Node version**
   ```bash
   nvm use
   # This will read from .nvmrc and switch to Node 23.x
   ```

3. **Install dependencies**
   ```bash
   npm run setup
   # This installs Node, deps, and copies .env.example → .env
   ```

4. **Environment Configuration**
   ```bash
   # Your .env.local should already be created by setup
   # Verify and update values as needed
   ```

## Required Environment Variables

```bash
# Core
NEXT_PUBLIC_API_URL=https://api.thenyche.com
NEXT_PUBLIC_SITE_URL=https://thenyche.com
NODE_ENV=development

# Authentication & APIs
NEXT_PUBLIC_MAP_KEY=your_mapbox_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here
PERPLEXITY_API_KEY=your_perplexity_key_here

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id
NEXT_PUBLIC_MIXPANEL_TOKEN=your_mixpanel_token

# E-commerce
NEXT_PUBLIC_TIKTOK_SHOP_ID=your_tiktok_shop_id
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Email
BEEHIIV_API_KEY=your_beehiiv_key
RESEND_API_KEY=your_resend_key
```

## Development Workflow

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Run tests**
   ```bash
   npm run test
   npm run test:e2e
   ```

3. **Lint and format**
   ```bash
   npm run lint
   npm run format
   ```

## VS Code Configuration

Recommended extensions:
- Cursor
- Tailwind CSS IntelliSense
- ESLint
- Prettier
- GitLens

## Common Issues & Solutions

### Node Version Mismatch
```bash
nvm install # Installs version from .nvmrc
nvm use # Switches to correct version
```

### Environment Variables Not Loading
```bash
# Verify .env.local exists and has correct values
# Restart Next.js dev server
npm run dev
```

### Supabase Connection Issues
```bash
# Check Supabase CLI is installed
npm run supabase:start
```

## Deployment

- Staging: Automatic deployment on push to `staging` branch
- Production: Manual deployment from `main` branch
- Both environments use Vercel

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [Vercel Documentation](https://vercel.com/docs)

## Support

For environment-related issues:
1. Check this guide's Common Issues section
2. Search GitHub issues
3. Create new issue with `[ENV]` prefix 