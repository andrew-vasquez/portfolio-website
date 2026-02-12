# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `bun dev` — Start dev server with Turbopack (Next.js 16)
- `bun run build` — Production build
- `bun run start` — Serve production build
- `bun run lint` — Run ESLint on the project (via `eslint .`)
- No test framework is configured

## Architecture

Personal portfolio website built with Next.js 16 App Router. Single-page site, no additional routes.

### Rendering Model

Every component uses `"use client"` — the entire page is animation-heavy (Motion library). The page structure is:

- `app/layout.tsx` — Root layout with Lora font, metadata/SEO, dark theme (`#0a0a0f`)
- `app/page.tsx` — Renders `HomeContent` (the only route)
- `components/HomeContent.tsx` — Client component that orchestrates all sections with staggered Motion animations
- `app/loading.tsx` — Skeleton loading state

### Key Files

- `lib/animations.ts` — Centralized Motion variants, transitions, easing curves, and viewport configs. All components import from here for consistency.
- `lib/projectData.ts` — Static project data array used by `Projects`/`ProjectCard`
- `components/PixelSnow.jsx` — Three.js WebGL shader component (note: `.jsx`, not `.tsx`). Dynamically imported with `ssr: false` to code-split Three.js (~150KB+).

### Key Patterns

- **Motion library**: Uses `motion/react` (not `framer-motion`). Components use `variants`, `whileInView`, `whileHover` extensively. Reduced motion is respected via `useReducedMotion()`.
- **Hoisted variants**: Animation variant objects and hover configs are defined at module scope (not inside components) to avoid re-creation on every render. The React Compiler is enabled (`reactCompiler: true` in `next.config.ts`) but hoisting is still preferred for clarity.
- **Path alias**: `@/*` maps to project root (e.g., `@/components/About`, `@/lib/animations`)
- **CSS**: Tailwind CSS v4 via `@tailwindcss/postcss`. Custom CSS classes in `globals.css` for animation performance (`motion-element`, `navbar-icon`, `below-fold-section` with `content-visibility: auto`, etc.) and `prefers-reduced-motion` support.
- **Images**: Uses `next/image` throughout. SVG icons in `/public/icons/`, project screenshots in `/public/projects/`.
- **Package manager**: Bun (`bun.lock`)

### Performance Optimizations Already Applied

- `next/dynamic` with `ssr: false` for PixelSnow/Three.js
- `content-visibility: auto` on below-fold sections via `.below-fold-section` CSS class
- `matchMedia` listener (not resize) for mobile breakpoint detection in `HomeContent`
- `optimizePackageImports` for `lucide-react` and `motion`
- React Compiler enabled (`reactCompiler: true` — top-level in `next.config.ts`, NOT inside `experimental`)
