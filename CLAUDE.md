# CLAUDE.md

Personal site: one static page, Next.js App Router, statically exported (`output: 'export'`)
and deployed to GitHub Pages. Small on purpose — keep it that way.

## Commands

- `pnpm test` — Vitest + coverage; watches locally, so use `pnpm test run` for a one-shot,
  `pnpm test run -u` to update snapshots
- `pnpm check` — Biome lint + format with fixes; run before committing

pnpm only — the lockfile is `pnpm-lock.yaml` and CI installs with `--frozen-lockfile`.

## Conventions

- Biome handles lint and formatting — don't hand-format; run `pnpm check`.
- Components are arrow functions with named exports (`export const Button = ...`).
  Pages use `export default`.
- Tailwind v4 for styling. Merge class names through `clsx` from `src/lib/clsx.ts`
  (clsx + tailwind-merge), not raw template strings — Biome's `useSortedClasses` is
  configured to sort inside `clsx()` calls.

## Static export constraints

- No server components with runtime data, no route handlers, no middleware, no ISR.
  Everything must be renderable at build time.
- The Next.js image optimizer is unavailable, so images pass a custom `loader`
  (see `src/components/Image.tsx` and `ProfileImage.tsx`). New images need the same
  treatment.

## Tests

Page tests are snapshot based — if a snapshot changes, confirm the markup change was
intended before updating it.
