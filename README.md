# andrea-lisi.com

Personal portfolio. Single page, editorial / astronomical aesthetic, animated solar-system hero.

## Stack

- **[Astro](https://astro.build/)** — static output, partial hydration via React islands.
- **React 19** — only for the animated SVG components (`SolarSystem`, `SkillCloud`) and live telemetry.
- **CSS** — `tokens.css` is the variable source of truth, scoped Astro `<style>` blocks per component, `responsive.css` for breakpoints. No utility-CSS framework.
- **[Biome](https://biomejs.dev/)** — single-binary linter + formatter, strict ruleset.
- **[Vitest](https://vitest.dev/)** + Testing Library — unit tests for hooks and React islands.
- **[Playwright](https://playwright.dev/)** + axe-core — end-to-end smoke + accessibility checks.
- **Netlify** — hosted via `@astrojs/netlify` adapter.
- **GitHub Actions** — quality (lint + typecheck + unit), build, and E2E + a11y on push / PR.

## Development

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # type-check + Astro build -> dist/
npm run preview    # serve the production build locally
```

## Quality gates

```bash
npm run lint       # Biome: lint + format check
npm run lint:fix   # Biome: apply fixes
npm run format     # Biome: format only
npm run typecheck  # astro check (TS + .astro)
npm run test       # Vitest unit tests (jsdom)
npm run test:watch # Vitest watch mode
npm run test:coverage  # coverage report (v8)
npm run verify     # lint + typecheck + unit + build (full local CI)
```

### End-to-end + a11y

```bash
npm run test:e2e:install   # one-time: install Playwright browsers
npm run test:e2e           # build + preview + run Playwright suite
```

The E2E suite covers section presence, console-error budget, island hydration,
the prefers-reduced-motion path, and a WCAG 2.1 AA axe scan.

## Deploy

Netlify auto-builds from the `main` branch using `netlify.toml`. The Astro adapter outputs a static site to `dist/`.

To link a fresh repo: connect the GitHub repo in the Netlify UI (no env vars required) — `netlify.toml` handles `command`, `publish`, and Node version.

## Structure

```
src/
├── layouts/
│   └── Layout.astro                # html shell, fonts, meta, global CSS
├── pages/
│   └── index.astro                 # composes the page sections
├── components/
│   ├── Hero.astro                  # hero section (loads React islands)
│   ├── About.astro
│   ├── Skills.astro                # loads SkillCloud island
│   ├── Work.astro
│   ├── Footer.astro
│   ├── SectionHeader.astro
│   ├── SocialLink.astro
│   ├── GradientArc.astro           # static SVG, no JS
│   ├── CornerMarks.astro
│   ├── ScrollHint.astro
│   └── react/                      # client islands (animated)
│       ├── SolarSystem.tsx         # rAF, parallax via ref, hover-on-orbit
│       ├── SkillCloud.tsx          # planet + 4 moons with labels
│       ├── TopMeta.tsx             # GeoCoords + TransmittingTicker
│       ├── Telemetry.tsx           # cycling eyebrow line
│       └── useReducedMotion.ts     # shared media-query hook
└── styles/
    ├── tokens.css                  # CSS variables (single source of truth)
    ├── global.css                  # base + keyframes + reduced-motion
    └── responsive.css              # 1024 / 768 / 480 breakpoints

tests/
├── unit/                           # Vitest + Testing Library
│   ├── setup.ts                    # jsdom + matchMedia mock + jest-dom matchers
│   ├── useReducedMotion.test.ts
│   ├── Telemetry.test.tsx
│   └── TopMeta.test.tsx
└── e2e/                            # Playwright + axe
    └── homepage.spec.ts
```

## Hydration strategy

| Component       | Directive          | Why                                                   |
|-----------------|--------------------|-------------------------------------------------------|
| `SolarSystem`   | `client:visible`   | Heavy SVG with rAF; only mount when in viewport.      |
| `SkillCloud`    | `client:visible`   | Below the fold, animated.                             |
| `TopMeta`       | `client:load`      | Visible LED + transmitting indicator, hydrate early.  |
| `Telemetry`     | `client:idle`      | Decorative cycling line, can wait for idle.           |

Everything else is server-rendered at build time. Total client JS is bounded by the React runtime + the four islands.

## Reduced motion

Every animated island reads `useReducedMotion`. When the user prefers reduced motion:

- The `requestAnimationFrame` loops are skipped (planets/moons rest at `t=0`).
- Mouse-parallax listener is not attached.
- Telemetry line is rendered statically (no cycling, no fade).
- Coordinates / packet counter intervals are not started.
- The Sun's SMIL `<animate>` elements are omitted.
- The TRANSMITTING LED CSS animation is disabled.

A global `@media (prefers-reduced-motion: reduce)` rule in `global.css` neutralises any remaining CSS transitions.

## Original design handoff

Prototype and design notes live under `design_handoff_personal_portfolio/`. They are reference only — production code is in `src/`.

## License

UNLICENSED — personal site. Code is shared for transparency, not for reuse.
