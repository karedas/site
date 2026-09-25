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
    eyebrow: 'Frontend platforms, developer tooling & design systems',
    stats: [
      { label: 'Based in', value: 'Vienna, Austria' },
      { label: 'Working', value: 'Remote or hybrid', tone: 'now' },
      { label: 'Background', value: 'Web design & UI', tone: 'root' },
      { label: 'Languages', value: 'IT · EN · DE in progress' },
    ],
    intro:
      'Over 18 years building web software, mainly in frontend engineering: applications, shared libraries and developer tools. Architecture, performance and integration work with teams, from technical decisions through to implementation.',
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
      body: '<b>Web design was my starting point.</b> Then came visual identities, print, backend systems and infrastructure. That background still shapes the work with designers: interfaces faithful to the mockups, in both appearance and behaviour.',
    },
    {
      title: 'Rules and automated checks',
      body: '<b>Shared decisions written down; checks automated where possible.</b> Dependencies, module boundaries and builds are part of that work. It also saves me from having the same conversation a dozen times.',
    },
    {
      title: 'Code and collaboration',
      body: '<b>Development and debugging alongside junior and senior engineers.</b> Regular discussions with their managers and with design, security and sales to clarify requirements and agree on changes across products.',
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
      'Evaluation of Claude, Cursor and other assistants on real development tasks. Repository instructions, documentation and shared tools to help them navigate the code. Recurring mistakes are a starting point for improving that setup, alongside correcting the code.',
    moreLabel: 'Read about my workflow',
    paragraphs: [
      'The work starts with real tasks in a repository shared by several teams: trying Claude, Cursor and other assistants, checking where they struggle, and maintaining the instructions, documentation and tools they use to navigate the code.',
      'A missed library or lost context between modules is a reason to look beyond the individual response. What is missing in the repository? Does the problem recur after the correction? Those checks guide changes that other teams can use too.',
    ],
    rulesLead: 'What I work on:',
    rules: [
      '<b>Code context.</b> Documentation of module boundaries, conventions and existing implementations to reuse.',
      '<b>Shared tooling.</b> Assessment of obstacles in assistant workflows and improvements to repository tools used by teams.',
      '<b>Verification.</b> Diff review, tests and integration checks. Responsibility for the adopted code and its maintenance stays with me.',
    ],
    backLabel: 'Back to my work',
  },

  work: [
    {
      years: '2023 · NOW',
      place: 'VIENNA, AT',
      title: 'Senior Software Engineer',
      company: 'Tricentis',
      specialization: 'Frontend Platform, Governance & Design Systems',
      context: 'Work on Tosca Cloud',
      tags: ['React', 'TypeScript', 'Micro-frontends', '16 projects', '12+ teams', 'Quality gates'],
      current: true,
      paragraphs: [
        '<b>Cross-team decisions.</b> Point of contact alongside the team’s architect for Tosca Cloud initiatives spanning the monorepo. Definition of shared solutions with developers, engineering managers, principal engineers from other platforms and product stakeholders.',
        '<b>Platform development.</b> Development and maintenance of shared libraries, tools and configurations; resolution of cross-project issues and support for adoption across teams. Product features remained with their respective teams.',
        '<b>Migrations and design system.</b> Infrastructure for updates, coordination with teams and hands-on migration work when needed. Updates to shared components and themes to resolve inconsistencies between products.',
        '<b>Performance and tooling.</b> Build and pipeline optimization, development tool updates, and documentation of decisions in ADRs. Definition of monorepo rules and support for teams applying them.',
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
        'Contribution to the storefront migration out of the monolith, as part of the frontend team, using React, Vue and GraphQL.',
        'Storefront redevelopment during the company’s growth from around 20 to <b>more than 150 people</b>.',
        'Interfaces for high-traffic campaigns, with regular input from the design and design system teams to incorporate requests and follow mockups and shared standards.',
        'Development of the internal back-office frontend from scratch during the final two years. Sole frontend developer on the project, working with the backend team and the forestry operations staff using the tools.',
      ],
    },
    {
      years: '2017 · 2019',
      place: 'FLORENCE, IT',
      title: 'Frontend Developer',
      company: 'Forzieri.com',
      context: 'Luxury e-commerce',
      tags: ['React', 'Webpack', 'E-commerce', 'CMS'],
      paragraphs: [
        'Gradual introduction of React and a new Webpack setup to modernize the frontend of a live luxury e-commerce platform.',
        'Delivery of new features throughout the migration, with the shop remaining online.',
        'Development across the storefront and the internal CMS for orders and day-to-day shop operations.',
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
        'A role that started in design and expanded into web development, backend systems and infrastructure at client sites.',
        'Design of websites, interfaces, visual identities and print material from scratch for clients.',
        'Development and maintenance of frontend and backend applications.',
        'On-site installation of servers, networks and firewalls, including for manufacturers in Tuscany’s leather and fashion district.',
      ],
    },
  ],

  imagePreview: {
    title: 'Image preview',
    close: 'Close',
    zoom: 'Original size',
    fit: 'Fit to screen',
  },
  projects: [
    {
      name: 'Lumina',
      kind: 'Game development & web design',
      description: 'A personal project: a text-based multiplayer fantasy game.',
      tags: ['Node.js', 'MongoDB', 'React', 'Cloudflare'],
      href: 'https://luminamud.com/',
      linkLabel: 'Explore Lumina',
      detail:
        'Interface design, React client development, Node.js/MongoDB backend and Cloudflare infrastructure.',
      imageAlt:
        'Lumina’s public website: a fantasy landscape with gold typography and navigation into the game’s world.',
      imageSrc: '/lumina-preview.webp',
      caption: 'The project’s website. The game is in development.',
    },
    {
      name: 'Deepfield',
      kind: 'Interface and simulation experiment',
      description:
        'A space exploration prototype operated through maps, sensors and shipboard panels. Simulation and interface development for galaxy navigation and ship systems management.',
      detail:
        'I stopped development because I did not see a sustainable path to bringing it to market. The prototype remains an experiment in interaction design, data visualization and software development.',
      tags: ['TypeScript', 'PixiJS', 'WebGL', 'Simulation'],
      gallery: [
        {
          src: '/deepfield-map.png',
          width: 1600,
          height: 903,
          alt: 'Deepfield: star map with route planning, sensors and ship status.',
          label: 'Enlarge the star map',
        },
        {
          src: '/deepfield-ship.png',
          width: 1600,
          height: 867,
          alt: 'Deepfield: ship engineering schematic with subsystems, diagnostics and alarms.',
          label: 'Enlarge the ship schematic',
        },
      ],
      caption: 'Prototype screenshots. Development stopped; source code is private.',
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
