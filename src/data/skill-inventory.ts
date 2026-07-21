// Full skill inventory, mirrored from page 2 of the CV (distilled from a
// 179-item self-assessment). The legend counters are derived from these
// lists, so the numbers shown always match the chips rendered.

export interface SkillDomain {
  name: string;
  note?: string;
  expert: string[];
  solid: string[];
  familiar: string[];
}

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    name: 'Web platform',
    note: 'languages & fundamentals',
    expert: [
      'JavaScript ES2023+',
      'TypeScript strict',
      'HTML5 semantics',
      'Modern CSS · Grid · container queries',
      'DOM & Web APIs',
      'Responsive / mobile-first',
    ],
    solid: ['Web Components', 'WebAssembly'],
    familiar: [],
  },
  {
    name: 'Frameworks & rendering',
    expert: ['React', 'Next.js', 'Remix / React Router 7', 'Micro-frontends', 'Module Federation'],
    solid: ['Astro', 'React Server Components', 'SSG'],
    familiar: ['Vue 3', 'Angular', 'SSR', 'PWA'],
  },
  {
    name: 'State, data & APIs',
    expert: ['Zustand', 'SWR', 'REST', 'WebSockets / Socket.io'],
    solid: ['TanStack Query', 'RxJS', 'GraphQL · Apollo', 'Zod'],
    familiar: ['Redux Toolkit', 'NgRx', 'Signals'],
  },
  {
    name: 'Styling & design systems',
    expert: [
      'Sass / SCSS',
      'CSS Modules',
      'Design tokens',
      'CSS-in-JS',
      'Design systems',
      'Figma',
      'Atomic design',
    ],
    solid: ['Tailwind CSS', 'PostCSS', 'vanilla-extract'],
    familiar: [],
  },
  {
    name: 'Build & monorepo',
    expert: ['Nx', 'Vite', 'Webpack', 'pnpm workspaces'],
    solid: ['esbuild', 'Rollup', 'Babel', 'Turborepo'],
    familiar: ['SWC'],
  },
  {
    name: 'Testing & code quality',
    expert: [
      'Vitest',
      'Testing Library',
      'Jest',
      'Storybook',
      'MSW',
      'ESLint · Prettier',
      'Conventional commits · Husky',
    ],
    solid: ['Playwright', 'Biome'],
    familiar: ['Cypress'],
  },
  {
    name: 'Performance, a11y & security',
    expert: [
      'Core Web Vitals',
      'Lighthouse',
      'Code splitting',
      'Bundle analysis',
      'HTTP / CDN caching',
      'WCAG 2.2 · ARIA',
      'Keyboard navigation',
      'XSS / CSRF · CSP',
      'JWT / sessions',
    ],
    solid: ['Web Workers', 'OWASP Top 10', 'OAuth 2 / OIDC'],
    familiar: [],
  },
  {
    name: 'AI engineering',
    note: 'the strategic bet',
    expert: ['AI-assisted coding · Claude Code · Cursor · Copilot', 'Prompt & context engineering'],
    solid: [
      'Model Context Protocol',
      'RAG & embeddings',
      'LLM APIs · Anthropic · OpenAI',
      'LLM evals',
      'OWASP LLM Top 10',
    ],
    familiar: [],
  },
  {
    name: 'Cloud, DevOps & data',
    expert: ['GitHub Actions', 'Docker', 'Netlify', 'Feature flags'],
    solid: [
      'Kubernetes',
      'Cloudflare Workers / Pages',
      'Vercel',
      'GitLab CI',
      'Sentry',
      'OpenTelemetry',
      'MongoDB',
      'SQLite',
      'GCP / Azure basics',
    ],
    familiar: ['AWS', 'PostgreSQL', 'Redis', 'Datadog / Grafana'],
  },
  {
    name: 'Leadership & collaboration',
    expert: [
      'System design',
      'RFC / design docs',
      'Technical writing',
      'Mentoring',
      'Stakeholder communication',
      'Estimation & planning',
      'Incident management / on-call',
      'Git · rebase · bisect',
      'PR review culture',
    ],
    solid: ['Trunk-based / Git flow'],
    familiar: [],
  },
];

export const SKILL_COUNTS = {
  expert: SKILL_DOMAINS.reduce((n, d) => n + d.expert.length, 0),
  solid: SKILL_DOMAINS.reduce((n, d) => n + d.solid.length, 0),
  familiar: SKILL_DOMAINS.reduce((n, d) => n + d.familiar.length, 0),
} as const;

export const SKILL_TOTAL = SKILL_COUNTS.expert + SKILL_COUNTS.solid + SKILL_COUNTS.familiar;
