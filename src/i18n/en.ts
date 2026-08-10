import type { Copy } from './types';

export const en: Copy = {
  htmlLang: 'en',
  langName: 'EN',

  meta: {
    title: 'Andrea Lisi · Platform & Governance · Vienna',
    description:
      'Platform and governance in Vienna. Eighteen years on the web. I hold together systems that change every day, and I decide how AI gets into them.',
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
    tagline: 'I came to code from art.',
    eyebrow: 'PLATFORM & GOVERNANCE · SENIOR SOFTWARE ENGINEER · VIENNA',
    stats: [
      { label: 'EXPERIENCE', value: '18+ years' },
      { label: 'FOCUS', value: 'Platform, governance, AI', tone: 'now' },
      { label: 'BASED', value: 'Vienna, remote or hybrid' },
      { label: 'LANGUAGES', value: 'IT · EN · DE in progress' },
      { label: 'FOUNDATION', value: 'Art school, Florence', tone: 'root' },
    ],
    intro:
      'Eighteen years on the web. I hold together systems that change every day, and I decide how AI gets into them without the code paying for it.',
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
      label: 'Clean_Start',
      title: 'Clean from minute one',
      body: 'Even a first demo comes out minimal, with <em>the boundaries showing from outside</em>. It costs me nothing.',
    },
    {
      label: 'Triage_First',
      title: 'In someone else’s house, nothing burns',
      body: 'I don’t clean all of it at once: I start where the result shows, and <em>the point that slows everyone down</em> I break up before anything else.',
    },
    {
      label: 'The_Why',
      title: 'The reason before the rule',
      body: 'Every rule arrives with its reason written down. Once it is settled <em>I stop repeating it</em>: it goes into CI.',
    },
    {
      label: 'No_Org_Chart',
      title: 'I close the distance',
      body: 'I talk to everyone, I joke, and who I talk to <em>was never decided by an org chart</em>. I save the serious tone for what deserves it.',
    },
    {
      label: 'Hand_It_Over',
      title: 'Sometimes my job is not solving it',
      body: 'I could close them alone and nobody would know. I hand them over, because <em>if I keep doing it they stop knowing it exists</em>.',
    },
    {
      label: 'Art_School',
      title: 'A folder is a painting',
      tone: 'root',
      body: 'Art school, then years of the violin, and I never stopped drawing. <em>I hold architecture to the same standard</em>.',
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
