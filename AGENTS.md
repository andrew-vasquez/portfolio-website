# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 16 App Router portfolio site.

- `app/`: route entrypoints and global app shell (`layout.tsx`, `page.tsx`, `globals.css`).
- `components/`: UI sections and reusable components (for example `HomeContent.tsx`, `Navbar.tsx`, `ProjectCard.tsx`).
- `lib/`: shared logic and static content (`animations.ts`, `projectData.ts`).
- `public/`: static assets (`public/icons/*`, `public/projects/*`, `favicon.ico`).
- `.github/`: contributor automation and assistant instructions.

Use the `@/*` path alias for imports (example: `@/components/HomeContent`).

## Build, Test, and Development Commands
This project uses Bun (`bun.lock` is committed).

- `bun dev`: start local development server with Turbopack.
- `bun run build`: create a production build.
- `bun start`: run the production server locally.
- `bun run lint`: run ESLint across the repository.

If Bun is unavailable, equivalent npm scripts exist (`npm run dev`, `npm run build`, etc.).

## Coding Style & Naming Conventions
- Language: TypeScript + React 19 (strict mode enabled in `tsconfig.json`).
- Indentation: 2 spaces; keep existing quote style (`"` in TS/TSX).
- Components: PascalCase file names (`Skills.tsx`, `Contact.tsx`).
- Utilities/data modules: camelCase file names (`projectData.ts`, `animations.ts`).
- Styling: Tailwind CSS v4 in JSX and shared styles in `app/globals.css`.
- Linting: `eslint-config-next/core-web-vitals` via `eslint.config.mjs`.

## Testing Guidelines
A formal test framework is not configured yet. Before opening a PR:

- Run `bun run lint`.
- Run `bun run build` to catch type/build regressions.
- Manually validate the home page and key sections in desktop/mobile breakpoints.

When adding tests later, prefer colocated `*.test.ts(x)` files next to the module under test.

## Commit & Pull Request Guidelines
Recent history shows concise, imperative commit subjects (examples: `Fix ...`, `Refactor ...`, `Add ...`). Follow that pattern and keep each commit focused.

For pull requests:

- Provide a clear summary and reasoning.
- Link the related issue/task when applicable.
- Include before/after screenshots for UI changes.
- Confirm `bun run lint` and `bun run build` pass locally.
