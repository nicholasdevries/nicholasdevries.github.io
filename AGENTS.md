# AGENTS.md

Personal site: one static page built with Astro (static output, zero client JS) and
deployed to GitHub Pages. Small on purpose — keep it that way.

## Commands

- `pnpm check` — Biome lint + format with fixes; run before committing
- `pnpm typecheck` — `astro check`; CI runs it

pnpm only — the lockfile is `pnpm-lock.yaml` and CI installs with `--frozen-lockfile`.

TypeScript is pinned to 6: `@astrojs/check` doesn't support TypeScript 7 yet
(withastro/astro#17268), and Dependabot ignores TS majors until it does.

## Conventions

- Biome handles lint and formatting — don't hand-format; run `pnpm check`.
- Biome only sees the frontmatter of `.astro` files, not the template. Template markup is
  formatted by hand, and `noUnusedImports`/`noUnusedVariables` are off for `.astro`
  (they'd flag everything used only in the template).
- Tailwind v4 for styling, with static `class="..."` lists in the template. For
  conditional classes use Astro's built-in `class:list`.
- Design is editorial "ink on paper". Tokens live in `@theme` in `src/styles/global.css`
  (`paper`, `ink`/`ink-muted`/`ink-faint`, `rule`, `accent`); dark mode overrides
  the token values in a `prefers-color-scheme` block, so don't add `dark:` variants.
  Links, focus, and selection are styled globally in `@layer base`; use the `kicker`
  utility for mono labels.
- Astro collapses whitespace-only text that spans a newline, so inline text next to an
  element needs an explicit `{' '}` (see the PEAK6 link in `src/pages/index.astro`).

## Static output constraints

- No SSR adapter, no on-demand routes, no middleware. Everything must render at build
  time. The sitemap comes from `@astrojs/sitemap` (`/sitemap-index.xml`).
- Fonts use Astro's Fonts API (`fonts` in `astro.config.mjs`), self-hosted at build time.
