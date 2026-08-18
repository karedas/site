import type { Copy } from './types';

/**
 * Italian keeps the author's direct voice while carrying the concrete facts
 * from the handoff into the professional sections.
 */
export const it: Copy = {
  htmlLang: 'it',
  langName: 'IT',

  meta: {
    title: 'Andrea Lisi · Senior Software Engineer · Frontend Platform',
    description:
      'Senior Software Engineer a Vienna, focalizzato su piattaforme frontend, monorepo, governance e developer experience per 16 progetti e più di 12 team.',
    ogImageAlt: 'Andrea Lisi, Senior Software Engineer a Vienna',
  },
  aiMeta: {
    title: 'AI · Andrea Lisi · Staff Engineer',
    description:
      'Come ci lavoro davvero: il lavoro si è spostato dallo scrivere al decidere, e gran parte del valore sta nel sapere quando fermarsi.',
  },

  skipLink: 'Vai al contenuto',
  langSwitchLabel: 'Lingua',

  ui: {
    open: 'Apri',
    close: 'Chiudi',
  },

  nav: {
    ariaLabel: 'Navigazione sezioni',
    logoLabel: 'AL, torna su',
    items: [
      { num: '00', label: 'Home', target: 'top' },
      { num: '01', label: 'Come lavoro', target: 'approach' },
      { num: '02', label: 'AI', target: 'ai' },
      { num: '03', label: 'Esperienza', target: 'experience' },
      { num: '04', label: 'Contatti', target: 'contact' },
    ],
  },

  hero: {
    eyebrow: 'SENIOR SOFTWARE ENGINEER · FRONTEND PLATFORM & GOVERNANCE · VIENNA',
    stats: [
      { label: 'ESPERIENZA', value: '18+ anni' },
      { label: 'FOCUS', value: 'Piattaforma frontend, governance', accent: true },
      { label: 'BASE', value: 'Vienna, remoto o ibrido' },
      { label: 'LINGUE', value: 'IT · EN · DE in corso' },
    ],
    intro:
      'Senior Software Engineer focalizzato sulle piattaforme frontend e sui problemi che emergono quando molti team lavorano sulla stessa codebase. Sono arrivato al codice passando dal design e dalla musica, e mi interessa ancora che la struttura si capisca a vista.',
    buttons: { github: 'GITHUB', linkedin: 'LINKEDIN', email: 'EMAIL', cv: 'CV.PDF ↓' },
  },

  sections: {
    approach: { num: '01', title: 'Come lavoro', eyebrow: 'PAROLE MIE' },
    focus: { num: '02', title: 'Su cosa lavoro', eyebrow: 'IL CENTRO DEL LAVORO' },
    ai: { num: '02', title: 'AI', eyebrow: 'GLI AGENTI E LE REGOLE IN CUI LAVORANO' },
    experience: { num: '03', title: 'Esperienza', eyebrow: 'DICIOTTO ANNI, QUATTRO POSTI' },
    projects: { num: '05', title: 'Progetti personali', eyebrow: 'COSE CHE COSTRUISCO PER ME' },
    contact: { num: '04', title: 'Contatti', eyebrow: 'CV E PROFILI' },
  },

  approach: [
    {
      title: 'Pulito dal primo minuto',
      body: 'Non esiste per me un progetto avviato sporco. Anche una prima demo la scrivo minimale, ma con ogni pezzo al suo posto, pronto a crescere o a essere buttato. Pulito per me vuol dire che i confini si vedono da fuori: dove va una cosa, e cosa può dipendere da cosa. Mi viene così, e non mi costa un minuto in più.',
    },
    {
      title: 'In casa d’altri non brucio niente',
      body: 'Se arrivo su un progetto messo male non voglio ripulirlo tutto subito: sarebbe il modo più veloce per farmi odiare e non finire niente. Metto delle priorità e comincio da quello che dà risultato immediato, perché chi ci lavora deve vedere il guadagno prima di sentire il costo. Ma c’è sempre quello che frena tutti, il punto da cui ogni modifica deve passare, e quello lo divido prima di ogni altra cosa. Si paga una volta sola.',
    },
    {
      title: 'Il perché prima della regola',
      body: 'Prima di imporre una regola vado a cercarmi il motivo, e lo scrivo. La regola arriva sempre insieme al suo perché, e con una scadenza che una persona può reggere. Nessuno deve fidarsi di me sulla parola, e non voglio che lo faccia.',
    },
    {
      title: 'Con le persone parlo, la ripetizione la lascio alla macchina',
      body: 'Vado a parlare di persona, sempre, perché una regola spiegata a voce si discute e una regola scritta si subisce. Quello che non voglio è ripetere la stessa cosa all’infinito. Quando la regola è chiara finisce in pipeline come warning da risolvere, e io passo alla successiva.',
    },
    {
      title: 'A volte il mio lavoro è non risolvere il problema',
      body: 'Certe cose potrei chiuderle da solo in silenzio, e nessuno se ne accorgerebbe. Preferisco spenderci il tempo che serve a passarle: scrivo il documento, apro il task, avviso il team, do una scadenza. Quel lavoro è loro. Se lo faccio sempre io, smettono di sapere che esiste.',
    },
    {
      title: 'Vengo dall’arte',
      body: 'La grafica prima, poi il violino, che ho suonato per anni. Non è un passato che ho chiuso: programmare per me è arte, e deve comportarsi come tale. Una cosa fatta bene si riconosce a vista, e regge anche quando la smonti. Guardo un’interfaccia e un albero di cartelle con lo stesso occhio, e comincio quasi sempre dagli interventi che si vedono.',
    },
  ],

  focus: [
    {
      title: 'Architettura e piattaforma',
      items: [
        'Architettura di monorepo',
        'Micro-frontend',
        'Confini dei moduli',
        'Architettura delle dipendenze',
        'RFC',
      ],
    },
    {
      title: 'Frontend',
      items: ['React', 'TypeScript', 'Vue', 'GraphQL', 'Node.js'],
    },
    {
      title: 'Tooling e delivery',
      items: ['Nx', 'Vite', 'Webpack', 'CI/CD', 'Testing', 'Build performance', 'Quality gates'],
    },
    {
      title: 'Developer experience',
      items: [
        'Tool condivisi',
        'Standard di engineering',
        'Developer experience',
        'Workflow assistiti e agentici',
      ],
    },
  ],

  ai: {
    heading: 'Come ci lavoro davvero',
    paragraphs: [
      'Quello che l’AI mi ha dato è la possibilità di tenere aperti più fronti insieme di quanti ne reggerei da solo. Mentre una cosa va avanti ne apro un’altra. Il lavoro si è spostato dallo scrivere al decidere, e descrivere il problema in modo netto è diventata la parte che conta davvero. Ormai leggo e correggo molto più codice di quanto ne scriva.',
      '<b>Gran parte del valore sta nel fermare.</b> Un agente ti propone di ricostruire una cosa che esiste già, e suona pure convincente. Serve qualcuno che abbia l’insieme in testa e dica no. Di ogni proposta guardo prima se deve esistere nel progetto, e solo dopo se funziona. Quello che resta è la forma più semplice che regge.',
      '<b>So anche quando non usarla.</b> Di come andare più veloci si parla ovunque, di dove fermarsi molto meno, e quel confine ognuno se lo deve trovare da solo, in mezzo al lavoro. Il mio me lo sono costruito un progetto alla volta, e quello che imparo lo metto per iscritto, come qualsiasi altra regola.',
      'E poi c’è il lavoro strutturale, la parte meno visibile e quella che tiene. Gli stessi confini che valgono per i team ora devono valere anche per un contributore che non è una persona, e questo mi obbliga a scrivere per intero regole che prima bastava avere in testa. È governance applicata a un nuovo tipo di contributore, uno che legge tutto quello che scrivi e lo prende alla lettera.',
    ],
    keywords: [
      ['Agentic coding in IDE and CI', 'Prompt and context engineering', 'MCP'],
      ['RAG and embeddings', 'LLM APIs and evals', 'OWASP LLM Top 10', 'Agentic review in CI'],
    ],
    permalinkSuffix: 'questa sezione in una pagina a sé',
    backLabel: 'ANDREA LISI',
  },

  work: [
    {
      years: '2023 · OGGI',
      place: 'VIENNA, AT',
      company: 'Tricentis · Tosca Cloud',
      role: 'Platform & Governance · Senior Software Engineer',
      tags: ['Micro-frontend', '16 progetti', '12+ team', 'Quality gates'],
      current: true,
      paragraphs: [
        'Lavoro sulla piattaforma frontend dietro Tosca Cloud, una monorepo a micro-frontend condivisa da <b>16 progetti e più di 12 team</b>.',
        'Mi occupo dell’architettura e della governance della monorepo, dai confini dei moduli alle regole sulle dipendenze e agli standard frontend condivisi.',
        'Lavoro con il platform architect sulle performance di build, sulla topologia della CI e sui quality gate.',
        'Gestisco gli aggiornamenti che riguardano tutta la piattaforma e le integrazioni condivise, <b>sistemando il guasto al centro prima che arrivi ai singoli team</b>.',
        'Rivedo RFC e modifiche trasversali quando toccano i confini del frontend condiviso.',
        'Trasformo le convenzioni in regole verificabili dalla macchina, per il codice scritto dalle persone e dagli agenti, e continuo a implementare e fare debugging quando il problema riguarda la piattaforma nel suo insieme.',
      ],
    },
    {
      years: '2019 · 2023',
      place: 'FIRENZE, IT',
      company: 'Treedom',
      role: 'Frontend Developer',
      tags: ['React', 'Vue', 'GraphQL', 'Migrazione storefront'],
      paragraphs: [
        'Sono entrato nel team frontend e poi ho guidato la parte frontend della migrazione dello storefront fuori dal monolite, lavorando con React, Vue e GraphQL.',
        'Ho ricostruito le fondamenta dello storefront mentre l’azienda cresceva da circa 20 a <b>più di 150 persone</b>.',
        'Ho costruito esperienze per campagne ad alto traffico, su una piattaforma che ha piantato milioni di alberi.',
        'Nell’ultimo anno ho costruito da zero il frontend degli strumenti back-office interni, lavorando a stretto contatto con il team backend e con le persone che li usavano per le operazioni forestali.',
      ],
    },
    {
      years: '2017 · 2019',
      place: 'FIRENZE, IT',
      company: 'Forzieri.com',
      role: 'Frontend Developer',
      tags: ['ASP', 'jQuery', 'React', 'Webpack'],
      paragraphs: [
        'Ho modernizzato una piattaforma e-commerce di lusso live senza un rewrite completo, portandola da ASP legacy e jQuery a React con una toolchain frontend basata su Webpack.',
        'Ho continuato a rilasciare funzionalità mentre la migrazione era in corso e il negozio di produzione restava online.',
        'Ho lavorato sia sullo storefront sia sul CMS interno usato per gli ordini e per la gestione quotidiana del negozio.',
        'Ho sostituito gradualmente il frontend legacy mentre cambiavo l’architettura sottostante.',
      ],
    },
    {
      years: '2007 · 2017',
      place: 'FIGLINE VALDARNO, IT',
      company: 'Easysystem',
      role: 'Head of Web · Full-Stack Designer',
      tags: ['Design', 'Web', 'Backend', 'Infrastruttura'],
      paragraphs: [
        'Sono entrato in Easysystem come designer e ho finito per occuparmi di quasi tutta la parte tecnica dei progetti: sviluppo web, sistemi backend e infine infrastruttura on-premise.',
        'Ho disegnato da zero siti, interfacce, identità visive e materiali stampati per i progetti dei clienti.',
        'Ho costruito e mantenuto applicazioni frontend e backend.',
        'Ho installato server, reti e firewall direttamente nelle aziende dei clienti, comprese le manifatture del distretto toscano della pelle e della moda.',
        'Ho seguito i progetti dai primi concetti di design allo sviluppo e, in alcuni casi, fino all’infrastruttura su cui giravano.',
      ],
    },
  ],

  projects: {
    entries: [
      {
        name: 'Lumina',
        kind: 'FANTASY MUD',
        glyph: 'kite',
        description:
          'Un MUD fantasy costruito end to end, dal backend Node.js/MongoDB al client React e all’infrastruttura Cloudflare.',
        tags: ['Node.js', 'MongoDB', 'React', 'Cloudflare'],
      },
      {
        name: 'lockhound',
        kind: 'WINDOWS CLI',
        glyph: 'path',
        description:
          'CLI per Windows senza dipendenze che trova e termina i processi che tengono bloccata una cartella, usando la Windows Restart Manager API.',
        tags: ['npx lockhound', 'Windows', 'Restart Manager API'],
        command: 'npx lockhound',
      },
    ],
  },

  contact: {
    cv: 'CV (PDF)',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    instagram: 'Instagram',
  },
};
