# 📄 Product Requirements Document (PRD)

## IMPORTANT NOTES

- Always read PRD.md before writing any code
- After adding a major feature or completing a milestone, update PRD.md
- Document the entire database schema in PRD.md
- For new migrations, make sure to add them to the same file

## Project Overview

The NYChe is a minimalist, high-impact menswear and lifestyle platform, designed for NYC-minded dressers who value intentional style, slow living, and high-quality craftsmanship. It offers editorial articles, style services, and curated recommendations without succumbing to hype culture.

## Goals

- Serve high-quality, editorialized menswear and lifestyle content
- Offer styling and shopping services (virtual and in-person)
- Integrate curated affiliate shopping opportunities
- Build a brand identity rooted in substance over status

## Functional Requirements

- Editorial System:
  - Serve articles dynamically from Markdown files located in `/content/editorial`
  - SEO-friendly slugs and routing under `/editorial/[slug]`
- Services:
  - Landing page with clear service descriptions (wardrobe audits, sample sale tours, personal shopping)
- Moodboard:
  - User-submitted inspiration (future feature), initially simple integration like linking Pinterest boards
- Booking and Newsletter:
  - Simple, clean CTAs for email signup and service booking (no complex auth at launch)

## Non-Functional Requirements

- Performance: Fast page loads, optimized images, minimal JavaScript where possible
- Accessibility: Meet basic WCAG compliance
- Scalability: Ability to expand editorial sections, service offerings, and add simple user accounts later
- Maintainability: Clean codebase, simple folder structure, markdown-based CMS

## Out of Scope (for now)

- Advanced authentication
- Custom user dashboards
- Payment processing (handled externally if needed)

## Current Status

- Markdown editorial routing nearly complete (pending final cache-clear and Vercel deploy confirmation)
- Landing pages drafted and styled with Tailwind
- Service offerings drafted
- Supabase connection placeholder ready
- Homepage live skeleton deployed to Vercel
