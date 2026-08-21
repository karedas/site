import type { Copy } from './types';

export const en: Copy = {
  htmlLang: 'en',
  langName: 'EN',

  meta: {
    title: 'Andrea Lisi · Senior Software Engineer · Frontend Platform',
    description:
      'Senior Software Engineer in Vienna, focused on frontend platforms, monorepos and governance across 16 projects and more than 12 teams.',
    ogImageAlt: 'Andrea Lisi, Senior Software Engineer in Vienna',
  },
  aiMeta: {
    title: 'AI · Andrea Lisi · Frontend Platform & Governance',
    description:
      'How I use AI assistants and agents in development: where they help, how I review the result and what checks I apply.',
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
    tagline: 'Frontend platform and governance.',
    eyebrow: 'SENIOR SOFTWARE ENGINEER · FRONTEND PLATFORM & GOVERNANCE · VIENNA',
    stats: [
      { label: 'EXPERIENCE', value: '18+ years' },
      { label: 'FOCUS', value: 'Frontend platform, governance', tone: 'now' },
      { label: 'BASED', value: 'Vienna, remote or hybrid' },
      { label: 'LANGUAGES', value: 'IT · EN · DE in progress' },
      { label: 'FOUNDATION', value: 'Art school, Florence', tone: 'root' },
    ],
    intro:
      'I’m a Senior Software Engineer with over 18 years of experience. Today I work on the frontend platform behind Tosca Cloud, a monorepo containing 16 projects and shared by more than 12 teams. My focus is architecture, dependencies, builds and shared standards.',
    buttons: { github: 'GITHUB', linkedin: 'LINKEDIN', email: 'EMAIL', cv: 'CV.PDF ↓' },
  },

  sections: {
    approach: { num: '01', title: 'How I work' },
    focus: { num: '02', title: 'What I work on' },
    ai: { num: '03', title: 'AI', eyebrow: 'USE, REVIEW AND TESTING' },
    experience: { num: '04', title: 'Experience' },
    projects: { num: '05', title: 'Personal projects' },
    contact: { num: '06', title: 'Get in touch' },
  },

  approach: [
    {
      label: 'Art_School',
      tone: 'root',
      title: 'From design to frontend engineering',
      body: '<b>I started in design, but my career is in frontend engineering.</b> Over time I have also worked on backend systems and infrastructure. That experience helps me see what changes elsewhere in the system when I work on the frontend.',
    },
    {
      label: 'The_Boundaries',
      title: 'Rules and automated checks',
      body: '<b>I often work on problems that affect several teams</b>: module boundaries, dependencies, builds and CI. When a rule matters, I document the reason and add an automated check where I can. That lets the check do the reminding, so I do not have to repeat the same thing to dozens of people one at a time.',
    },
    {
      label: 'Hands_On',
      title: 'I work on the code and alongside the teams',
      body: '<b>I continue to implement, debug and work on shared engineering tools.</b> Every day I work with developers across the teams, from junior to senior, and I regularly speak with their managers. When a decision affects several products, I also work with design, security and sales to understand what is needed and apply it consistently.',
    },
  ],

  focus: [
    {
      title: 'Architecture & platform',
      items: [
        'Monorepo architecture',
        'Micro-frontends',
        'Module boundaries',
        'Dependency governance',
        'Technical RFCs',
      ],
    },
    {
      title: 'Frontend & integrations',
      items: [
        'React',
        'TypeScript',
        'Vue',
        'GraphQL',
        'Node.js',
        'Frontend Okta integration',
        'JWT handling',
        'OpenTelemetry',
      ],
    },
    {
      title: 'Build & delivery',
      items: [
        'CI architecture',
        'Pipeline automation',
        'Build caching & performance',
        'Quality gates',
        'Automated testing',
      ],
    },
    {
      title: 'Developer experience',
      items: ['Shared tooling', 'Engineering standards', 'Documentation', 'AI tooling evaluation'],
    },
  ],

  ai: {
    heading: 'How I use AI in development',
    paragraphs: [
      'I use AI assistants and agents to analyse a project’s code, prepare changes and reduce repetitive work. I use them only when I can understand what they did and check that it works.',
      'I test them on real work to see where they lose context in the codebase. I use that to update the repository’s documentation, rules and tooling.',
    ],
    rulesLead: 'In practice:',
    rules: [
      '<b>First I check whether the change is needed.</b> An agent can suggest rebuilding something that already exists in the project.',
      '<b>I review the result like any other contribution.</b> I read the diff, run the tests and check that it respects the project’s boundaries.',
      '<b>I need to be able to explain and maintain every change.</b> If I cannot, I do not use it.',
    ],
    backLabel: 'ANDREA LISI',
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
        'I work on the frontend platform behind Tosca Cloud, a micro-frontend monorepo containing <b>16 projects and shared by more than 12 teams</b>.',
        'I work on the monorepo’s architecture and governance, particularly module boundaries, dependency rules and shared frontend standards. I also review RFCs that affect the shared frontend.',
        'I administer the Tosca Cloud repository on GitHub and automate its pipelines, including on Azure. With the platform architect, I work on build caching and performance, CI structure and quality gates.',
        'I implement and maintain integrations shared across multiple frontend applications. These include observability with OpenTelemetry and the application-side authentication flow after the Okta login, including JWT handling and HTTP interceptors. When an issue appears across several projects, I debug it at platform level.',
        'I regularly evaluate AI tools, including Claude and Cursor, on real repository work. If they keep stumbling over the same parts of the codebase, I improve its documentation, rules or shared tooling.',
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
        'Modernized a luxury e-commerce platform while it was in production. Gradually replaced ASP and jQuery with React and a new Webpack setup.',
        'Continued to build new features during the migration without taking the shop offline.',
        'Worked on both the storefront and the internal CMS used for orders and day-to-day shop operations.',
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
        'Designed websites, interfaces, visual identities and print material from scratch for client projects.',
        'Built and maintained both frontend and backend applications.',
        'Installed servers, networks and firewalls on site for client companies, including manufacturers in Tuscany’s leather and fashion district.',
      ],
    },
  ],

  projects: [
    {
      name: 'Lumina',
      kind: 'FANTASY MUD',
      description:
        'A fantasy MUD I built myself: a Node.js/MongoDB backend, a React client and Cloudflare infrastructure.',
      tags: ['Node.js', 'MongoDB', 'React', 'Cloudflare'],
    },
    {
      name: 'lockhound',
      kind: 'WINDOWS CLI',
      description:
        'Zero-dependency CLI for Windows that finds and terminates processes locking a folder, using the Windows Restart Manager API.',
      tags: ['Windows', 'Restart Manager API', 'Developer tooling'],
      command: 'npx lockhound',
    },
  ],

  footer: {
    built: 'Written, designed and shipped by me.',
  },

  nowBadge: 'CURRENT',

  contact: {
    invite:
      'Hey! If you want to talk about frontend platforms, developer experience or simply compare notes, send me a message.',
    inviteMore: 'It doesn’t need to be formal. A quick message is fine too.',
    cv: 'CV (PDF)',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    instagram: 'Instagram',
  },
};
