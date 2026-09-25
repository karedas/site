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
    eyebrow: 'Piattaforme frontend, strumenti per sviluppatori e design system',
    stats: [
      { label: 'Dove vivo', value: 'Vienna, Austria' },
      { label: 'Come lavoro', value: 'Remoto o ibrido', tone: 'now' },
      { label: 'Percorso', value: 'Web design e UI', tone: 'root' },
      { label: 'Lingue', value: 'IT · EN · DE in corso' },
    ],
    intro:
      'Oltre 18 anni nello sviluppo di software per il web, soprattutto frontend: applicazioni, librerie condivise e strumenti per sviluppatori. Architettura, performance e integrazioni insieme ai team, dalle decisioni tecniche all’implementazione.',
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
      body: '<b>Il punto di partenza è stato il web design.</b> Poi sono arrivati identità visive, grafica per la stampa, backend e infrastruttura. Un percorso che si ritrova nel lavoro con i designer: interfacce fedeli ai mockup, nell’aspetto e nel comportamento.',
    },
    {
      title: 'Regole e controlli automatici',
      body: '<b>Decisioni condivise messe per iscritto e controlli automatici dove possibile.</b> Su dipendenze, confini tra moduli e build. Mi evita anche di ripetere la stessa conversazione con una decina di persone, una alla volta.',
    },
    {
      title: 'Codice e collaborazione',
      body: '<b>Sviluppo e debugging insieme a sviluppatori junior e senior.</b> Confronto regolare con i loro manager e con design, security e sales per chiarire le richieste e concordare le modifiche tra prodotti.',
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
      'Valutazione di Claude, Cursor e altri assistenti su attività reali di sviluppo. Istruzioni del repository, documentazione e strumenti condivisi per orientarli nel codice. Gli errori ricorrenti sono il punto di partenza per migliorare questo contesto, oltre a correggere il codice.',
    moreLabel: 'Come li uso nel lavoro quotidiano',
    paragraphs: [
      'Il lavoro parte da attività reali in un repository condiviso tra più team: prove con Claude, Cursor e altri assistenti, analisi delle difficoltà e manutenzione delle istruzioni, della documentazione e degli strumenti usati per orientarsi nel codice.',
      'Una libreria ignorata o la perdita di contesto tra moduli richiedono uno sguardo oltre la singola risposta. Cosa manca nel repository? Il problema si ripresenta dopo la correzione? Da queste verifiche nascono modifiche utili anche agli altri team.',
    ],
    rulesLead: 'Su cosa intervengo:',
    rules: [
      '<b>Contesto del codice.</b> Documentazione dei confini tra moduli, delle convenzioni e delle implementazioni esistenti da riusare.',
      '<b>Strumenti condivisi.</b> Analisi degli ostacoli nel lavoro con gli assistenti e miglioramento degli strumenti del repository usati dai team.',
      '<b>Verifica delle modifiche.</b> Revisione del diff, test e controlli di integrazione. La responsabilità del codice adottato e della sua manutenzione resta mia.',
    ],
    backLabel: 'Torna al mio lavoro',
  },

  work: [
    {
      years: '2023 · OGGI',
      place: 'VIENNA, AT',
      title: 'Senior Software Engineer',
      company: 'Tricentis',
      specialization: 'Piattaforma frontend, governance e design system',
      context: 'Esperienza su Tosca Cloud',
      tags: ['React', 'TypeScript', 'Microfrontend', '16 progetti', '12+ team', 'Quality gates'],
      current: true,
      paragraphs: [
        '<b>Decisioni tra team.</b> Punto di riferimento insieme all’architetto del team per le iniziative di Tosca Cloud sull’intera monorepo. Definizione di soluzioni condivise con sviluppatori, engineering manager, principal engineer di altre piattaforme e referenti di prodotto.',
        '<b>Sviluppo della piattaforma.</b> Sviluppo e manutenzione di librerie, strumenti e configurazioni condivise; risoluzione di problemi trasversali e supporto all’adozione nei team. Le feature di prodotto restavano ai rispettivi team.',
        '<b>Migrazioni e design system.</b> Infrastruttura per gli aggiornamenti, coordinamento con i team ed esecuzione delle migrazioni quando necessario. Interventi su componenti e temi condivisi per correggere le differenze tra prodotti.',
        '<b>Performance e strumenti.</b> Ottimizzazione di build e pipeline, aggiornamento degli strumenti di sviluppo e documentazione delle decisioni negli ADR. Definizione delle regole della monorepo e supporto ai team nell’applicarle.',
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
        'Contributo alla migrazione dello storefront fuori dal monolite, nel team frontend, con React, Vue e GraphQL.',
        'Ricostruzione dello storefront durante la crescita dell’azienda da circa 20 a <b>più di 150 persone</b>.',
        'Interfacce per campagne ad alto traffico, con il confronto regolare con i team di design e design system per integrare le richieste e rispettare mockup e standard condivisi.',
        'Sviluppo da zero del frontend del back-office interno negli ultimi due anni. Unico frontend developer del progetto, insieme al team backend e alle persone delle operazioni forestali che usavano gli strumenti.',
      ],
    },
    {
      years: '2017 · 2019',
      place: 'FIRENZE, IT',
      title: 'Frontend Developer',
      company: 'Forzieri.com',
      context: 'E-commerce di lusso',
      tags: ['React', 'Webpack', 'E-commerce', 'CMS'],
      paragraphs: [
        'Introduzione graduale di React e di una nuova configurazione Webpack per modernizzare il frontend di un e-commerce di lusso in produzione.',
        'Rilascio di nuove funzionalità durante la migrazione, con il negozio sempre online.',
        'Sviluppo sullo storefront e sul CMS interno per gli ordini e la gestione quotidiana del negozio.',
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
        'Un ruolo iniziato nel design e ampliato negli anni allo sviluppo web, ai sistemi backend e all’infrastruttura presso i clienti.',
        'Progettazione da zero di siti, interfacce, identità visive e materiali per la stampa per i clienti.',
        'Sviluppo e manutenzione di applicazioni frontend e backend.',
        'Installazione di server, reti e firewall presso i clienti, comprese le manifatture del distretto toscano della pelle e della moda.',
      ],
    },
  ],

  imagePreview: {
    title: 'Anteprima immagine',
    close: 'Chiudi',
    zoom: 'Dimensione originale',
    fit: 'Adatta allo schermo',
  },
  projects: [
    {
      name: 'Lumina',
      kind: 'Sviluppo di giochi e web design',
      description: 'Un progetto personale: un gioco fantasy multiplayer basato sul testo.',
      tags: ['Node.js', 'MongoDB', 'React', 'Cloudflare'],
      href: 'https://luminamud.com/',
      linkLabel: 'Esplora Lumina',
      detail:
        'Design delle interfacce, sviluppo del client React, backend Node.js/MongoDB e infrastruttura Cloudflare.',
      imageAlt:
        'Il sito pubblico di Lumina: un paesaggio fantasy con titoli dorati e la navigazione per esplorare il mondo del gioco.',
      imageSrc: '/lumina-preview.webp',
      caption: 'Il sito del progetto. Il gioco è in sviluppo.',
    },
    {
      name: 'Deepfield',
      kind: 'Esperimento di interfacce e simulazione',
      description:
        'Un prototipo di esplorazione spaziale controllato attraverso mappe, sensori e pannelli di bordo. Sviluppo della simulazione e delle interfacce per navigare la galassia e gestire i sistemi della nave.',
      detail:
        'Ho interrotto lo sviluppo perché non vedevo un percorso sostenibile per portarlo sul mercato. Il prototipo resta un esperimento di design delle interazioni, visualizzazione dei dati e sviluppo software.',
      tags: ['TypeScript', 'PixiJS', 'WebGL', 'Simulazione'],
      gallery: [
        {
          src: '/deepfield-map.png',
          width: 1600,
          height: 903,
          alt: 'Deepfield: mappa stellare con pianificazione della rotta, sensori e stato della nave.',
          label: 'Ingrandisci la mappa stellare',
        },
        {
          src: '/deepfield-ship.png',
          width: 1600,
          height: 867,
          alt: 'Deepfield: schema tecnico della nave con sottosistemi, diagnostica e allarmi.',
          label: 'Ingrandisci lo schema della nave',
        },
      ],
      caption: 'Schermate del prototipo. Sviluppo interrotto; codice non pubblico.',
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
