import type { Copy } from './types';

/** Italian keeps the author's direct voice and the same concrete facts as English. */
export const it: Copy = {
  htmlLang: 'it',
  langName: 'IT',

  meta: {
    title: 'Andrea Lisi · Senior Software Engineer · Frontend Platform',
    description:
      'Senior Software Engineer a Vienna, concentrato su piattaforme frontend, monorepo e governance per 16 progetti e più di 12 team.',
    ogImageAlt: 'Andrea Lisi, Senior Software Engineer a Vienna',
  },
  aiMeta: {
    title: 'AI · Andrea Lisi · Frontend Platform & Governance',
    description:
      'Come uso assistenti AI e agenti nello sviluppo: quando servono, come rivedo il risultato e quali controlli applico.',
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
    tagline: 'Piattaforma frontend e governance.',
    eyebrow: 'SENIOR SOFTWARE ENGINEER · FRONTEND PLATFORM & GOVERNANCE · VIENNA',
    stats: [
      { label: 'ESPERIENZA', value: '18+ anni' },
      { label: 'FOCUS', value: 'Piattaforma frontend, governance', tone: 'now' },
      { label: 'BASE', value: 'Vienna, remoto o ibrido' },
      { label: 'LINGUE', value: 'IT · EN · DE in corso' },
      { label: 'FORMAZIONE', value: 'Istituto d’Arte, Firenze', tone: 'root' },
    ],
    intro:
      'Sono un Senior Software Engineer con più di 18 anni di esperienza. Oggi lavoro sulla piattaforma frontend di Tosca Cloud, una monorepo che raccoglie 16 progetti ed è condivisa da più di 12 team. Mi occupo soprattutto di architettura, dipendenze, build e standard condivisi.',
    buttons: { github: 'GITHUB', linkedin: 'LINKEDIN', email: 'EMAIL', cv: 'CV.PDF ↓' },
  },

  sections: {
    approach: { num: '01', title: 'Come lavoro' },
    focus: { num: '02', title: 'Su cosa lavoro' },
    ai: { num: '03', title: 'AI', eyebrow: 'USO, REVISIONE E TEST' },
    experience: { num: '04', title: 'Esperienza' },
    projects: { num: '05', title: 'Progetti personali' },
    contact: { num: '06', title: 'Restiamo in contatto' },
  },

  approach: [
    {
      label: 'Art_School',
      tone: 'root',
      title: 'Dal design al frontend',
      body: '<b>Ho cominciato dal design, ma la mia carriera è nel frontend.</b> Nel tempo ho lavorato anche su backend e infrastruttura. Questa esperienza mi aiuta a vedere cosa cambia nel resto del sistema quando intervengo sul frontend.',
    },
    {
      label: 'The_Boundaries',
      title: 'Regole e controlli automatici',
      body: '<b>Lavoro spesso su problemi che coinvolgono più team</b>: confini tra moduli, dipendenze, build e CI. Quando una regola è importante, ne documento il motivo e, se possibile, aggiungo un controllo automatico. Così è il controllo a ricordare la regola, e io evito di ripeterla a decine di persone, una alla volta.',
    },
    {
      label: 'Hands_On',
      title: 'Lavoro sul codice e con i team',
      body: '<b>Continuo a implementare, fare debugging e lavorare sugli strumenti condivisi.</b> Collaboro ogni giorno con gli sviluppatori dei team, dagli junior ai senior, e mi confronto spesso con i loro manager. Quando una decisione coinvolge più prodotti, lavoro anche con design, security e sales per capire cosa serve e applicarlo in modo coerente.',
    },
  ],

  focus: [
    {
      title: 'Architettura e piattaforma',
      items: [
        'Architettura di monorepo',
        'Micro-frontend',
        'Confini tra moduli',
        'Governance delle dipendenze',
        'RFC tecnici',
      ],
    },
    {
      title: 'Frontend e integrazioni',
      items: [
        'React',
        'TypeScript',
        'Vue',
        'GraphQL',
        'Node.js',
        'Integrazione Okta lato frontend',
        'Gestione JWT',
        'OpenTelemetry',
      ],
    },
    {
      title: 'Build e rilascio',
      items: [
        'Architettura CI',
        'Automazione delle pipeline',
        'Cache e performance delle build',
        'Controlli di qualità',
        'Test automatici',
      ],
    },
    {
      title: 'Developer experience',
      items: [
        'Strumenti condivisi',
        'Standard tecnici',
        'Documentazione',
        'Valutazione di strumenti AI',
      ],
    },
  ],

  ai: {
    heading: 'Come uso l’AI nello sviluppo',
    paragraphs: [
      'Uso assistenti AI e agenti per analizzare il codice di un progetto, preparare modifiche e ridurre il lavoro ripetitivo. Li uso solo se posso capire cosa hanno fatto e verificare che funzioni.',
      'Li provo su attività reali per capire dove perdono il contesto della codebase. In base a quello aggiorno documentazione, regole e strumenti del repository.',
    ],
    rulesLead: 'In pratica:',
    rules: [
      '<b>Prima verifico che la modifica serva.</b> Un agente può suggerire di ricostruire qualcosa che nel progetto esiste già.',
      '<b>Rivedo il risultato come qualsiasi altro contributo.</b> Leggo il diff, eseguo i test e controllo che rispetti i confini del progetto.',
      '<b>Devo poter spiegare e mantenere ogni modifica.</b> Se non ci riesco, non la uso.',
    ],
    backLabel: 'ANDREA LISI',
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
        'Lavoro sulla piattaforma frontend di Tosca Cloud, una monorepo a micro-frontend che raccoglie <b>16 progetti ed è condivisa da più di 12 team</b>.',
        'Lavoro sull’architettura e sulla governance della monorepo, in particolare su confini tra moduli, regole sulle dipendenze e standard frontend condivisi. Rivedo anche gli RFC che coinvolgono il frontend condiviso.',
        'Amministro la repository di Tosca Cloud su GitHub e automatizzo le pipeline, anche su Azure. Con il platform architect lavoro sulla cache e sulle performance delle build, sulla struttura della CI e sui quality gate.',
        'Ho integrato OpenTelemetry nel frontend. Dopo il login Okta, gestisco l’integrazione nell’applicazione, inclusi JWT e interceptor HTTP. Quando un problema compare in più progetti, lo indago a livello di piattaforma.',
        'Valuto regolarmente strumenti AI, tra cui Claude e Cursor, e il modo in cui li usiamo. Quando lo stesso limite si ripresenta, aggiorno la documentazione, le regole o gli strumenti del repository.',
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
      kind: 'FANTASY MUD',
      description:
        'Un MUD fantasy che ho sviluppato interamente: backend Node.js/MongoDB, client React e infrastruttura Cloudflare.',
      tags: ['Node.js', 'MongoDB', 'React', 'Cloudflare'],
    },
    {
      name: 'lockhound',
      kind: 'WINDOWS CLI',
      description:
        'CLI per Windows senza dipendenze che trova e termina i processi che tengono bloccata una cartella, usando la Windows Restart Manager API.',
      tags: ['Windows', 'Restart Manager API', 'Developer tooling'],
      command: 'npx lockhound',
    },
  ],

  footer: {
    built: 'Scritto, disegnato e messo online da me.',
  },

  nowBadge: 'IN CORSO',

  contact: {
    invite:
      'Hey! Se ti va di parlare di piattaforme frontend, developer experience o semplicemente di scambiarci due idee, scrivimi.',
    inviteMore: 'Non serve una proposta formale: anche un messaggio al volo va benissimo.',
    cv: 'CV (PDF)',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    instagram: 'Instagram',
  },
};
