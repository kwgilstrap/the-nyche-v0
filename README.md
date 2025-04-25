# 🗽 The NYChe

**Image isn’t everything—it's the first thing.**

A modern menswear and lifestyle platform built with purpose and polish.  
The NYChe is a digital home for New York City dressers who move with intent, appreciate quality, and reject the algorithm’s hype.

---

# 📄 Product Overview

- Serve high-quality, editorialized menswear and lifestyle content
- Offer styling and shopping services (virtual and in-person)
- Integrate curated affiliate shopping opportunities
- Build a brand identity rooted in substance over status

---

# 🛠️ Tech Stack

| Layer         | Choice             | Notes                              |
|---------------|---------------------|------------------------------------|
| Frontend      | Next.js 15.2.4       | App Router, SSR/SSG                |
| Styling       | Tailwind CSS         | Utility-first CSS                  |
| CMS           | Markdown             | Local content in `/src/content`    |
| Hosting       | Vercel               | Git-linked, fast edge deploy       |
| Backend       | Supabase (optional)  | Forms, auth if needed              |
| E-comm        | TikTok Shop          | Integrated via iframe/modal        |
| Email         | Beehiiv              | CRM and newsletters                |

---

# 🧱 Folder Structure

```bash
.
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── lib/                 # Utilities and helper functions
├── hooks/               # Custom React hooks
├── styles/              # Tailwind & global CSS
├── public/              # Static assets
├── src/content/         # Markdown content (editorial, services)
├── src/docs/            # Strategy, memory-bank, and usage docs
├── updates/             # WIP or scratchpad files
├── package.json         # Project dependencies
├── next.config.mjs      # Next.js configuration
└── README.md            # Project overview
```

---

# 🧠 Memory Bank

Refer to [`/src/docs/memory-bank.md`](../docs/memory-bank.md)  
All Cursor-based contributions should read this file first.

---

# 🛠 Local Development

## Prerequisites

- Node >=20 (recommended via `n`)
- NPM >=9

## Quickstart

```bash
git clone https://github.com/kwgilstrap/the-nyche-v0.git
cd the-nyche-v0
rm -rf node_modules package-lock.json
npm install
npm run dev
```

App runs at: http://localhost:3000

---

# 🌐 Deployment

- **Platform:** Vercel
- **Domains:** thenyche.com, www.thenyche.com → cname.vercel-dns.com
- **A Record:** 76.76.21.21

**Environment Variables:**

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
```

---

# 📚 Documentation Map

- [`/src/docs/The-NYChe-Master-Strategy-Document.md`](../docs/The-NYChe-Master-Strategy-Document.md)
- [`/src/docs/Cursor_Build_GroundRules.md`](../docs/Cursor_Build_GroundRules.md)

---

# ⚙️ Development Norms

- No framework switches (Next.js only)
- No CMS migration (Markdown stays)
- Default JavaScript (not TypeScript unless needed)
- Supabase optional, minimal backend
- Deno plugin used only for Edge Functions

---

# 🧪 Testing & Linting

(Coming Soon)

---

# ⚖️ License

MIT License.  
Built and maintained by @kwgilstrap.

---

# 🏁 Final Notes

This platform is a quiet rebellion against hype, clutter, and speed.  
The NYChe is where NYC men come to dress well, live slow, and move with purpose.

---
