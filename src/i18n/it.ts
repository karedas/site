import type { Copy } from './types';

/** Italian keeps the author's direct voice and the same concrete facts as English. */
export const it: Copy = {
  htmlLang: 'it',
  langName: 'IT',

  meta: {
    title: 'Andrea Lisi · Senior Software Engineer · Frontend Platform',
    description:
      'Senior Software Engineer a Vienna. Oltre 18 anni tra applicazioni web, piattaforme frontend e strumenti per sviluppatori, con un percorso nel web design.',
    ogImageAlt: 'Andrea Lisi, Senior Software Engineer a Vienna',
  },
  aiMeta: {
    title: 'AI nello sviluppo · Andrea Lisi',
    description:
      'Come valuto gli strumenti AI su attività reali e uso i problemi ricorrenti per migliorare documentazione, contesto e strumenti del repository.',
  },

  skipLink: 'Vai al contenuto',
  langSwitchLabel: 'Lingua',

  nav: {
    ariaLabel: 'Navigazione sezioni',
    logoLabel: 'AL, torna su',
    items: [
      { num: '00', label: 'Home', target: 'top' },
      { num: '01', label: 'Come lavoro', target: 'approach' },
      { num: '02', label: 'Su cosa lavoro', target: 'focus' },
      { num: '03', label: 'AI', target: 'ai' },
      { num: '04', label: 'Esperienza', target: 'experience' },
      { num: '05', label: 'Progetti', target: 'projects' },
      { num: '06', label: 'Contatti', target: 'contact' },
    ],
  },

  hero: {
    greeting: 'Ciao. Mi chiamo',
    tagline: 'Senior Software Engineer.',
    eyebrow: 'Sviluppo frontend, architettura e strumenti per sviluppatori',
    stats: [
      { label: 'Dove vivo', value: 'Vienna, Austria' },
      { label: 'Come lavoro', value: 'Remoto o ibrido', tone: 'now' },
      { label: 'Percorso', value: 'Web design e UI', tone: 'root' },
      { label: 'Lingue', value: 'IT · EN · DE in corso' },
    ],
    intro:
      'Sviluppo software per il web da oltre 18 anni, con una forte esperienza nel frontend. Realizzo applicazioni, librerie condivise e strumenti per sviluppatori. Lavoro con i team su architettura, performance e integrazioni, dalle decisioni tecniche al codice.',
    buttons: { github: 'GitHub', linkedin: 'LinkedIn', email: 'Scrivimi', cv: 'Scarica il CV' },
  },

  sections: {
    approach: { num: '01', title: 'Come lavoro' },
    focus: { num: '02', title: 'Su cosa lavoro' },
    ai: { num: '03', title: 'AI', eyebrow: 'Lavoro nel repository' },
    experience: { num: '04', title: 'Esperienza' },
    projects: { num: '05', title: 'Progetti personali' },
    contact: { num: '06', title: 'Restiamo in contatto' },
  },

  approach: [
    {
      tone: 'root',
      title: 'Un occhio all’interfaccia',
      body: '<b>Ho iniziato progettando e sviluppando siti web.</b> Negli anni ho lavorato anche su identità visive, grafica per la stampa, sistemi backend e infrastruttura. Collaboro con i designer per tradurre i mockup in interfacce fedeli al progetto e con il comportamento previsto.',
    },
    {
      title: 'Regole e controlli automatici',
      body: '<b>Documento le decisioni condivise e, quando posso, automatizzo i controlli.</b> Vale per dipendenze, confini tra moduli e build. Mi evita anche di ripetere la stessa conversazione con una decina di persone, una alla volta.',
    },
    {
      title: 'Lavoro sul codice e con i team',
      body: '<b>Sviluppo e faccio debugging con gli sviluppatori dei team, dagli junior ai senior.</b> Mi confronto regolarmente con i loro manager e con design, security e sales per capire le richieste e concordare le modifiche che coinvolgono più prodotti.',
    },
  ],

  focus: [
    {
      title: 'Architettura e piattaforma',
      items: [
        'Architettura di monorepo',
        'Micro-frontend',
        'Confini tra moduli',
        'Librerie condivise',
        'RFC tecnici',
        'ADR',
        'OpenTelemetry',
        'JWT e interceptor HTTP',
      ],
    },
    {
      title: 'Sviluppo web',
      items: [
        'React',
        'TypeScript',
        'Vue',
        'Zustand',
        'GraphQL',
        'Node.js',
        'JavaScript',
        'HTML e CSS',
      ],
    },
    {
      title: 'Build system e monorepo',
      items: [
        'Nx',
        'pnpm workspaces',
        'Vite',
        'Webpack',
        'Cache delle build',
        'Confini delle dipendenze',
      ],
    },
    {
      title: 'Test e rilascio',
      items: [
        'Vitest',
        'Jest',
        'Playwright',
        'GitHub Actions',
        'Azure Pipelines',
        'Amministrazione repository',
      ],
    },
    {
      title: 'Design e sviluppo UI',
      items: [
        'Figma',
        'Adobe Creative Cloud',
        'Design system',
        'Design token',
        'Storybook',
        'Accessibilità',
      ],
    },
    {
      title: 'Performance e developer experience',
      items: [
        'Analisi dei bundle',
        'Code splitting',
        'Cache browser e CDN',
        'Strumenti condivisi',
        'Documentazione',
        'Valutazione di strumenti AI',
      ],
    },
  ],

  ai: {
    heading: 'Come uso l’AI nello sviluppo',
    summary:
      'Mi occupo dell’adozione degli strumenti AI nel repository. Valuto Claude, Cursor e altri strumenti su attività reali e definisco regole e contesto per usarli nel lavoro dei team. I problemi ricorrenti mi aiutano a capire dove intervenire su documentazione e strumenti condivisi.',
    moreLabel: 'Come li uso nel lavoro quotidiano',
    paragraphs: [
      'Mi occupo di come gli strumenti AI vengono adottati nel repository e nel lavoro dei team. Uso e valuto Claude, Cursor e altri assistenti per analizzare il codice, preparare modifiche e ridurre il lavoro ripetitivo. Definisco le regole d’uso e curo il contesto del repository a loro disposizione.',
      'Guardo soprattutto gli errori che si ripetono: perdere il contesto tra moduli, ignorare un’implementazione già presente o proporre modifiche fuori tema. Prima di riprovare, cerco cosa manca nelle istruzioni, nella documentazione o negli strumenti condivisi.',
    ],
    rulesLead: 'Cosa verifico:',
    rules: [
      '<b>L’attività e il suo contesto.</b> Controllo cosa offre già il repository e quali moduli devono essere modificati. Se un agente propone una funzionalità duplicata, è un segnale che gli manca una parte di quel contesto.',
      '<b>Il problema ricorrente.</b> Se lo stesso errore continua a ripresentarsi, verifico se un’istruzione è poco chiara, manca della documentazione o serve modificare uno strumento condiviso.',
      '<b>Il codice prodotto.</b> Leggo il diff, eseguo i test e verifico l’integrazione nel progetto. Tengo le modifiche che so spiegare e mantenere: una risposta plausibile, da sola, non mi dice se il software funziona.',
    ],
    backLabel: 'Torna al mio lavoro',
  },

  work: [
    {
      years: '2023 · OGGI',
      place: 'VIENNA, AT',
      title: 'Senior Software Engineer',
      company: 'Tricentis',
      context: 'Tosca Cloud',
      tags: ['Microfrontend', '16 progetti', '12+ team', 'Quality gates'],
      current: true,
      paragraphs: [
        'Insieme all’architetto del mio team sono un riferimento per le iniziative tecniche che coinvolgono l’intera monorepo. Mi confronto con sviluppatori di diversi ambiti, engineering manager, principal engineer di altre piattaforme e referenti di prodotto per valutare esigenze, dipendenze e impatto sui team. Da questo confronto definiamo le soluzioni condivise e ne accompagniamo l’adozione.',
        'Il mio lavoro comprende sia le decisioni tecniche sia l’implementazione: sviluppo e mantengo risorse condivise, correggo problemi trasversali e preparo l’infrastruttura necessaria alle migrazioni. Seguo l’integrazione delle nuove versioni del design system, coordinando gli aggiornamenti con i team e intervenendo direttamente quando serve. Quando emergono differenze tra prodotti, lavoro sulle configurazioni e sui componenti comuni per correggerle.',
        'Mi occupo inoltre di performance, ottimizzazione delle build e modernizzazione degli strumenti di sviluppo. Documento le scelte negli ADR, definisco le regole della monorepo e supporto i team nell’applicarle. Le feature restano ai team di prodotto, ai quali posso contribuire; la mia responsabilità continuativa è la piattaforma che condividono.',
      ],
    },
    {
      years: '2019 · 2023',
      place: 'FIRENZE, IT',
      title: 'Frontend Developer',
      company: 'Treedom',
      context: 'Piattaforma e-commerce per piantare alberi',
      tags: ['React', 'Vue', 'GraphQL', 'Migrazione storefront'],
      paragraphs: [
        'Nel team frontend ho lavorato alla migrazione dello storefront fuori dal monolite, usando React, Vue e GraphQL.',
        'Ho contribuito a ricostruire lo storefront mentre l’azienda cresceva da circa 20 a <b>più di 150 persone</b>.',
        'Ho sviluppato le interfacce per campagne ad alto traffico. Mi confrontavo regolarmente con il team di design e con quello del design system per integrare le richieste e rispettare i mockup e gli standard condivisi.',
        'Negli ultimi due anni ho sviluppato da zero il frontend degli strumenti back-office interni. Ero l’unico frontend developer del progetto e lavoravo insieme al team backend e alle persone che usavano quegli strumenti per le operazioni forestali.',
      ],
    },
    {
      years: '2017 · 2019',
      place: 'FIRENZE, IT',
      title: 'Frontend Developer',
      company: 'Forzieri.com',
      context: 'E-commerce di lusso',
      tags: ['ASP', 'jQuery', 'React', 'Webpack'],
      paragraphs: [
        'Ho modernizzato un e-commerce di lusso mentre era in produzione. Ho sostituito gradualmente ASP e jQuery con React e una nuova configurazione Webpack.',
        'Durante la migrazione ho continuato a sviluppare nuove funzionalità senza fermare il negozio.',
        'Ho lavorato sia sullo storefront sia sul CMS interno usato per gli ordini e per la gestione quotidiana del negozio.',
      ],
    },
    {
      years: '2007 · 2017',
      place: 'FIGLINE VALDARNO, IT',
      title: 'Head of Web · Designer & Developer',
      company: 'Easysystem',
      context: 'Agenzia web e servizi IT',
      tags: ['Design', 'Web', 'Backend', 'Infrastruttura'],
      paragraphs: [
        'Sono entrato come designer. Negli anni ho lavorato anche sullo sviluppo web, sui sistemi backend e sull’infrastruttura installata presso i clienti.',
        'Ho disegnato da zero siti, interfacce, identità visive e materiali stampati per i progetti dei clienti.',
        'Ho costruito e mantenuto applicazioni frontend e backend.',
        'Ho installato server, reti e firewall direttamente nelle aziende dei clienti, comprese le manifatture del distretto toscano della pelle e della moda.',
      ],
    },
  ],

  projects: [
    {
      name: 'Lumina',
      kind: 'Sviluppo di giochi e web design',
      description:
        'Un gioco fantasy multiplayer basato sul testo. Sviluppo il backend Node.js/MongoDB, il client React e l’infrastruttura Cloudflare.',
      tags: ['Node.js', 'MongoDB', 'React', 'Cloudflare'],
      href: 'https://luminamud.com/',
      linkLabel: 'Esplora Lumina',
      detail:
        'Un progetto personale in cui lavoro sia al design delle interfacce sia al codice e ai sistemi che fanno funzionare il gioco.',
      imageAlt:
        'Il sito pubblico di Lumina: un paesaggio fantasy con titoli dorati e la navigazione per esplorare il mondo del gioco.',
      caption: 'Il sito del progetto. Il gioco è in sviluppo.',
    },
    {
      name: 'lockhound',
      kind: 'Strumento open source per sviluppatori',
      description:
        'Una CLI per Windows che identifica i processi che tengono bloccata una cartella. Usa la Windows Restart Manager API e non richiede dipendenze aggiuntive.',
      tags: ['Windows', 'Restart Manager API', 'Developer tooling'],
      command: 'npx lockhound',
      href: 'https://github.com/karedas/lockhound',
      linkLabel: 'Leggi il codice su GitHub',
      detail:
        'Il comando mostra quali processi bloccano la cartella. Terminarli richiede un’azione separata ed esplicita, così puoi prima vedere cosa sta succedendo.',
      caption: 'Esempio d’uso. Ispeziona una cartella senza terminare alcun processo.',
    },
  ],

  footer: {
    built: 'Scritto, disegnato e messo online da me.',
  },

  nowBadge: 'IN CORSO',

  contact: {
    invite: 'Hey! Hai un progetto, un ruolo tecnico o qualcosa di cui ti va di parlare?',
    inviteMore:
      'Mi piace sviluppare software e ragionare sui problemi tecnici con altri sviluppatori. Per cominciare basta un messaggio al volo.',
    writeLabel: 'Scrivimi',
    cv: 'CV (PDF)',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    instagram: 'Instagram',
  },
};
