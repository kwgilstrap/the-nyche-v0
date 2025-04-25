# 🧠 The NYChe Development Memory Bank

## Core Philosophy

The NYChe is a minimalist menswear editorial platform that values:

- Intentional design
- Clean, focused code
- Editorial-first approach
- NYC-inspired aesthetics

## 🛠️ Technical Stack

### Approved Technologies

- **Frontend**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **Content**: Markdown-based (`/content/` directory)
- **Database**: Supabase (when needed)
- **Hosting**: Vercel
- **Edge Functions**: Deno plugin (experimental only)

### Development Rules

- Default to JavaScript unless specified
- No additional backend frameworks beyond Node/Supabase
- No frontend framework switches
- Markdown serves as the CMS - no custom builds
- Deno limited to experimental Edge Function use

## 🎯 Development Guidelines

### Before Each Task

1. Review `.cursor/PRD.md`
2. Verify alignment with product goals
3. Scope-lock changes to explicit requirements
4. Preserve brand voice unless editing is requested

### Code Standards

- Modular component architecture
- Minimal boilerplate
- SSR/SSG preferred
- Clean, focused implementations
- Performance-optimized solutions

### 404 Handling Protocol

1. Verify error source:
   - Routing issues
   - Dynamic generation problems
   - Build artifacts
   - Caching conflicts
2. Document fix verification plan
3. Test live links and dynamic routes post-fix

## 🚫 Restricted Actions

Unless explicitly requested, avoid:

- Large-scale refactoring
- File relocations or renaming
- Tech stack or package upgrades
- Brand voice modifications

## ✅ Post-Edit Checklist

1. Summarize implemented changes
2. Document any necessary next steps
3. Verify changes align with brand strategy
4. Ensure no unintended side effects
5. Confirm performance impact

## 🎨 Brand Guidelines

- Editorial-focused, not e-commerce driven
- Minimalist aesthetic
- Intentional typography
- Clean, fast UI/UX
- NYC-inspired design elements

## 🔄 Workflow Best Practices

1. Scope verification before implementation
2. Minimal, focused changes
3. Documentation updates when needed
4. Performance consideration in all changes
5. Brand consistency check

---

*Last Updated: 2025-04-25*
