# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `bun dev` — Start dev server with Turbopack (Next.js 16)
- `bun run build` — Production build
- `bun run start` — Serve production build
- `bun run lint` — ESLint via `next lint` (extends `next/core-web-vitals`)
- No test framework is configured

## Architecture

This is a **personal portfolio website** built with Next.js 16 App Router, recently migrated from Vite+React. It's a single-page site with no additional routes.

### Rendering Model

Every component uses `"use client"` because the entire page is animation-heavy (Motion library). The page structure is:

- `app/layout.tsx` — Root layout with Lora font, metadata/SEO, dark theme (`#202023`)
- `app/page.tsx` — Renders `HomeContent` (the only route)
- `app/components/HomeContent.tsx` — Client component that orchestrates all sections with staggered Motion animations
- `app/loading.tsx` — Skeleton loading state

### Component Organization

- `components/` — All UI components: `HomeContent` (page orchestrator), `Navbar`, `Name`, `About`, `Projects`, `ProjectCard`, `Skills`, `Icons`, `Footer`
- `lib/animations.ts` — Centralized Motion animation variants, transitions, easing curves, and viewport configs. All components import from here for consistency.
- `lib/projectData.ts` — Static project data array used by `Projects`/`ProjectCard`

### Key Patterns

- **Motion library**: Uses `motion/react` (not `framer-motion`). Components use `variants`, `whileInView`, `whileHover` extensively. Reduced motion is respected via `useReducedMotion()`.
- **Path alias**: `@/*` maps to project root (e.g., `@/components/About`, `@/lib/animations`)
- **CSS**: Tailwind CSS v4 via `@tailwindcss/postcss`. Custom CSS classes in `globals.css` for animation performance (`motion-element`, `navbar-icon`, etc.) and `prefers-reduced-motion` support.
- **Images**: Uses `next/image` throughout. SVG icons served from `/public/icons/`, project screenshots from `/public/projects/`.
- **Package manager**: Bun (uses `bun.lock`)
