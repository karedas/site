import type { Copy } from './types';

export const en: Copy = {
  htmlLang: 'en',
  langName: 'EN',

  meta: {
    title: 'Andrea Lisi · Senior Software Engineer · Frontend Platform',
    description:
      'Senior Software Engineer in Vienna. 18+ years building web applications, frontend platforms and developer tools, with a background in web design.',
    ogImageAlt: 'Andrea Lisi, Senior Software Engineer in Vienna',
  },
  aiMeta: {
    title: 'AI in development · Andrea Lisi',
    description:
      'How I evaluate AI tools on repository work and use recurring problems to improve documentation, context and shared tooling.',
  },

  skipLink: 'Skip to content',
  langSwitchLabel: 'Language',

  nav: {
    ariaLabel: 'Section navigation',
    logoLabel: 'AL, back to top',
    items: [
      { num: '00', label: 'Home', target: 'top' },
      { num: '01', label: 'How I work', target: 'approach' },
      { num: '02', label: 'What I work on', target: 'focus' },
      { num: '03', label: 'AI', target: 'ai' },
      { num: '04', label: 'Experience', target: 'experience' },
      { num: '05', label: 'Projects', target: 'projects' },
      { num: '06', label: 'Contact', target: 'contact' },
    ],
  },

  hero: {
    greeting: 'Ciao. My name is',
    tagline: 'Senior Software Engineer.',
    eyebrow: 'Frontend engineering, architecture and developer tools',
    stats: [
      { label: 'Based in', value: 'Vienna, Austria' },
      { label: 'Working', value: 'Remote or hybrid', tone: 'now' },
      { label: 'Background', value: 'Web design & UI', tone: 'root' },
      { label: 'Languages', value: 'IT · EN · DE in progress' },
    ],
    intro:
      'I’ve been building web software for over 18 years, with deep experience in frontend engineering. I develop applications, shared libraries and developer tools. I work with teams on architecture, performance and integrations, and implement the solutions we agree on.',
    buttons: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Email me', cv: 'Download CV' },
  },

  sections: {
    approach: { num: '01', title: 'How I work' },
    focus: { num: '02', title: 'What I work on' },
    ai: { num: '03', title: 'AI', eyebrow: 'Repository work' },
    experience: { num: '04', title: 'Experience' },
    projects: { num: '05', title: 'Personal projects' },
    contact: { num: '06', title: 'Get in touch' },
  },

  approach: [
    {
      tone: 'root',
      title: 'An eye for the interface',
      body: '<b>I started by designing and building websites.</b> Over the years I’ve also worked on visual identities, print design, backend systems and infrastructure. I work with designers to turn mockups into interfaces that match the design and behave as intended.',
    },
    {
      title: 'Rules and automated checks',
      body: '<b>I document shared decisions and automate checks where I can.</b> This applies to dependencies, module boundaries and builds. It also saves me from having the same conversation a dozen times.',
    },
    {
      title: 'I work on the code and alongside the teams',
      body: '<b>I write code and debug with developers across the teams, from junior to senior.</b> I regularly work with their managers and with design, security and sales to understand requirements and agree on changes that affect several products.',
    },
  ],

  focus: [
    {
      title: 'Architecture & platform',
      items: [
        'Monorepo architecture',
        'Micro-frontends',
        'Module boundaries',
        'Shared libraries',
        'Technical RFCs',
        'ADRs',
        'OpenTelemetry',
        'JWT & HTTP interceptors',
      ],
    },
    {
      title: 'Web development',
      items: [
        'React',
        'TypeScript',
        'Vue',
        'Zustand',
        'GraphQL',
        'Node.js',
        'JavaScript',
        'HTML & CSS',
      ],
    },
    {
      title: 'Build systems & monorepos',
      items: ['Nx', 'pnpm workspaces', 'Vite', 'Webpack', 'Build caching', 'Dependency boundaries'],
    },
    {
      title: 'Testing & delivery',
      items: [
        'Vitest',
        'Jest',
        'Playwright',
        'GitHub Actions',
        'Azure Pipelines',
        'Repository administration',
      ],
    },
    {
      title: 'Design & UI engineering',
      items: [
        'Figma',
        'Adobe Creative Cloud',
        'Design systems',
        'Design tokens',
        'Storybook',
        'Accessibility',
      ],
    },
    {
      title: 'Performance & developer experience',
      items: [
        'Bundle analysis',
        'Code splitting',
        'Browser & CDN caching',
        'Shared tooling',
        'Documentation',
        'AI tool evaluation',
      ],
    },
  ],

  ai: {
    heading: 'How I use AI in development',
    summary:
      'I manage the adoption of AI tools in the repository. I evaluate Claude, Cursor and other tools on real tasks and define rules and context for their use across teams. Recurring problems help me identify where documentation and shared tooling need improvement.',
    moreLabel: 'Read about my workflow',
    paragraphs: [
      'I manage how AI tools are adopted in the repository and in the teams’ development work. I use and evaluate Claude, Cursor and other assistants to analyse code, prepare changes and reduce repetitive work. I define usage rules and maintain the repository context available to them.',
      'I pay attention to recurring mistakes: losing context between modules, overlooking an existing implementation or suggesting changes outside the task. I investigate what is missing from the instructions, documentation or shared tooling before trying again.',
    ],
    rulesLead: 'What I look at:',
    rules: [
      '<b>The task and its context.</b> I check what the repository already provides and which modules the change should touch. An agent proposing duplicate functionality is a useful sign that it has missed part of that context.',
      '<b>The recurring problem.</b> If the same mistake keeps coming back, I check whether an instruction is unclear, documentation is missing or a shared tool needs changing.',
      '<b>The resulting code.</b> I review the diff, run tests and check the integration with the project. I keep changes I can explain and maintain; a plausible answer alone does not tell me whether the software works.',
    ],
    backLabel: 'Back to my work',
  },

  work: [
    {
      years: '2023 · NOW',
      place: 'VIENNA, AT',
      title: 'Senior Software Engineer',
      company: 'Tricentis',
      context: 'Tosca Cloud',
      tags: ['Micro-frontends', '16 projects', '12+ teams', 'Quality gates'],
      current: true,
      paragraphs: [
        'Together with the architect on my team, I am a point of contact for technical initiatives that span the entire monorepo. I work with developers across disciplines, engineering managers, principal engineers from other platforms and product stakeholders to assess needs, dependencies and the impact on teams. Through these discussions, we define shared solutions and support their adoption.',
        'My work includes both technical decisions and implementation: I develop and maintain shared resources, fix cross-project issues and build the infrastructure needed for migrations. I coordinate the integration of new design system versions with the teams and carry out updates myself when needed. When inconsistencies appear between products, I address them in shared configurations and components.',
        'I also work on performance, build optimization and modernizing development tools. I document decisions in ADRs, define monorepo rules and help teams apply them. Product features remain with their teams, where I can also contribute; my ongoing responsibility is the platform they share.',
      ],
    },
    {
      years: '2019 · 2023',
      place: 'FLORENCE, IT',
      title: 'Frontend Developer',
      company: 'Treedom',
      context: 'E-commerce platform for tree planting',
      tags: ['React', 'Vue', 'GraphQL', 'Storefront migration'],
      paragraphs: [
        'As part of the frontend team, I worked on moving the storefront out of the monolith using React, Vue and GraphQL.',
        'I helped rebuild the storefront as the company grew from around 20 to <b>more than 150 people</b>.',
        'I built interfaces for high-traffic campaigns. I worked regularly with the design and design system teams to integrate requests, match the mockups and follow the shared standards.',
        'For my final two years, I built the frontend for the internal back-office tools from scratch. I was the project’s only frontend developer and worked alongside the backend team and the people who used those tools for forestry operations.',
      ],
    },
    {
      years: '2017 · 2019',
      place: 'FLORENCE, IT',
      title: 'Frontend Developer',
      company: 'Forzieri.com',
      context: 'Luxury e-commerce',
      tags: ['ASP', 'jQuery', 'React', 'Webpack'],
      paragraphs: [
        'I modernized a luxury e-commerce platform while it was in production, gradually replacing ASP and jQuery with React and a new Webpack setup.',
        'I continued to build new features during the migration without taking the shop offline.',
        'I worked on both the storefront and the internal CMS used for orders and day-to-day shop operations.',
      ],
    },
    {
      years: '2007 · 2017',
      place: 'FIGLINE VALDARNO, IT',
      title: 'Head of Web · Designer & Developer',
      company: 'Easysystem',
      context: 'Web agency and IT services',
      tags: ['Design', 'Web', 'Backend', 'Infrastructure'],
      paragraphs: [
        'I joined as a designer. Over the years I also worked on web development, backend systems and infrastructure installed at client sites.',
        'I designed websites, interfaces, visual identities and print material from scratch for client projects.',
        'I built and maintained both frontend and backend applications.',
        'I installed servers, networks and firewalls on site for client companies, including manufacturers in Tuscany’s leather and fashion district.',
      ],
    },
  ],

  projects: [
    {
      name: 'Lumina',
      kind: 'Game development & web design',
      description:
        'A multiplayer fantasy game built around text. I develop the Node.js/MongoDB backend, React client and Cloudflare infrastructure.',
      tags: ['Node.js', 'MongoDB', 'React', 'Cloudflare'],
      href: 'https://luminamud.com/',
      linkLabel: 'Explore Lumina',
      detail:
        'A personal project that brings together interface design, application code and the systems behind the game.',
      imageAlt:
        'Lumina’s public website: a fantasy landscape with gold typography and navigation into the game’s world.',
      caption: 'The project’s website. The game is in development.',
    },
    {
      name: 'lockhound',
      kind: 'Open-source developer tool',
      description:
        'A Windows CLI that identifies the processes keeping a folder locked. It uses the Windows Restart Manager API and has no package dependencies.',
      tags: ['Windows', 'Restart Manager API', 'Developer tooling'],
      command: 'npx lockhound',
      href: 'https://github.com/karedas/lockhound',
      linkLabel: 'Read the code on GitHub',
      detail:
        'Run it to inspect the locks. Terminating a process is a separate, explicit action, so you can first see what is holding the folder open.',
      caption: 'Example usage. Inspect a folder without terminating any process.',
    },
  ],

  footer: {
    built: 'Written, designed and shipped by me.',
  },

  nowBadge: 'CURRENT',

  contact: {
    invite: 'Hey! Have a project, a technical role or something you’d like to talk about?',
    inviteMore:
      'I enjoy building software and working through technical problems with other developers. A quick message is a good place to start.',
    cv: 'CV (PDF)',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    instagram: 'Instagram',
    writeLabel: 'Email me',
  },
};
