# andrea-lisi.com · v2 "Mission Console"

Personal portfolio, second iteration. One-page dark site with a technical HUD aesthetic:
mono labels, corner crosshairs, a sticky status bar, an animated signal-wave canvas and a
procedurally generated three.js asteroid whose faces pulse with warm colors.

## Stack

- **[Astro](https://astro.build/)** — static output, partial hydration via React islands.
- **React 19** — only for the animated islands (`SignalCanvas`, `Asteroid`).
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
pnpm test:e2e           # build + preview on :4323 + Playwright suite
```

The suite runs against the production build, not the dev server: on-demand
compilation made the first hit from each worker time out, and the built site is
what actually ships. Workers are capped at 4 because every page runs a WebGL
loop and a canvas rAF loop, and one Chromium per core starves them all.

The E2E suite covers section presence, the absence of the removed sections and of the
flagged copy patterns, console-error budget, island hydration (canvas + WebGL asteroid),
the CV download link, the nav labels, the mobile bottom bar, a no-JavaScript render, the
prefers-reduced-motion path, the `/ai` deep link, and a WCAG 2.1 AA axe scan on both pages.

## Deploy

Netlify auto-builds from the `main` branch using `netlify.toml`. To link a fresh repo:
connect the GitHub repo in the Netlify UI (no env vars required) — `netlify.toml` handles
`command`, `publish`, and Node version.

## Structure

```
src/
├── layouts/
│   └── layout.astro               # html shell, fonts, meta, reveal-on-scroll script
├── pages/                         # thin: each page just picks a locale
│   ├── index.astro                # /        -> <Home locale="en" />
│   ├── ai.astro                   # /ai      -> <AiPage locale="en" />
│   └── it/
│       ├── index.astro            # /it/     -> <Home locale="it" />
│       └── ai.astro               # /it/ai   -> <AiPage locale="it" />
├── i18n/
│   ├── types.ts                   # the Copy shape both locales must fill
│   ├── en.ts                      # English, the published voice
│   ├── it.ts                      # Italian, the author's original voice
│   └── index.ts                   # locales, getCopy, hrefFor
├── components/
│   ├── home-page.astro            # the whole home page, for one locale
│   ├── ai-page.astro              # the /ai deep link, for one locale
│   ├── lang-switch.astro          # EN / IT, keeps you on the same page
│   ├── rail.astro                 # fixed left rail / mobile bottom bar + scrollspy
│   ├── status-bar.astro           # sticky name + coordinates strip
│   ├── hero.astro                 # 00 · name, stat strip, buttons, canvas + asteroid
│   ├── approach.astro             # 01 · "How I work": six prose blocks
│   ├── ai-section.astro           # 02 · AI, shared by the home page and /ai
│   ├── work.astro                 # 03 · Experience timeline
│   ├── contact.astro              # 04 · CV, profiles, email
│   ├── footer.astro
│   ├── section-header.astro       # giant outlined number + H2_ + eyebrow
│   ├── analytics.astro            # GA, production only
│   └── react/                     # client islands
│       ├── signal-canvas.tsx      # 2D canvas: sine waves + rising dots
│       ├── asteroid.tsx           # three.js asteroid (desktop only)
│       └── use-reduced-motion.ts  # shared media-query hook
├── data/
│   └── ai.ts                      # AI copy, shared by the section and the page
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

Everything else is server-rendered at build time. Scrollspy and reveal-on-scroll are plain
inline scripts (no framework runtime). Reveal-on-scroll hides `[data-rv]` blocks until the
observer fires, so `<html class="no-js">` plus an inline script in `<head>` keeps every
block visible when JavaScript never runs.

## Reduced motion

Honored twice: a global `@media (prefers-reduced-motion: reduce)` kill-switch in
`global.css`, and a JS check (`useReducedMotion` in islands, `matchMedia` in inline
scripts) that skips the rAF loops and renders the canvas and the asteroid as single
static frames.

## License

UNLICENSED — personal site. Code is shared for transparency, not for reuse.
