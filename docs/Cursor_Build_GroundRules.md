# Cursor Ground Rules for The NYChe

_Last updated: 2025-04-30_

> Development environment and tooling specifications for The NYChe project.

## 🧠 Primary Goal

Keep Cursor focused, clean, and efficient for building The NYChe.

## ✅ Development Stack

For the canonical tech stack details, please refer to [the-nyche-master-strategy.md](./the-nyche-master-strategy.md#tech-stack).

Core technologies:
- **Next.js 14.2.28** (App Router)
- **Tailwind CSS** (minimal config)
- **TypeScript** (strict mode)
- **Supabase** for data/auth

## 🔄 Cursor Usage Rules

1. **Code Organization**
   - Keep components modular and minimal
   - Use TypeScript for all new components
   - Follow App Router patterns strictly

2. **Documentation**
   - Inline comments only for complex logic
   - Keep component props documented
   - Update changelog for major changes

3. **Version Control**
   - Commit messages in present tense
   - Branch from `main` for features
   - PR template required for merges

## 📁 Project Structure

- `/src/app` – Next.js App Router pages
- `/src/components` – UI components
- `/src/content` – Markdown content
- `/public/images` – Local assets
- `/styles/` – Tailwind config
- `/docs/` – Project documentation

## 🛠 Environment Setup

For detailed environment setup instructions, please refer to [Environment-Setup.md](./Environment-Setup.md).

Key requirements:
- Node.js version specified in `.nvmrc`
- Run `npm run setup` to install dependencies and copy `.env.example` → `.env`
- Deno plugin enabled
- ESLint + Prettier configured
- Husky pre-commit hooks
- Vercel CLI for deployments

## ⛔️ Restrictions

- No framework changes
- No custom CMS integrations
- No backend beyond Supabase
- No external asset hosting
- No experimental Next.js features

## 📝 Brand Voice & Tone

For brand voice guidelines and editorial standards, please refer to [the-nyche-brand-profile.md](./the-nyche-brand-profile.md#voice-and-tone).

## 🔄 Phase 3 Development

For upcoming tasks and priorities, see [Phase3-Roadmap.md](./Phase3-Roadmap.md).

