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
      'How I use AI in engineering work: generated code follows the same review, testing and verification as code written by hand.',
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
      'I am a Senior Software Engineer with over 18 years of experience, focused on frontend platforms and the problems that appear when many teams work on the same codebase. I came to code through art and design, and I still care whether the structure makes sense at a glance.',
    buttons: { github: 'GITHUB', linkedin: 'LINKEDIN', email: 'EMAIL', cv: 'CV.PDF ↓' },
  },

  sections: {
    approach: { num: '01', title: 'How I work' },
    focus: { num: '02', title: 'What I work on' },
    ai: { num: '03', title: 'AI', eyebrow: 'TOOLS, REVIEW AND VERIFICATION' },
    experience: { num: '04', title: 'Experience' },
    projects: { num: '05', title: 'Personal projects' },
    contact: { num: '06', title: 'Get in touch' },
  },

  approach: [
    {
      label: 'Art_School',
      tone: 'root',
      title: 'I still look at code the way I looked at design',
      body: '<b>I started in design</b>, then moved through frontend, full-stack work and infrastructure. That background probably explains why I care so much about structure. I like software that makes sense when you look at it, not only when you run it.',
    },
    {
      label: 'The_Boundaries',
      title: 'The rules should survive my absence',
      body: '<b>A large part of my work sits between teams</b>: module boundaries, shared code, dependencies, build tooling and CI. I write down the reason for a rule, then turn it into a check when possible. The codebase should not depend on somebody remembering how things are supposed to work.',
    },
    {
      label: 'Hands_On',
      title: 'I stay close to the code',
      body: '<b>I still spend a lot of time in implementation and debugging.</b> I work on shared tooling, investigate platform-wide breakage and automate decisions that would otherwise be repeated in reviews. When a problem belongs to another team, I document it, hand it over clearly and stay available without taking the work away from them.',
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
    heading: 'How I use AI in engineering work',
    paragraphs: [
      'AI-assisted and agentic development is part of my workflow, but generated code follows the same standard as any other code. If it cannot be reviewed, tested and verified, it does not go in.',
    ],
    rulesLead: 'Three rules keep that practical.',
    rules: [
      '<b>I only delegate what I can verify.</b> If I cannot review and understand the result, doing it faster is not useful.',
      '<b>I check whether the change belongs before I check whether it works.</b> Agents will rebuild things that already exist and make the suggestion sound convincing. The first question is whether the new code should exist at all.',
      '<b>The same gates apply to every contributor.</b> Human or generated, code has to respect the same module boundaries, tests and quality checks before it reaches main.',
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
      title: 'Frontend Developer',
      company: 'Treedom',
      context: 'E-commerce platform for tree planting',
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
      title: 'Frontend Developer',
      company: 'Forzieri.com',
      context: 'Luxury e-commerce',
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
      title: 'Head of Web · Full-Stack Designer',
      company: 'Easysystem',
      context: 'Web agency and IT services',
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

  projects: [
    {
      name: 'Lumina',
      kind: 'FANTASY MUD',
      description:
        'A fantasy MUD I built end to end, from the Node.js/MongoDB backend to the React client and Cloudflare infrastructure.',
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

  workClosing:
    'I started in design, moved through frontend, backend and infrastructure, and ended up working on the structure shared by many teams. The scale changed but the habit did not: <b>understand how the whole thing fits together, then fix the part that keeps making the same problem return</b>.',

  footer: {
    built: 'Written, designed and shipped by me.',
  },

  nowBadge: 'CURRENT',

  contact: {
    invite: 'Write any time, even just to talk.',
    inviteMore:
      'A new conversation has never once bothered me, and a proposal that makes me curious even less so.',
    cv: 'CV (PDF)',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    instagram: 'Instagram',
  },
};
