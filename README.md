# nicholasdevries.github.io

My personal site — a single static page built with Astro and deployed to GitHub Pages.

Live at [nicholasdevries.github.io](https://nicholasdevries.github.io).

## Getting started

Requires Node (see `.node-version`) and pnpm.

```bash
pnpm install
pnpm dev
```

Then open http://localhost:4321.

## Scripts

| Command          | What it does                               |
| ---------------- | ------------------------------------------ |
| `pnpm dev`       | Dev server with hot reload                 |
| `pnpm build`     | Static build to `dist/`                    |
| `pnpm preview`   | Serve the built `dist/` directory          |
| `pnpm typecheck` | `astro check` (TypeScript diagnostics)     |
| `pnpm check`     | Biome lint + format, writing fixes         |
| `pnpm ci`        | Biome check without writing (what CI runs) |

## Layout

```
src/
  pages/       Routes — index, 404
  layouts/     Layout (head, fonts, background)
  components/  Masthead, Entry
  styles/      global.css (Tailwind entry)
public/        Static files copied as-is — favicon, robots.txt
```

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with
[`withastro/action`](https://github.com/withastro/action) and publishes `dist/` to GitHub
Pages. Pull requests run lint, type check, and build via `.github/workflows/ci.yml`.
