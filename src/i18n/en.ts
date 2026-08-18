import type { Copy } from './types';

export const en: Copy = {
  htmlLang: 'en',
  langName: 'EN',

  meta: {
    title: 'Andrea Lisi · Senior Software Engineer · Frontend Platform',
    description:
      'Senior Software Engineer in Vienna, focused on frontend platforms, monorepos, governance and developer experience across 16 projects and 12+ teams.',
    ogImageAlt: 'Andrea Lisi, Senior Software Engineer in Vienna',
  },
  aiMeta: {
    title: 'AI · Andrea Lisi · Staff Engineer',
    description:
      'How I actually work with AI: the work shifted from writing to deciding, and most of the value is in knowing when to stop.',
  },

  skipLink: 'Skip to content',
  langSwitchLabel: 'Language',

  ui: {
    open: 'Open',
    close: 'Close',
  },

  nav: {
    ariaLabel: 'Section navigation',
    logoLabel: 'AL, back to top',
    items: [
      { num: '00', label: 'Home', target: 'top' },
      { num: '01', label: 'How I work', target: 'approach' },
      { num: '02', label: 'AI', target: 'ai' },
      { num: '03', label: 'Experience', target: 'experience' },
      { num: '04', label: 'Contact', target: 'contact' },
    ],
  },

  hero: {
    eyebrow: 'SENIOR SOFTWARE ENGINEER · FRONTEND PLATFORM & GOVERNANCE · VIENNA',
    stats: [
      { label: 'EXPERIENCE', value: '18+ years' },
      { label: 'FOCUS', value: 'Frontend platform, governance', accent: true },
      { label: 'BASED', value: 'Vienna, remote or hybrid' },
      { label: 'LANGUAGES', value: 'IT · EN · DE in progress' },
    ],
    intro:
      'Senior Software Engineer focused on frontend platforms and the problems that appear when many teams work on the same codebase. I got to code through design and music, and I still care what the structure looks like.',
    buttons: { github: 'GITHUB', linkedin: 'LINKEDIN', email: 'EMAIL', cv: 'CV.PDF ↓' },
  },

  sections: {
    approach: { num: '01', title: 'How I work', eyebrow: 'IN MY OWN WORDS' },
    focus: { num: '02', title: 'What I work on', eyebrow: 'THE CENTRE OF THE WORK' },
    ai: { num: '02', title: 'AI', eyebrow: 'AGENTS AND THE RULES THEY WORK IN' },
    experience: { num: '03', title: 'Experience', eyebrow: 'EIGHTEEN YEARS, FOUR PLACES' },
    projects: { num: '05', title: 'Personal projects', eyebrow: 'THINGS I BUILD FOR MYSELF' },
    contact: { num: '04', title: 'Contact', eyebrow: 'CV AND PROFILES' },
  },

  approach: [
    {
      title: 'Clean from minute one',
      body: 'I don’t start dirty. A first demo comes out minimal, but every piece sits where it belongs, ready to grow or be thrown away. Clean, for me, means the boundaries show from outside: where a thing goes, and what is allowed to depend on what. It comes out that way, and it costs me nothing.',
    },
    {
      title: 'In someone else’s house, nothing burns',
      body: 'When I land on a codebase in bad shape I don’t try to clean all of it: that is the fastest way to get resented and finish nothing. I set priorities and start where the result shows up immediately, because the people working there have to see the gain before they feel the cost. But there is always the thing that slows everyone down, the point every change has to go through, and I break that one up before anything else. You pay for it once.',
    },
    {
      title: 'The reason before the rule',
      body: 'Before I impose a rule I go and find the reason, and I write it down. The rule always arrives with its reason attached, and with a deadline a person can live with. Nobody has to take my word for it, and I don’t want them to.',
    },
    {
      title: 'I do the talking, the machine does the repeating',
      body: 'I go and talk to people, always, because a rule you explain out loud gets argued with and a rule you write down just gets endured. What I don’t want is to repeat myself forever. Once the rule is settled it goes into CI as a warning that has to be cleared, and I move to the next one.',
    },
    {
      title: 'Sometimes my job is not solving it',
      body: 'Some of these things I could close on my own and nobody would ever know. I’d rather spend the time it takes to hand them over: write the document, open the ticket, tell the team, set a date. That work is theirs. If I keep doing it for them, they stop knowing it exists.',
    },
    {
      title: 'I come from art',
      body: 'Graphic design first, then the violin, which I played for years. It is not a past I closed: programming is an art to me, and it has to behave like one. Work done well shows at a glance, and it still holds when you take it apart. I look at an interface and at a folder tree with the same eye, and I usually start with the things people can see.',
    },
  ],

  focus: [
    {
      title: 'Architecture & platform',
      items: [
        'Monorepo architecture',
        'Micro-frontends',
        'Module boundaries',
        'Dependency architecture',
        'RFCs',
      ],
    },
    {
      title: 'Frontend',
      items: ['React', 'TypeScript', 'Vue', 'GraphQL', 'Node.js'],
    },
    {
      title: 'Tooling & delivery',
      items: ['Nx', 'Vite', 'Webpack', 'CI/CD', 'Testing', 'Build performance', 'Quality gates'],
    },
    {
      title: 'Developer experience',
      items: [
        'Shared tooling',
        'Engineering standards',
        'Developer experience',
        'AI-assisted and agentic workflows',
      ],
    },
  ],

  ai: {
    heading: 'How I actually work with it',
    paragraphs: [
      'What AI gave me is the ability to keep more fronts open at once than I could hold on my own. While one thing moves I start another. The work shifted from writing to deciding, and putting the problem sharply became the part that actually counts. By now I read and correct far more code than I write.',
      '<b>Most of the value is in stopping.</b> An agent will offer to rebuild something that already exists, and it will sound convincing. Someone has to hold the whole picture and say no. With anything it proposes I look first at whether it belongs in the project at all, and only then at whether it works. What is left is the simplest shape that holds.',
      '<b>I also know when not to use it.</b> Going faster gets talked about everywhere, where to stop far less, and that line is something each person ends up drawing alone, in the middle of the work. I drew mine one project at a time, and what I learn from it I write down, like any other rule.',
      'Then there’s the structural work, the least visible part and the one that holds. The same boundaries that apply across teams now have to apply to a contributor that isn’t a person, and that forces me to write down in full the rules it used to be enough to carry in my head. It’s governance applied to a new kind of contributor, one that reads everything you write and takes it literally.',
    ],
    keywords: [
      ['Agentic coding in IDE and CI', 'Prompt and context engineering', 'MCP'],
      ['RAG and embeddings', 'LLM APIs and evals', 'OWASP LLM Top 10', 'Agentic review in CI'],
    ],
    permalinkSuffix: 'this section on its own page',
    backLabel: 'ANDREA LISI',
  },

  work: [
    {
      years: '2023 · NOW',
      place: 'VIENNA, AT',
      company: 'Tricentis · Tosca Cloud',
      role: 'Platform & Governance · Senior Software Engineer',
      tags: ['Micro-frontends', '16 projects', '12+ teams', 'Quality gates'],
      current: true,
      paragraphs: [
        'I work on the frontend platform behind Tosca Cloud, a micro-frontend monorepo shared across <b>16 projects and more than 12 teams</b>.',
        'I own architectural and governance work across the monorepo, including module boundaries, dependency rules and shared frontend standards.',
        'I work with the platform architect on build performance, CI topology and quality gates.',
        'I handle platform-wide upgrades and shared integrations, <b>fixing breakage centrally before individual teams inherit it</b>.',
        'I review RFCs and cross-team changes when they affect shared frontend boundaries.',
        'I turn conventions into machine-checkable rules for both human and agent-generated code, and stay hands-on with implementation and debugging when issues affect the platform as a whole.',
      ],
    },
    {
      years: '2019 · 2023',
      place: 'FLORENCE, IT',
      company: 'Treedom',
      role: 'Frontend Developer',
      tags: ['React', 'Vue', 'GraphQL', 'Storefront migration'],
      paragraphs: [
        'Joined the frontend team and later led the frontend side of the storefront migration away from the monolith, working with React, Vue and GraphQL.',
        'Rebuilt the storefront foundations as the company grew from around 20 to <b>more than 150 people</b>.',
        'Built high-traffic campaign experiences for a platform that has planted millions of trees.',
        'In my final year, built the frontend of the company’s internal back-office tools from scratch, working closely with the backend team and the people using those tools for forestry operations.',
      ],
    },
    {
      years: '2017 · 2019',
      place: 'FLORENCE, IT',
      company: 'Forzieri.com',
      role: 'Frontend Developer',
      tags: ['ASP', 'jQuery', 'React', 'Webpack'],
      paragraphs: [
        'Modernized a live luxury e-commerce platform without a full rewrite, moving it from legacy ASP and jQuery to React with a Webpack-based frontend toolchain.',
        'Kept shipping features while the migration was in progress and the production shop remained live.',
        'Worked on both the storefront and the internal CMS used for orders and day-to-day shop operations.',
        'Gradually replaced the legacy frontend while changing the architecture underneath it.',
      ],
    },
    {
      years: '2007 · 2017',
      place: 'FIGLINE VALDARNO, IT',
      company: 'Easysystem',
      role: 'Head of Web · Full-Stack Designer',
      tags: ['Design', 'Web', 'Backend', 'Infrastructure'],
      paragraphs: [
        'I joined Easysystem as a designer and gradually ended up doing almost every technical part of client work: web development, backend systems and eventually on-premise infrastructure.',
        'Designed websites, interfaces, visual identities and print material from scratch for client projects.',
        'Built and maintained both frontend and backend applications.',
        'Installed servers, networks and firewalls on site for client companies, including manufacturers in Tuscany’s leather and fashion district.',
        'Followed projects from the first design concepts through development and, in some cases, all the way down to the infrastructure they ran on.',
      ],
    },
  ],

  projects: {
    entries: [
      {
        name: 'Lumina',
        kind: 'FANTASY MUD',
        glyph: 'kite',
        description:
          'A fantasy MUD I built end to end, from the Node.js/MongoDB backend to the React client and Cloudflare infrastructure.',
        tags: ['Node.js', 'MongoDB', 'React', 'Cloudflare'],
      },
      {
        name: 'lockhound',
        kind: 'WINDOWS CLI',
        glyph: 'path',
        description:
          'Zero-dependency CLI for Windows that finds and terminates processes locking a folder, using the Windows Restart Manager API.',
        tags: ['npx lockhound', 'Windows', 'Restart Manager API'],
        command: 'npx lockhound',
      },
    ],
  },

  contact: {
    cv: 'CV (PDF)',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    instagram: 'Instagram',
  },
};
