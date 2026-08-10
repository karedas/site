import type { Copy } from './types';

export const en: Copy = {
  htmlLang: 'en',
  langName: 'EN',

  meta: {
    title: 'Andrea Lisi · Platform & Governance · Vienna',
    description:
      'Platform and governance in Vienna. Eighteen years of code, and I started out drawing. Today I hold a large platform together, with many teams inside it.',
    ogImageAlt: 'Andrea Lisi, platform and governance engineer in Vienna',
  },
  aiMeta: {
    title: 'AI · Andrea Lisi · Platform & Governance',
    description:
      'How I actually work with AI: the work shifted from writing to deciding, and I only delegate what I am able to verify.',
  },

  skipLink: 'Skip to content',
  langSwitchLabel: 'Language',

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
    greeting: 'Ciao. My name is',
    tagline: 'Eighteen years of code, and I started out drawing.',
    eyebrow: 'PLATFORM & GOVERNANCE · SENIOR SOFTWARE ENGINEER · VIENNA',
    stats: [
      { label: 'EXPERIENCE', value: '18+ years' },
      { label: 'FOCUS', value: 'Platform, governance, AI', tone: 'now' },
      { label: 'BASED', value: 'Vienna, remote or hybrid' },
      { label: 'LANGUAGES', value: 'IT · EN · DE in progress' },
      { label: 'FOUNDATION', value: 'Art school, Florence', tone: 'root' },
    ],
    intro:
      'What keeps me switched on is a hard problem, and I don’t leave it until it is solved the way it deserves. It still gets me when something is made well and you see it at first glance: that is what I was after when I was drawing. It is not enough that a thing works, I want to know why.',
    buttons: { github: 'GITHUB', linkedin: 'LINKEDIN', email: 'EMAIL', cv: 'CV.PDF ↓' },
  },

  sections: {
    approach: { num: '01', title: 'How I work' },
    ai: { num: '02', title: 'AI', eyebrow: 'AGENTS AND THE RULES THEY WORK IN' },
    experience: { num: '03', title: 'Experience' },
    contact: { num: '04', title: 'Get in touch' },
  },

  approach: [
    {
      label: 'The_Code',
      body: '<b>I start clean even when it is only a demo.</b> From outside you can see where a thing goes and what may depend on what, and doing that from the start costs nothing. On a codebase already in bad shape I don’t rewrite it all on day one: I start where the result shows, and the file every change has to go through I split before anything else.',
    },
    {
      label: 'The_Rules',
      body: '<b>I don’t want things working only because I am there.</b> When I bring in a rule I write down why, then I turn it into an automated check: the machine remembers it so I don’t have to repeat myself. What I could close in five minutes without anyone noticing I write up and hand to the team, because if I always do it nobody knows it exists.',
    },
    {
      label: 'The_People',
      body: '<b>I talk to everyone, and rank does not come into it.</b> I joke, I laugh, and who I talk to was never decided by an org chart. I save the serious tone for what really deserves it, and that is far fewer things than it looks.',
    },
    {
      label: 'Art_School',
      tone: 'root',
      body: '<b>I come from art</b>: art school, then years of the violin, and I never stopped drawing. A folder is a painting to me, and I hold architecture to the same standard: you can tell at a glance whether there is an order inside it or just things put away.',
    },
  ],

  ai: {
    heading: 'How I actually work with it',
    paragraphs: [
      'What AI gave me is keeping more fronts open than I could hold on my own. The work shifted from writing to deciding, and by now I read and correct far more code than I write.',
      '<b>I only delegate what I am able to verify.</b> With any proposal I look first at whether that thing belongs in the project, and only then at whether it works: an agent will happily rebuild what already exists, or fix the symptom and leave the cause standing. If reading an answer costs me more than writing it, I have saved nothing.',
      '<b>Then there is the structural part, and it is the part that holds.</b> The same boundaries that apply across teams have to apply to a contributor that isn’t a person: the rules get strict and checkable in the pipeline, because an agent does not sense them, it reads them.',
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
      tags: ['Architecture', 'Governance', 'Standards', 'Agentic AI'],
      current: true,
      paragraphs: [
        'I came in on a team building features for specific Tosca Cloud products, Inventory and the API simulation behind api-playground and api-messages, shoulder to shoulder with the same team’s backend engineers, and as the project grew <b>I was promoted into a team created to hold its reins</b>.',
        '<b>I look after the governance of the repository</b>: a micro-frontend monorepo with sixteen projects, released by different teams and still expected to read as one product. What comes in and what stays out, the module boundaries, the dependency graph, and the pipelines with what has to fail before it reaches main.',
        '<b>I act as the gateway between design and the internal teams</b> on standards, and I build the shared resources used instead of rebuilding them: that is where bad practice stops before it turns into habit.',
        '<b>AI I integrate at every level</b>, from developer experience to the pipelines, on the same rules and the same gates as code written by hand.',
      ],
    },
    {
      years: '2019 · 2023',
      place: 'FLORENCE, IT',
      title: 'Frontend Developer',
      company: 'Treedom',
      context: 'E-commerce platform for tree planting',
      tags: ['React', 'Vue', 'GraphQL'],
      paragraphs: [
        'I came in to reinforce two developers on the storefront, and ended up rewriting it as the team grew around us and the whole thing came off the monolith.',
        'In my last year there I <b>built the backend of the internal systems from scratch</b>, the ones the foresters run the tree operation with, sitting in a backend team while coming from the frontend.',
        'The foundations we laid held while the company went from around twenty people to <b>more than a hundred and fifty</b>.',
      ],
    },
    {
      years: '2017 · 2019',
      place: 'FLORENCE, IT',
      title: 'Frontend Developer',
      company: 'Forzieri.com',
      context: 'Luxury e-commerce',
      tags: ['React', 'Webpack'],
      paragraphs: [
        'I modernized a <b>legacy ASP e-commerce end to end</b>, an incremental migration first to jQuery and then to React.',
        'The backend came with it: <b>a custom CMS</b> that ran the orders and the daily life of the shop.',
        'The live luxury shop kept shipping features throughout, without a single stop.',
      ],
    },
    {
      years: '2007 · 2017',
      place: 'FIGLINE VALDARNO, IT',
      title: 'Head of Web · Full-Stack Designer',
      company: 'Easysystem',
      context: 'Web agency and IT services',
      tags: ['Design', 'Full-stack', 'Infrastructure'],
      paragraphs: [
        'Hired as the web designer: prototypes, print work, and visual identities drawn from scratch in the Adobe suite, never assembled from a bought template.',
        'Alongside it I did <b>real infrastructure</b>: networks installed inside client companies, with the firewalls and the servers behind them. I learned networking with my hands on it.',
        'Ten years holding all of that together <b>on my own</b>, for dozens of clients, from the first sketch of a brand to the machines it ran on.',
      ],
    },
  ],

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
