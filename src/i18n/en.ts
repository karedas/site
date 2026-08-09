import type { Copy } from './types';

export const en: Copy = {
  htmlLang: 'en',
  langName: 'EN',

  meta: {
    title: 'Andrea Lisi · Staff Engineer · Platform & Governance',
    description:
      'Staff Engineer in Vienna. Eighteen years on the web, now governing a micro-frontend monorepo and deciding how AI gets into it.',
    ogImageAlt: 'Andrea Lisi, Staff Engineer in Vienna',
  },
  aiMeta: {
    title: 'AI · Andrea Lisi · Staff Engineer',
    description:
      'How I actually work with AI: the work shifted from writing to deciding, and most of the value is in knowing when to stop.',
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
    eyebrow: 'STAFF ENGINEER · PLATFORM & GOVERNANCE · VIENNA',
    stats: [
      { label: 'EXPERIENCE', value: '18+ years' },
      { label: 'FOCUS', value: 'Platform, governance, AI', accent: true },
      { label: 'BASED', value: 'Vienna, remote or hybrid' },
      { label: 'LANGUAGES', value: 'IT · EN · DE in progress' },
    ],
    intro:
      'Eighteen years on the web, and I got to code through design and music. I hold together a system that changes every day, and I decide how AI gets into it without the code paying for it.',
    buttons: { github: 'GITHUB', linkedin: 'LINKEDIN', email: 'EMAIL', cv: 'CV.PDF ↓' },
  },

  sections: {
    approach: { num: '01', title: 'How I work', eyebrow: 'IN MY OWN WORDS' },
    ai: { num: '02', title: 'AI', eyebrow: 'AGENTS AND THE RULES THEY WORK IN' },
    experience: { num: '03', title: 'Experience', eyebrow: 'EIGHTEEN YEARS, FOUR PLACES' },
    contact: { num: '04', title: 'Contact', eyebrow: 'CV AND PROFILES' },
  },

  approach: [
    {
      title: 'Clean from minute one',
      body: 'I don’t start dirty. A first demo comes out minimal, but every piece sits where it belongs, ready to grow or be thrown away. It comes out that way, and it costs me nothing. I never write <code>any</code>. The people who do are usually the ones who never learned TypeScript.',
    },
    {
      title: 'In someone else’s codebase',
      body: 'When I land on a codebase in bad shape I don’t try to clean all of it: that is the fastest way to get resented and finish nothing. I set priorities and start where the result shows up immediately. A linter goes in on day one. But if I open a folder and find a five thousand line file, I split that before anything else. It costs half a day, and after that you stop paying for it.',
    },
    {
      title: 'The reason before the rule',
      body: 'Before I impose a rule I go and find the reason, write it down and send the link. Only then does it apply, with a deadline a person can live with. Nobody has to take my word for it, and I don’t want them to.',
    },
    {
      title: 'I talk, CI repeats',
      body: 'I go and talk to people, always, because a rule you explain out loud gets argued with and a rule you write down just gets endured. What I don’t want is to say the same thing twenty times. Once the rule is settled it goes into CI as a warning that has to be cleared, and I move to the next one.',
    },
    {
      title: 'Sometimes my job is not solving it',
      body: 'I could close some of these things in five minutes. I’d rather spend half an hour: write the document, open the ticket, tell the team, set a date. That work is theirs. If I keep doing it for them, they stop knowing it exists.',
    },
    {
      title: 'I come from art',
      body: 'Graphic design first, then the violin, which I played for years. It is not a past I closed: programming is an art to me, and it has to behave like one. Work done well shows at a glance, and it still holds when you take it apart. I look at an interface and at a folder tree with the same eye, and I usually start with the things people can see.',
    },
  ],

  ai: {
    heading: 'How I actually work with it',
    paragraphs: [
      'What AI gave me is the ability to keep more fronts open at once than I could hold on my own. While one thing moves I start another. The work shifted from writing to deciding, and putting the problem sharply, never vaguely, became the part that actually counts. For about a year now I’ve read and corrected far more code than I’ve written.',
      '<b>Most of the value is in stopping.</b> An agent will offer to rebuild something that already exists, and it will sound convincing. Someone has to hold the whole picture and say no. I cut the comments that explain what the code already says, and the abstractions built for a single call site. What is left is the simplest shape that holds.',
      '<b>I also know when not to use it</b>, and that is the part nobody at work teaches. Everyone is pushed to go faster, and where to stop is left for each person to work out alone. Nobody works it out alone. I watched a colleague accept one suggestion after another without ever stopping to ask what he was agreeing to.',
      'Then there’s the structural part: repo rules tightened so that agents produce on-standard code too. It’s governance applied to a new kind of contributor.',
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
      tags: ['Monorepo', 'Micro-frontend', 'Governance', 'Agentic AI'],
      current: true,
      paragraphs: [
        'I joined the team of a single application. Not long after I was <b>running governance and the architectural restructuring of the whole monorepo</b>.',
        'It is a micro-frontend monorepo with several teams inside it, and my job is holding it together while it changes every day.',
        '<b>I sit in the middle.</b> Direction from design, requirements from stakeholders, decisions about how AI gets integrated: they all land on my team. We decide how they’re implemented and we carry them to the application teams.',
        '<b>I decide which technologies come in</b>, how an application is structured and where a file goes. I provide the structure and the scaffolding, and the people building work inside those boundaries.',
        '<b>I’m still in it</b>: when a vulnerability lands and blocks the pipelines, I’m the one who fixes it.',
      ],
    },
    {
      years: '2019 · 2023',
      place: 'FLORENCE, IT',
      company: 'Treedom',
      role: 'Frontend Developer',
      tags: ['React', 'Vue', 'GraphQL'],
      paragraphs: [
        'Joined to reinforce two developers on the storefront, then rewrote it as the team grew around us and the whole thing came off the monolith. From there I took on the internal systems the foresters run the tree operation with, and <b>wrote that interface from scratch</b>. The foundations we laid held while the company went from around twenty people to <b>more than a hundred and fifty</b>.',
      ],
    },
    {
      years: '2017 · 2019',
      place: 'FLORENCE, IT',
      company: 'Forzieri.com',
      role: 'Frontend Developer',
      tags: ['React', 'Webpack'],
      paragraphs: [
        'Modernized a <b>legacy ASP e-commerce end to end</b>, an incremental migration first to jQuery and then to React, while the live luxury shop kept shipping features.',
      ],
    },
    {
      years: '2007 · 2017',
      place: 'FIGLINE VALDARNO, IT',
      company: 'Easysystem',
      role: 'Head of Web · Full-Stack Designer',
      tags: ['Design', 'Full-stack', 'Infrastructure'],
      paragraphs: [
        'Hired as the studio’s designer, drawing prototypes and visual identities from scratch, and ended up the <b>on-premise infrastructure technician</b>: servers, and networks I designed and cabled to fit each client. Ten years owning every step for dozens of clients, <b>from the first sketch of a brand to the machines it ran on</b>.',
      ],
    },
  ],

  contact: {
    cv: 'CV (PDF)',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    instagram: 'Instagram',
  },
};
