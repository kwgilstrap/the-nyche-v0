# Cursor Ground Rules for The NYChe

> A minimalist set of operating principles for using Cursor effectively while building The NYChe. These are NOT part of `.cursorrules` or user settings — just a pinned, shared doc for clarity and consistency.

---

## 🧠 Primary Goal

Keep Cursor focused, clean, and stylish — just like the product we’re building.

---

## ✅ What We Always Do

- Stick to **Next.js 13+ (App Router)** with **Tailwind CSS**
- All content is **Markdown-based**, stored under `/src/content/`
- Use **Vercel** for hosting, **Supabase** for forms or auth if needed
- Default language is **JavaScript** (not TypeScript unless required)

---

## ❌ What We Avoid

- No switching to other frontend frameworks mid-build (Svelte, Remix, Astro, etc.)
- No backend frameworks unless scoped (Node API routes, Supabase)
- No major dependency changes unless pre-approved
- No custom CMS — **Markdown is the CMS**

---

## 🔄 Cursor Usage Rules (to pin/context switch)

### 1. Keep Responses Scope-Locked
> “Only edit what’s needed, don’t introduce new tech unless asked.”

### 2. Use Inline Docs Only When Necessary
> “Comment when logic is non-obvious or requires domain context.”

### 3. Don't Touch Brand Voice Unless Asked
> “Content, copy, and voice should only be changed if explicitly requested.”

---

## 📦 Deno & Environment Notes

- Deno plugin is enabled in Cursor (VS Code extension active)
- Use `deno.json` or `settings.json` for tweaks
- Don't try to replace Node.js stack with Deno yet — use for **edge functions only** (experimental)

---

## 📁 Folder Structure Norms

- `/src/components` – UI logic (CTA.js, Hero.js, etc.)
- `/src/content` – Markdown blog/articles/services
- `/public/images` – Local assets, not remote or bucket unless needed
- `/updates/` – Scratchpad/backup code not in prod yet
- `/docs/` – Strategy, usage, and pinned guidance like this

---

## 🧘 TL;DR

Cursor is here to support a minimalist, editorial, and stylish build.
Stick to the tech stack. Don’t offer reinventions unless asked.
Let’s ship The NYChe like a quiet, beautiful rebellion.

