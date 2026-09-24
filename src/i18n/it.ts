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
      'Valuto gli strumenti AI su attività reali e preparo il repository per il loro uso nei team: istruzioni, documentazione e strumenti condivisi. Quando Claude, Cursor o altri assistenti ripetono lo stesso errore, intervengo su ciò che lo provoca, oltre a correggere il codice prodotto.',
    moreLabel: 'Come li uso nel lavoro quotidiano',
    paragraphs: [
      'Il mio lavoro con l’AI riguarda anche il repository su cui lavorano i team. Valuto Claude, Cursor e altri assistenti su attività reali e curo le istruzioni, la documentazione e gli strumenti condivisi che usano per orientarsi nel codice.',
      'Se un assistente ignora una libreria esistente o perde il contesto tra moduli, correggere la singola risposta non basta. Cerco la causa e aggiorno ciò che manca nel repository, poi verifico se il problema si ripresenta. L’obiettivo è rendere queste correzioni utili anche agli altri team.',
    ],
    rulesLead: 'Su cosa intervengo:',
    rules: [
      '<b>Contesto del codice.</b> Rendo espliciti nelle istruzioni e nella documentazione i confini tra moduli, le convenzioni e le implementazioni da riusare.',
      '<b>Strumenti condivisi.</b> Valuto dove gli assistenti incontrano ostacoli e lavoro sugli strumenti del repository per migliorarne l’uso nei team.',
      '<b>Verifica delle modifiche.</b> Leggo il diff, eseguo i test e controllo l’integrazione nel progetto. Resto responsabile del codice che adotto e della sua manutenzione.',
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
        '<b>Decisioni tra team.</b> Su Tosca Cloud, insieme all’architetto del team, sono stato un riferimento per le iniziative dell’intera monorepo. Ho lavorato con sviluppatori, engineering manager, principal engineer di altre piattaforme e referenti di prodotto per definire le soluzioni condivise.',
        '<b>Sviluppo della piattaforma.</b> Ho sviluppato e mantenuto librerie, strumenti e configurazioni comuni, risolto problemi trasversali e supportato l’adozione nei team. Il mio lavoro riguardava la piattaforma condivisa; le feature di prodotto erano affidate ai rispettivi team.',
        '<b>Migrazioni e design system.</b> Ho preparato l’infrastruttura per gli aggiornamenti, coordinandoli con i team e intervenendo direttamente quando necessario. Ho lavorato su componenti e temi condivisi per correggere le differenze tra prodotti.',
        '<b>Performance e strumenti.</b> Ho ottimizzato build e pipeline e modernizzato gli strumenti di sviluppo. Ho documentato le decisioni negli ADR, definito le regole della monorepo e supportato i team nell’applicarle.',
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
      tags: ['React', 'Webpack', 'E-commerce', 'CMS'],
      paragraphs: [
        'Ho modernizzato il frontend di un e-commerce di lusso in produzione, introducendo gradualmente React e una nuova configurazione Webpack.',
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
      description:
        'Un gioco fantasy multiplayer basato sul testo. Sviluppo il backend Node.js/MongoDB, il client React e l’infrastruttura Cloudflare.',
      tags: ['Node.js', 'MongoDB', 'React', 'Cloudflare'],
      href: 'https://luminamud.com/',
      linkLabel: 'Esplora Lumina',
      detail:
        'Un progetto personale in cui lavoro sia al design delle interfacce sia al codice e ai sistemi che fanno funzionare il gioco.',
      imageAlt:
        'Il sito pubblico di Lumina: un paesaggio fantasy con titoli dorati e la navigazione per esplorare il mondo del gioco.',
      imageSrc: '/lumina-preview.webp',
      caption: 'Il sito del progetto. Il gioco è in sviluppo.',
    },
    {
      name: 'Deepfield',
      kind: 'Esperimento di interfacce e simulazione',
      description:
        'Un prototipo di esplorazione spaziale controllato attraverso mappe, sensori e pannelli di bordo. Ho lavorato sulla simulazione e sulle interfacce per navigare la galassia e gestire i sistemi della nave.',
      detail:
        'Ho interrotto lo sviluppo perché non vedevo un percorso sostenibile per portarlo sul mercato. Resta un esperimento in cui ho unito design delle interazioni, visualizzazione dei dati e sviluppo software.',
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
