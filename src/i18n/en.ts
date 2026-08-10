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
      label: 'Art_School',
      tone: 'root',
      title: 'Architecture is a visual matter, and a matter of respect for the reader',
      body: '<b>I come from art school</b>, and to me the order of a codebase is not a theoretical nicety. When I open a repository, the way the folders and the dependencies are laid out tells me straight away whether the project is healthy or a maze. I try to write code that explains itself: if it is obvious where a change should go and what it risks affecting, we have saved hours of debugging for whoever works on that file after us. Even on a quick prototype or a demo I set clean logical boundaries from the start: it costs no extra time, and it keeps invisible technical debt from piling up.',
    },
    {
      label: 'The_Rules',
      title: 'If a rule matters, a machine checks it',
      body: '<b>I don’t believe in the hero developer</b>, and I don’t want a project’s stability to depend on my memory or on my being constantly around. When the team settles on a standard or an architectural convention, my first move is to automate it. If a check can be run by a linter, by a pipeline test or by a script that maps the dependency graph, that work goes to the machine. It gets the repetitive convention arguments out of pull requests, and it frees up head space for the actual application logic.',
    },
    {
      label: 'The_People',
      title: 'Direct and horizontal',
      body: '<b>Hard technical problems get solved with clarity and honesty, not with titles on paper.</b> Having lived both the small agency, where I ran everything from print artwork to physically installing company servers and firewalls, and structured international settings, I have learned that the best solutions turn up when the hierarchical filters come down. I like talking openly with everyone, and I keep the serious tone for the things that really deserve it.',
    },
  ],

  ai: {
    heading: 'How I use AI, without letting it pollute the code',
    paragraphs: [
      'AI lets me handle far more fronts than I would cover on my own. But it has changed how I work outright: today I write much less code and spend most of my time reading, judging and correcting what was generated. Instead of an executor, my role has become that of a decider.',
    ],
    rulesLead: 'Three rules when I use these tools, and all three are pragmatic.',
    rules: [
      '<b>I only delegate what I can verify instantly.</b> If correcting and understanding a model’s answer takes me longer than writing it from scratch would have, then I am not saving anything.',
      '<b>I distrust shortcuts.</b> AI is very good at curing the immediate symptom of a bug while ignoring the structural cause, and left unchecked it will happily duplicate logic that already exists in the project. So before I even check whether the generated code works, I always ask myself: does this thing have any business existing?',
      '<b>Machines have no intuition, so the boundaries have to be iron.</b> An assistant does not “feel” an architecture and does not understand its elegance. On complex projects, like our monorepo with sixteen parallel projects, recommendations are not enough: architectural limits have to be translated into strict automated checks in the release pipelines. An AI cannot intuit a rule, it has to be forced to respect it by a test that fails before the merge.',
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
