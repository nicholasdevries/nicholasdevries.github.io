# nicholasdevries.github.io

My personal site — a single static page built with Next.js and deployed to GitHub Pages.

Live at [nicholasdevries.github.io](https://nicholasdevries.github.io).

## Getting started

Requires Node (see `.node-version`) and pnpm.

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Scripts

| Command      | What it does                                        |
| ------------ | --------------------------------------------------- |
| `pnpm dev`   | Dev server with hot reload                          |
| `pnpm build` | Static export to `out/`                             |
| `pnpm start` | Serve the built `out/` directory                    |
| `pnpm test`  | Vitest + coverage (watches locally, one-shot in CI) |
| `pnpm check` | Biome lint + format, writing fixes                  |
| `pnpm ci`    | Biome check without writing (what CI runs)          |

## Layout

```
src/
  app/         Next.js App Router — page, layout, 404, robots, sitemap
  components/  Button, Image, ProfileImage
  lib/         clsx helper (clsx + tailwind-merge)
  __tests__/   Vitest tests and snapshots
```

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `out/` to GitHub Pages. Pull requests run lint, build, and tests via
`.github/workflows/ci.yml`.
