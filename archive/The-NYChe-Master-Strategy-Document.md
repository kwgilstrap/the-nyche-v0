# The NYChe – Master Strategy Document

Last updated: 2025-04-22

---

## 🔭 Brand Vision & North Star

> **"Image isn't everything—it's the first thing."**

The NYChe is a high-impact media platform rooted in NYC living and centered on intentional style. We blend editorial depth with personalized styling services for men who want to look sharp, live slow, and move with purpose—without chasing trends.

This is a quiet rebellion against disposable hype and the algorithm. It's clean, considered, and intentionally built for NYC-minded dressers who want peace, clarity, and style.

---

## 🎯 Target Audience

**Demographics:**

- Men, 25–45
- Based in or inspired by NYC
- Upper-middle to high income

**Psychographics:**

- Own cedar shoe trees
- Respect good tailoring
- Read Mr. Porter and Drake's blog for pleasure
- Shop intentionally—buy once, buy right
- Value substance over status
- Cross their sevens
- Seek peace > clout, but still want to look damn good

---

## 🧱 Site Architecture & Content Framework

**Core Editorial Verticals:**

- **Style** – Fit breakdowns, how-to guides, product philosophy
- **Wardrobe** – Drake's-centric picks, repair/care, curated sourcing
- **City** – NYC-specific lifestyle and slow living content
- **Scene** – Dining, design, IRL local gems
- **Desk** – Longform essays, interviews, features

**Service Layers:**

- Virtual wardrobe audits
- In-person audits (NYC)
- Seasonal guides
- Sample sale tours
- Capsule wardrobe planning
- Tailor sourcing
- eBay scouting
- TikTok Shop integration

---

## 🛠️ Technical Framework

| Layer        | Tech                | Notes                              |
|--------------|---------------------|------------------------------------|
| Frontend     | Next.js 13+         | App router + SSR/SSG support       |
| Styling      | Tailwind CSS        | Utility-first, fast dev            |
| CMS          | Markdown            | Easy version control, local content |
| Hosting      | Vercel              | Git-linked, fast edge deployment   |
| E-comm       | TikTok Shop         | Embedded iframe/modal              |
| Backend      | Supabase (optional) | Booking forms, storage, auth       |
| Email        | Beehiiv             | Editorial distribution and CRM     |

---

## 📐 Design System

**Palette**

| Name        | HEX        | Use                             |
|-------------|------------|----------------------------------|
| Ink Black   | `#000000`  | Backgrounds, headlines          |
| Bone White  | `#FFFFFF`  | Negative space, balance         |
| Iron Gray   | `#7A7A7A`  | Muted text, borders             |
| Accent Red  | `#4B5067`  | Links, buttons, branded moments |

**Visual Style**

- Editorial white space with typography-driven hierarchy
- Clean lines with occasional line art or sketch-style illustrations
- No visual noise or overlays
- Mobile-optimized UX with editorial-first UI

---

## 📄 Development Guidelines

**Technology Guardrails:**

- Stick to **Next.js 13+ (App Router)** with **Tailwind CSS**
- All content is **Markdown-based** in `/src/content/`
- Default to **JavaScript** (not TypeScript unless required)
- No framework switching mid-build (no Svelte, Remix, Astro, etc.)
- No backend frameworks unless scoped (API routes, Supabase)
- No custom CMS — **Markdown is the CMS**

**Folder Structure:**

- `/src/components` – UI logic (CTA.js, Hero.js, etc.)
- `/src/content` – Markdown blog/articles/services
- `/public/images` – Local assets, not remote or bucket unless needed
- `/updates/` – Scratchpad/backup code not in prod yet
- `/docs/` – Strategy and guidance documents

**Edge Cases:**

- Deno plugin is enabled for **edge functions only** (experimental)
- Use `deno.json` or `settings.json` for tweaks, but don't replace Node.js

---

## 📈 Success Metrics

- Homepage bounce rate < 40%
- 5+ service bookings/month within 60 days
- Top 20 SEO ranking for NYC men's style terms
- Email list growth: 20% MoM
- Loyal, NYC-style-driven reader base

---

## 🧭 Roadmap (Q2–Q3)

| Phase | Goals                        | Time  |
|-------|------------------------------|-------|
| 1     | Design system + routing      | 2 wks |
| 2     | Editorial layout + service UI| 2 wks |
| 3     | Blog feed, booking flow      | 2 wks |
| 4     | SEO polish + launch          | 1 wk  |

---

## 🔗 Legal

- **Domain:** thenyche.com  
- **Secondary:** drakesguide.com (redirects to "Wardrobe")
- **IP Owner:** TDS LLC  
- All content, design, and code proprietary

---

## 🏁 Intended Outcome

After engaging with The NYChe, the reader should:

- Feel seen and understood
- Trust the advice and point of view
- Consider a paid service because it feels like the obvious next step
- Want to return, slow down, and sharpen up
- Feel like they found their stylish corner of the internet
