# Copilot Instructions

## Commands

- `bun dev` — Start dev server with Turbopack
- `bun run build` — Production build
- `bun run lint` — ESLint (`eslint .`)
- No test framework is configured

## Architecture

Single-page portfolio site built with **Next.js 16 App Router** (React 19). Only one route exists (`/`).

**Every component is a client component** (`"use client"`) because the entire page is animation-driven. The rendering flow is:

```
app/layout.tsx → app/page.tsx → components/HomeContent.tsx → all section components
```

`HomeContent` is the orchestrator — it composes all sections (`Navbar`, `Name`, `About`, `Projects`, `Skills`, `Contact`, `Footer`) with staggered Motion entrance animations.

### Key Files

- `lib/animations.ts` — Centralized Motion variants, transitions, and easing curves. All components import from here.
- `lib/projectData.ts` — Static project data array for the Projects section.
- `components/PixelSnow.jsx` — Three.js WebGL shader snow effect. This is `.jsx` (not `.tsx`) and must be dynamically imported with `ssr: false` to code-split Three.js.

## Conventions

### Animation (Motion library)

- Use `motion/react` — **not** `framer-motion`.
- Import shared `variants`, `transitions`, `viewportConfig` from `@/lib/animations` rather than defining animation objects inline.
- Define animation variant objects and hover configs at **module scope** (outside components), not inside render functions.
- Respect reduced motion via `useReducedMotion()` from `motion/react`.

### Styling

- **Tailwind CSS v4** via `@tailwindcss/postcss`.
- **shadcn/ui** (New York style) is configured — add components with `bunx shadcn@latest add <component>`.
- Dark theme is always active (`<html class="dark">`), background `#0a0a0f`.
- Font: Lora (serif) loaded via `next/font/google`.

### Performance

These optimizations are already in place — preserve them when making changes:

- `next/dynamic` with `ssr: false` for `PixelSnow` (Three.js code-splitting)
- `content-visibility: auto` on below-fold sections (`.below-fold-section` CSS class)
- `matchMedia` listener (not `resize`) for mobile breakpoint detection
- `optimizePackageImports` for `lucide-react` and `motion` in `next.config.ts`
- React Compiler enabled (`reactCompiler: true` — top-level in `next.config.ts`, NOT inside `experimental`)

### Other Patterns

- Path alias: `@/*` maps to project root.
- Images: use `next/image`. SVG icons in `/public/icons/`, project screenshots in `/public/projects/`.
- Package manager: **Bun** (`bun.lock`).
