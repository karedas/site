# Handoff: Andrea Lisi — Personal Portfolio

## Overview

Single-page portfolio for Andrea Lisi (Senior Software Engineer, Vienna). Editorial / astronomical aesthetic: a quiet observatory rather than a tech showcase. The hero is dominated by a tilted solar system (8 planets in an amber→cyan gradient) and live telemetry — coordinates, transmitting indicator, cycling status. Below: About, Skills (with a smaller orbital "planet + 4 moons" diagram), and Selected Work.

The site is intentionally restrained: dark background, a single accent palette progressing from amber (warm) through sage (organic) to cyan (cold), Montserrat throughout, and very small "editorial" details (Roman numerals, hex packet counters, drifting GPS seconds) that imply a long-running radio receiver — not a marketing page.

## About the Design Files

The files in this bundle are **design references created in HTML/JSX** — a working prototype showing the intended look, motion, and live behavior. They are **not production code to copy directly**. The task is to **recreate this prototype in the target codebase's environment** (likely a static site framework: Next.js, Astro, SvelteKit, or similar) using its established patterns and libraries. If no environment exists yet, **Astro or Next.js (App Router) are the strongest fits** — the page is mostly static with a few client-side animated SVG components, ideal for partial hydration.

The current prototype uses inline JSX via `@babel/standalone` and inline-style React objects. A real implementation should:
- Move tokens to CSS variables (already in `tokens.css` — keep as source of truth)
- Convert inline-style React objects to CSS Modules / Tailwind / vanilla-extract / styled-components per house style
- Keep the SVG animation components (`SolarSystem`, `SkillCloud`, `Sun`) as-is (logic is sound) — just port them to whatever React/Vue/Svelte the codebase uses

## Fidelity

**High-fidelity (hifi).** Final colors, typography, spacing, copy, and motion are all set. The developer should match pixel-for-pixel, not stylistically reinterpret.

## Screens / Views

The site is a **single page** with stacked sections. There are no routes.

### 1. Hero (top of page)

- **Purpose**: First impression. Sets editorial tone, establishes the solar-system metaphor, and tells the visitor where you are based.
- **Layout** (desktop ≥1024px):
  - Top bar (`al-topmeta`): horizontal flex, `justify-content: space-between`, padding `40px 80px`. Three children: live coordinates left, "ANDREA LISI" centered, transmitting indicator right.
  - Below that, the **solar system canvas** fills width. SVG, viewBox `1080×620`, planets tilted (`tilt={0.62}` in the SolarSystem props — visual y-flatten of orbits, gives 3/4 perspective).
  - Below the solar system: a centered "compose" block (`al-hero-compose`, max-width 720px, padded 80px sides):
    - Cycling telemetry eyebrow (`Telemetry` component)
    - "Hi, I'm *Andrea*." (display, ~44px, italic em accent)
    - GradientArc SVG decoration (a soft amber→sage→cyan curve)
    - Role line: "Senior Software Engineer / Vienna, AT" 12px uppercase letter-spaced
- **Live elements** (see §Interactions):
  - `GeoCoords` — Vienna coordinates with seconds drifting in real time
  - `TransmittingTicker` — pulsing red LED + word TRANSMITTING + 6-char hex counter incrementing every 600ms + static "MMXXVI" year
  - `Telemetry` — cycles every 6s through 4 strings ("OBSERVED FROM EARTH", "LISTENING ON 1420 MHz", "RANGE: 1.32 LY", "BEARING: 287°·14′") with fade transition

### 2. About

- **Purpose**: Two short paragraphs of bio, plus 4 metadata pills.
- **Layout**: Section padded `80px`. Section header at top (number "01", divider line, subtitle "A short transmission", title "About" right-aligned). Body is max-width ~860px centered.
- **Components**:
  - **Lead paragraph** (~22px, weight 300, lineHeight 1.55): "Twenty years of building on the web — as engineer, designer, sometimes both at once. I sit at the seam where **art meets programming**…" — `art meets programming` is wrapped in `about.hl` span (color amber).
  - **Body paragraph** (~16px, weight 300, color slightly dim): "Currently in Vienna, leading the AI transformation of software quality at Tricentis. My focus is **governance and platform** — the rails other teams build on…"
  - **Meta row** (4 cells in a grid, gap 32px): each cell has a 11px uppercase letter-spaced key ("BASED" / "MODE" / "LANGUAGES" / "STATUS") and a 14px value below.
    - Status value uses `color: C.sage` and a `●` bullet — green dot, "● In orbit — quietly building"

### 3. Skills

- **Purpose**: Show the four practice areas (AI / Architecture / Platform / Craft) as a small orbital diagram, with the actual skill tags listed in chip groups beside it.
- **Layout** (desktop): 2-column grid `minmax(360px, 0.9fr) 1fr`, gap 64px, **vertically centered** (align-items: center).
  - Left: `SkillCloud` SVG (a pale sage-green planet with subtle limb shading, surrounded by 4 elliptical moons orbiting at different periods). Below it, an editorial chart label: `SECTOR · 02 / SKILLS` and `R 235 AU · OBS MMXXVI`.
  - Right: 5 vertical groups of skill chips, gap 36px:
    1. **AI & DX** (CORE — has `pillar: true`, gets a small ⟁ marker and amber border on group title)
    2. **Architecture**
    3. **Platform**
    4. **Engineering**
    5. **Craft & Leadership**
- **Skill chip**: 11px text, weight 500, padding 8/12, border `1px solid var(--border)`, radius 2px, color `--fg-muted`.

### 4. Selected Work

- **Purpose**: Four real career rows, no case-study links. Static information.
- **Layout** (desktop): each row is a 5-column grid `130px 1.6fr 1.2fr 1.3fr 2.0fr`, padded 28px vertical 12px horizontal, with a 1px top border. Hover: top border turns gold + subtle amber gradient background.
- **Data** (4 rows):
  | Year | Title | Location | Role | Tags | Note |
  |---|---|---|---|---|---|
  | 2023 — present | Tricentis · Tosca Cloud | Vienna | Senior Software Engineer · Governance & Platform | AI Transformation / Nx Monorepo / Azure DevOps | Technical governance and architectural validation across teams. Leading the adoption of AI-driven workflows for software quality. |
  | 2019 — 2023 | Treedom | Florence | Senior Frontend · Tech Lead | React / Vue / GraphQL / MongoDB | Direction of the frontend team through 3x growth — recruiting, mentoring, and a full-stack modernization with focus on scalability. |
  | 2017 — 2019 | Forzieri.com | Florence | Frontend Developer | React / Webpack / Angular 2 | E-commerce migration from ASP to React/Webpack and a modular Angular 2 backoffice. |
  | 2007 — 2017 | Easysystem | Figline Valdarno | Head of Web · Full-Stack Designer | Adobe Suite / Full-stack / Windows Server | Sole owner of the web department — creative direction, full-stack delivery, and Active Directory sysadmin. |
- **Title rendering**: title is `<span>`, then a `<span style="display:block">` below for location — 9px uppercase letter-spaced 0.32em, color `--fg-dim`, marginTop 6px.
- **Year rendering**: 12px weight 500, letter-spacing 0.18em, color `--amber`, `whiteSpace: nowrap` (so "2023 — present" doesn't wrap).
- **Note: NO arrow column.** No case-study links — the rows are not interactive beyond hover styling.

### 5. Footer

- 1px top border with a subtle amber→sage→cyan gradient bar overlaid (only the middle 70%), padding `40px 80px`.
- Three children in a flex row: `◆ ANDREA LISI` brand-left, "Built quietly, in Vienna." center, "© MMXXVI" right.

## Interactions & Behavior

### Solar system (hero)

- **8 planets** in elliptical orbits, tilt 0.62 (orbits are flattened ellipses, ratio y = x × (1 − tilt)).
- Each planet's angular position: `θ = (t / period + phase) × 2π`. Periods range 8–142 (slow, peaceful — they should never feel synced).
- Planets are pure SVG `<circle>` filled with their `--gold-hi` / `--amber` / `--sage` etc. color. Some have `glow` (soft blurred halo behind, opacity 0.18) and one has a `ring` (Saturn-like ellipse stroke).
- **Sun** is a stylable component — 5 styles: `soft` (default warm halo), `corona` (radial rays), `ring` (chromatic Saturn-style equatorial ring), `pulse` (slow breathing halo, **default**), `minimal` (just core).
- **Star field**: ~120 tiny stars at random positions, each twinkling on its own phase + period. Pure decoration, no interaction.
- **Comet**: every ~18s, a comet streaks across the canvas left-to-right with a cyan tail (3s duration). Computed from `t` (no extra timer).
- **Mouse parallax**: the entire system center shifts ±a few pixels following the cursor, **smoothed via easing inside the rAF loop, not via React state on mousemove** (this was a critical fix — naive `setState` on mousemove caused render storms when hovering planets). See `solar-system.jsx` lines around the `parallaxRef` / `smoothedRef`.
- **Hover on a planet**: that planet's orbit ring brightens (opacity ~2.3×, stroke-width 1.2 → 0.7), the planet itself scales slightly (×1.25), and any halo glow opacity goes from 0.18 → 0.35. 300ms transition.

### Skill cloud (skills section)

- A single planet (radius 64) with subtle equator line and crescent of light. Atmospheric glow (sage tint).
- 4 moons orbiting at different rx (110, 150, 195, 235) and periods (22, 44, 78, 130). Each moon has a label that follows it: AI / Architecture / Platform / Craft.
- AI moon is highlighted (amber, larger, glow). When a moon passes "behind" the planet (its computed depth puts it on the far side), it dims to ~0.3 opacity so the planet appears to occlude it.

### Telemetry (hero)

- `GeoCoords`: starts at `N 48°12′31.4″ · E 16°22′38.7″`. Every 1s, the decimals drift slightly (sec += 0.05 lat, 0.03 lon, modular 60). Just a tiny "alive" wobble.
- `TransmittingTicker`: 600ms interval, increments hex packet counter by 1–4 each tick. LED pulses via CSS keyframe `al-led-pulse` (1.6s ease-in-out infinite). Year is static "MMXXVI".
- `Telemetry`: every 6s, fade-out (280ms) → switch to next of 4 strings → fade-in. Strings cycle in fixed order. The "RANGE" string computes a value derived from `Date.now()` so it shifts across loads but is otherwise static within a cycle.

### Tweaks panel (toolbar toggle)

- The host (preview environment) shows a "Tweaks" toggle. When activated, the page posts a message and reveals a floating panel bottom-right (320px wide) with 5 sun-style options (soft / corona / ring / **pulse default** / minimal). Selecting one updates the sun rendering live and persists via the `__edit_mode_set_keys` postMessage protocol — the host writes the value back into the source.
- This is a development-time affordance, not a production feature. **Skip in real codebase** unless there's a reason to keep it as a power-user setting.

### Responsive

Three breakpoints, all in `responsive.css`:
- **≤1024px** (tablet): padding 80→48, Skills layout collapses to single column (cloud above, list below — `cloudWrap` no longer sticky), Selected Work rows stack vertically with year on its own row above the title.
- **≤768px** (small tablet): padding 28, "ANDREA LISI" hidden from `topMeta` (only coords + transmitting visible), section headers stack (title under number+sub), footer centered, tweak panel becomes full-width sticky bottom.
- **≤480px** (mobile): padding 20, hex packet counter hidden (saves space), hero solar system aspect 4:3, About metaRow 1-column, all skill groups in a single stack.

## State Management

Mostly **none** — this page is static information with self-contained animation timers.

The few stateful pieces:
- `t` (rAF time) lives inside `SolarSystem` and `SkillCloud` — local state, used only for animation
- `hover` on planets — local component state
- `phase` / `i` (index) inside `Telemetry` — for fade transitions
- `pkt` inside `TransmittingTicker` — packet counter
- `tweaks` (sun style) — top-level Portfolio state, no persistence required for production

No data fetching. No routing. No forms. No backend.

## Design Tokens

All in `tokens.css`. Summary:

### Colors

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#05060b` | Deepest black (rare) |
| `--bg` | `#0a0c17` | Page background |
| `--panel` | `#111427` | Tweaks panel surface |
| `--panel-2` | `#171a30` | Hover panel surface |
| `--border` | `#1f2340` | Hairline borders |
| `--border-soft` | `#151831` | Even softer separators |
| `--amber` | `#e8a13a` | **Section accent 01 / About; warm planets; LED** |
| `--gold` | `#d4a84b` | Gold mid |
| `--gold-hi` | `#f5d27a` | Gold highlight (sun core, hover titles) |
| `--gold-lo` | `#9a7624` | Gold low |
| `--gold-dim` | `#6e5318` | Hex counter color, very dim text |
| `--ember` | `#c97a3b` | (defined, currently unused) |
| `--sage` | `#7fc88c` | **Section accent 02 / Skills; status dot; mid-orbit planet** |
| `--jade` | `#4ea890` | Jade accent planet |
| `--cyan` | `#3fb8d6` | **Section accent 03 / Selected Work; outer planets** |
| `--ice` | `#7fd9ea` | Comet tail, ice highlights |
| `--fg` | `#e8e3d4` | Primary text (parchment) |
| `--fg-muted` | `#b6ae98` | Muted text |
| `--fg-dim` | `#7a735e` | Very dim text (labels, locations) |
| `--fg-gold` | `#e6c573` | Gold text on links |

The amber→sage→cyan progression is **the entire color system**. Section numbers, divider gradients, planet color stops, gradient arc, footer bar — they all draw from this same triad.

### Typography

- **Single family**: Montserrat (Google Fonts). Loaded weights: 300, 400, 500, 600, 700, 800, 900 + italic 300/400/500.
- **Mono**: JetBrains Mono (used only by `--font-mono`, currently sparse).
- **No serif anywhere.** This was an explicit design decision — earlier iterations used Cinzel/Cormorant; deprecated.

Type scale (effective sizes used inline):
- Display name: `clamp(28px, 3.4vw, 44px)` weight 600 letter-spacing 0.32em uppercase
- Section title: `clamp(40px, 5vw, 64px)` weight 700
- Welcome: `clamp(28px, 3.6vw, 44px)` weight 300
- Body lead: 22px weight 300
- Body: 16px weight 300
- Label / eyebrow: 11px weight 500 letter-spacing 0.42em uppercase
- Tag chip: 10–11px weight 500 letter-spacing 0.18em uppercase
- Telemetry / coords: 10–11px monospace-feel via Montserrat 500 letter-spacing 0.32em
- Location label: 9px weight 400 letter-spacing 0.32em uppercase

### Spacing

No formal scale — the prototype uses ad-hoc px values. For implementation, normalize to a 4px or 8px grid:
- Section vertical padding: 80px desktop / 60px tablet / 48px mobile
- Section horizontal padding: 80 / 48 / 28 / 20px (1024 / 768 / 480 breakpoints)
- Grid gaps: 24, 32, 48, 64px
- Component internal padding: 12, 18, 24, 28px

### Radius

- `--radius-sm`: 2px (tag chips)
- `--radius`: 4px (buttons, inputs)
- `--radius-lg`: 8px (panels)

Generally, **the design avoids rounding**. Most things have radius 0 or 2px. This is intentional — sharp edges reinforce the editorial / chart aesthetic.

### Shadows

- `--shadow-panel`: `0 24px 60px -20px rgba(0,0,0,0.8), 0 2px 0 rgba(212,168,75,0.05) inset`
- `--shadow-gold`: `0 0 0 1px rgba(212,168,75,0.35), 0 8px 24px -6px rgba(212,168,75,0.25)`

## Assets

No external assets — everything is generated in SVG. No raster images, no icons.

The single decorative glyph used throughout is `◆` (BLACK DIAMOND, U+25C6) — appears in the footer brand and the SkillGroup pillar marker for "AI & DX".

## Files

In this handoff bundle:

```
design_handoff_personal_portfolio/
├── README.md                       (this file)
├── Andrea Lisi Portfolio.html      (entry point — script tags + root)
├── portfolio-page.jsx              (main React component — all sections)
├── solar-system.jsx                (hero solar system + sun + stars + comet)
├── tweaks-panel.jsx                (dev-only sun style picker)
├── tokens.css                      (all CSS variables + base type)
└── responsive.css                  (breakpoint overrides — 1024/768/480)
```

To preview locally: open `Andrea Lisi Portfolio.html` in a browser via a local static server (the script tags use external CDN URLs and will work offline only with cached files; live reload through any `serve`-style tool works fine).

## Implementation Notes for Claude Code

- **Frame choice**: Astro is the best fit (single static page, partial-hydration islands for the SVG components). Next.js App Router with `'use client'` on the animated components also works.
- **Styling migration**: Inline-style React objects → CSS Modules **or** Tailwind. Keep `tokens.css` as the variable source.
- **The SVG components have working motion logic — port them, don't rewrite.** Specifically: the parallax-via-ref pattern in `SolarSystem` is non-obvious but correct. Don't naively switch to `useState` on mousemove.
- **Live telemetry components** (`GeoCoords`, `TransmittingTicker`, `Telemetry`) are dependent on `setInterval` / `setTimeout`. Keep them client-only. None of them care about the actual time / location — they're decorative; do not connect them to a real clock or geolocation API.
- **Speaker-notes / deck behavior**: none. This is a static page.
- **Accessibility**: the prototype is decoration-heavy. Real implementation should add: `aria-label` on the SVG canvases ("Solar system illustration"), `role="presentation"` on purely decorative elements, ensure all text contrast passes AA against `--bg`, and that the LED pulse / comet animations respect `prefers-reduced-motion` (currently they do not — add a `@media (prefers-reduced-motion: reduce)` block to disable rAF / kill keyframes).
- **SEO**: the only meaningful text for crawlers is About + Selected Work. Make sure those are server-rendered, not client-only.
