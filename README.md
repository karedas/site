# andrea-lisi.com

Personal portfolio of Andrea Lisi, Senior Software Engineer. Experience, technical
skills, personal projects and an overview of how I use AI in software development.
Available in English and Italian, with downloadable CVs.

## Stack

- Astro: static HTML, without a client-side framework runtime.
- TypeScript and CSS: typed content, shared design tokens and component styles.
- Biome: formatting and linting.
- Vitest: content, locale parity and routing tests.
- Playwright and axe-core: browser, download, responsive and accessibility checks.
- GitHub Actions: quality checks, build and browser tests.
- Netlify: hosting configuration in `netlify.toml`.

The current design uses a navy background, green accents and Figtree / JetBrains
Mono typography. Small scripts handle progressive enhancements such as the dot
field and reveal effects. Content remains available without JavaScript, and motion
is reduced when the visitor requests it. The former React / Three.js console
design is no longer part of the site.

## Development

Requires Node.js 22.12 or later and pnpm (the version is pinned in `package.json`).

```sh
pnpm install
pnpm dev          # local development, normally on :4321
pnpm build        # type check and production build in dist/
pnpm preview      # preview the production build
```

## Checks

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm verify       # lint, types, unit tests and build
pnpm test:e2e:install
pnpm test:e2e
```

Browser tests use a production preview on port 4323. If a server is already running
there locally, rebuild it first: the test runner reuses that server. Tests cover
both languages, navigation, project images, CV downloads, narrow viewports,
no-JavaScript rendering, reduced motion and automated accessibility checks.

## Content and structure

```text
src/i18n/         English and Italian copy, shared types and routing helpers
src/pages/        /, /it/, /ai and /it/ai
src/components/   Page sections and their styles
src/layouts/      HTML shell, metadata, fonts and shared scripts
src/styles/       Design tokens, global styles and motion preferences
src/scripts/      Progressive enhancements
public/           CV PDFs, portraits, project screenshots and favicon
scripts/          Bilingual CV content and PDF generator
tests/unit/       Content and routing tests
tests/e2e/        Browser and accessibility tests
```

Edit the two locale files together. Project entries can link to public code or a
live project; private experiments can instead show screenshots and an explicit
development status. Deepfield is a discontinued prototype, not a released product,
and its private repository is not linked from the site.

The CVs are generated from `scripts/cv-it.json` and `scripts/cv-en.json`; see
[the CV instructions](scripts/README-cv.md). The generator writes one language at
a time. Review both the wording and the rendered pages before publishing.

## Deployment

`netlify.toml` sets `pnpm run build`, the `dist/` output folder, Node 22, asset
caching and security headers. The repository connection and production branch
are configured in Netlify. Changes should be reviewed through a pull request
before merging into the production branch.

## License

UNLICENSED — personal site. Code is shared for transparency, not for reuse.
