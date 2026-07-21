# andrea-lisi.com · v2 "Mission Console"

Personal portfolio, second iteration. One-page dark site with a technical HUD aesthetic:
mono labels, corner crosshairs, a sticky status bar, an animated signal-wave canvas and a
procedurally generated three.js asteroid whose faces pulse with warm colors.

## Stack

- **[Astro](https://astro.build/)** — static output, partial hydration via React islands.
- **React 19** — only for the animated islands (`SignalCanvas`, `Asteroid`, `SkillCounters`).
- **[three.js](https://threejs.org/)** — the hero asteroid: displaced icosahedron, pulsing
  vertex-color patches, orbiting fragments and a gold dust ring, scroll-linked rotation.
- **CSS** — `tokens.css` is the variable source of truth, scoped Astro `<style>` blocks per
  component. No utility-CSS framework.
- **[Biome](https://biomejs.dev/)** — single-binary linter + formatter, strict ruleset.
- **[Vitest](https://vitest.dev/)** + Testing Library — unit tests for hooks and React islands.
- **[Playwright](https://playwright.dev/)** + axe-core — end-to-end smoke + accessibility checks.
- **Netlify** — deploy from `netlify.toml` (static `dist/`).
- **GitHub Actions** — quality (lint + typecheck + unit), build, and E2E + a11y on push / PR.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

## Build

```bash
pnpm build      # type-check + Astro build -> dist/
pnpm preview    # serve the production build locally
```

## Quality gates

```bash
pnpm lint       # Biome: lint + format check
pnpm lint:fix   # Biome: apply fixes
pnpm format     # Biome: format only
pnpm typecheck  # astro check (TS + .astro)
pnpm test       # Vitest unit tests (jsdom)
pnpm test:watch # Vitest watch mode
pnpm test:coverage  # coverage report (v8)
pnpm verify     # lint + typecheck + unit + build (full local CI)
```

### End-to-end + a11y

```bash
pnpm test:e2e:install   # one-time: install Playwright browsers
pnpm test:e2e           # dev server + Playwright suite
```

The E2E suite covers section presence, console-error budget, island hydration (canvas +
WebGL asteroid), the skill-matrix animation, the CV download link, the mobile bottom bar,
the prefers-reduced-motion path, and a WCAG 2.1 AA axe scan.

## Deploy

Netlify auto-builds from the `main` branch using `netlify.toml`. To link a fresh repo:
connect the GitHub repo in the Netlify UI (no env vars required) — `netlify.toml` handles
`command`, `publish`, and Node version.

## Structure

```
src/
├── layouts/
│   └── layout.astro               # html shell, fonts, meta, reveal-on-scroll script
├── pages/
│   └── index.astro                # composes rail + status bar + sections
├── components/
│   ├── rail.astro                 # fixed left rail / mobile bottom bar + scrollspy
│   ├── status-bar.astro           # sticky SYS NOMINAL bar
│   ├── hero.astro                 # 00 · name, stat strip, buttons, canvas + asteroid
│   ├── about.astro                # 01 · terminal card with staggered lines
│   ├── skills.astro               # 02 · matrix bars + counters + AI panel
│   ├── work.astro                 # 03 · selected work rows
│   ├── personal-projects.astro    # 04 · Lumina card with scan beam
│   ├── off-orbit.astro            # 05 · "Off duty": languages + interests
│   ├── footer.astro
│   ├── section-header.astro       # giant outlined number + H2_ + eyebrow
│   ├── analytics.astro            # GA, production only
│   └── react/                     # client islands
│       ├── signal-canvas.tsx      # 2D canvas: sine waves + rising dots
│       ├── asteroid.tsx           # three.js asteroid (desktop only)
│       ├── skill-counters.tsx     # count-up legend (76 / 42 / 19)
│       └── use-reduced-motion.ts  # shared media-query hook
└── styles/
    ├── tokens.css                 # CSS variables (single source of truth)
    └── global.css                 # base, section shell, keyframes, reduced motion

public/
├── andrea-lisi-cv.pdf             # CV download target (copy of D:\CV output)
├── favicon.svg
└── robots.txt

tests/
├── unit/                          # Vitest + Testing Library
└── e2e/                           # Playwright + axe
```

## Hydration strategy

| Component       | Directive                        | Why                                          |
|-----------------|----------------------------------|----------------------------------------------|
| `SignalCanvas`  | `client:load`                    | Full-bleed hero background, visible at once. |
| `Asteroid`      | `client:media="(min-width: 720px)"` | WebGL: desktop only, never loads on mobile. |
| `SkillCounters` | `client:visible`                 | Below the fold, animates on first view.      |

Everything else is server-rendered at build time. Scrollspy, reveal-on-scroll, terminal
lines and skill bars are plain inline scripts (no framework runtime).

## Reduced motion

Honored twice: a global `@media (prefers-reduced-motion: reduce)` kill-switch in
`global.css`, and a JS check (`useReducedMotion` in islands, `matchMedia` in inline
scripts) that skips the rAF loops and renders the canvas and the asteroid as single
static frames.

## Original design handoff

The "Mission Console" design reference (prototype HTML + notes) came from
`Redesign Andrea Lisi site.zip`. Production code is in `src/`.

## License

UNLICENSED — personal site. Code is shared for transparency, not for reuse.
