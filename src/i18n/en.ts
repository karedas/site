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
      'I evaluate AI tools on real tasks and prepare the repository for teams to use them: instructions, documentation and shared tooling. When Claude, Cursor or other assistants repeat a mistake, I work on its cause as well as correcting the resulting code.',
    moreLabel: 'Read about my workflow',
    paragraphs: [
      'My AI work also involves the repository that teams share. I evaluate Claude, Cursor and other assistants on real tasks and maintain the instructions, documentation and shared tools they use to navigate the code.',
      'When an assistant overlooks an existing library or loses context between modules, correcting that one response is not enough. I investigate the cause, address what is missing in the repository and check whether the problem recurs. The aim is to make those improvements useful to other teams too.',
    ],
    rulesLead: 'What I work on:',
    rules: [
      '<b>Code context.</b> I make module boundaries, conventions and reusable implementations explicit in repository instructions and documentation.',
      '<b>Shared tooling.</b> I assess where assistants run into obstacles and work on repository tools to improve how teams use them.',
      '<b>Verification.</b> I review the diff, run tests and check integration with the project. I remain responsible for the code I adopt and its maintenance.',
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
        '<b>Cross-team decisions.</b> On Tosca Cloud, together with the team’s architect, I was a point of contact for initiatives spanning the monorepo. I worked with developers, engineering managers, principal engineers from other platforms and product stakeholders to define shared solutions.',
        '<b>Platform development.</b> I developed and maintained shared libraries, tools and configurations, fixed cross-project issues and supported adoption across teams. My work focused on the shared platform; product features belonged to their respective teams.',
        '<b>Migrations and design system.</b> I built the infrastructure for updates, coordinated them with teams and carried them out myself when needed. I worked on shared components and themes to resolve inconsistencies between products.',
        '<b>Performance and tooling.</b> I optimized builds and pipelines and modernized development tools. I documented decisions in ADRs, defined monorepo rules and helped teams apply them.',
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
      tags: ['React', 'Webpack', 'E-commerce', 'CMS'],
      paragraphs: [
        'I modernized the frontend of a live luxury e-commerce platform, gradually introducing React and a new Webpack setup.',
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
      description:
        'A multiplayer fantasy game built around text. I develop the Node.js/MongoDB backend, React client and Cloudflare infrastructure.',
      tags: ['Node.js', 'MongoDB', 'React', 'Cloudflare'],
      href: 'https://luminamud.com/',
      linkLabel: 'Explore Lumina',
      detail:
        'A personal project that brings together interface design, application code and the systems behind the game.',
      imageAlt:
        'Lumina’s public website: a fantasy landscape with gold typography and navigation into the game’s world.',
      imageSrc: '/lumina-preview.webp',
      caption: 'The project’s website. The game is in development.',
    },
    {
      name: 'Deepfield',
      kind: 'Interface and simulation experiment',
      description:
        'A space exploration prototype operated through maps, sensors and shipboard panels. I worked on the simulation and interfaces for navigating the galaxy and managing the ship’s systems.',
      detail:
        'I stopped development because I did not see a sustainable path to bringing it to market. It remains an experiment combining interaction design, data visualization and software development.',
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
