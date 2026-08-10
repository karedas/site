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
    approach: { num: '01', title: 'How I work', eyebrow: 'IN MY OWN WORDS' },
    ai: { num: '02', title: 'AI', eyebrow: 'AGENTS AND THE RULES THEY WORK IN' },
    experience: { num: '03', title: 'Experience', eyebrow: 'EIGHTEEN YEARS, FOUR PLACES' },
    contact: { num: '04', title: 'Get in touch', eyebrow: 'CV AND PROFILES' },
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
      body: 'Before I impose a rule I go and find the reason, and I write it down. The rule always arrives with its reason attached, and with a deadline a person can live with. Nobody has to take my word for it, and I don’t want them to. Once it is settled I stop repeating it: it goes into CI as a warning that has to be cleared, and I move to the next one.',
    },
    {
      title: 'I close the distance',
      body: 'I talk to people, all of them, and I don’t wait for the right moment. I joke, I laugh, and no org chart has ever decided who I talk to: I care about the person long before the role they hold. I save the serious tone for the things that deserve it, and there are far fewer of those than it looks. For everything else it is quicker to look each other in the face.',
    },
    {
      title: 'Sometimes my job is not solving it',
      body: 'Some of these things I could close on my own and nobody would ever know. I’d rather spend the time it takes to hand them over: write the document, open the ticket, tell the team, set a date. That work is theirs. If I keep doing it for them, they stop knowing it exists.',
    },
    {
      title: 'A folder is a painting',
      tone: 'root',
      body: 'I went to art school, and I never stopped drawing. Drawing first, then years of the violin. With an interface I want to know whether it is beautiful and why it was built that way, and those two questions never come apart for me. I hold architecture to the same standard: a folder is a painting to me, and you can tell at a glance whether there is an order inside it or just things put away.',
    },
  ],

  ai: {
    heading: 'How I actually work with it',
    paragraphs: [
      'What AI gave me is the ability to keep more fronts open at once than I could hold on my own. While one thing moves I start another. The work shifted from writing to deciding, and putting the problem sharply became the part that actually counts. By now I read and correct far more code than I write.',
      '<b>The real value is in what comes after.</b> An agent will offer to rebuild something that already exists, and it will sound convincing. Or it fixes the symptom and leaves the cause standing. With any proposal I look first at whether that thing belongs in the project, and only then at whether it works. Most of the time I send it back at least once, and what comes back on the second pass is simpler than what set out.',
      '<b>I only delegate what I am able to verify.</b> If reading and understanding an answer costs me more than writing it, I have saved nothing: I have moved the work somewhere it shows less. That holds for migrations you cannot walk back, and for problems I cannot yet describe precisely, because there an agent hands you a confident answer to the wrong question.',
      'Then there is the structural work, the least visible part and the one that holds. The same boundaries that apply across teams now have to apply to a contributor that isn’t a person: the rules get strict and checkable in the pipeline, because an agent does not sense them, it reads them. It’s governance applied to a new kind of contributor, one that takes everything you write literally.',
    ],
    permalinkLabel: 'This section has a page of its own',
    backLabel: 'ANDREA LISI',
  },

  work: [
    {
      years: '2023 · NOW',
      place: 'VIENNA, AT',
      title: 'Senior Software Engineer',
      company: 'Tricentis',
      role: 'Platform & Governance',
      tags: ['Architecture', 'Governance', 'Standards', 'Agentic AI'],
      current: true,
      paragraphs: [
        'I came in on a team that had one of Tosca Cloud’s applications, then two, and ended up restructuring and redesigning significant parts of them, so before long I was <b>promoted into the team that holds the platform’s governance</b>.',
        '<b>I look after the governance of the repository</b>, and it is the centre of the role: a micro-frontend monorepo with sixteen projects inside it, released by different teams and still expected to read as one product. What comes in and what stays out, how it is structured, where everything goes and which boundaries each team works inside.',
        '<b>I maintain it at the architectural level</b>: module boundaries, the dependency graph, build times and pipelines, what has to fail in CI before it reaches main, and when something breaks and blocks everyone the fix comes through here.',
        '<b>Package upgrades and integration</b> across the whole platform: major versions, vulnerabilities, and the breakage I absorb before it reaches the teams.',
        '<b>I build the shared resources</b> teams use instead of each rebuilding their own, and I take apart bad practice when I see it turning into habit.',
        '<b>I act as the gateway between design and the internal teams</b> on standards: the direction comes from there, and it comes back out as rules and components people can work with.',
        '<b>I integrate AI at every level</b>, from developer experience to the pipelines, on the same rules and the same gates as code written by hand.',
      ],
    },
    {
      years: '2019 · 2023',
      place: 'FLORENCE, IT',
      title: 'Frontend Developer',
      company: 'Treedom',
      role: 'Frontend Developer',
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
      role: 'Frontend Developer',
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
      role: 'Head of Web · Full-Stack Designer',
      tags: ['Design', 'Full-stack', 'Infrastructure'],
      paragraphs: [
        'Hired as the web designer: prototypes, print work, and visual identities drawn from scratch, never assembled from a bought template.',
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
