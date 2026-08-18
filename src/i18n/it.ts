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
      'Come uso l’AI nel lavoro di engineering: il codice generato passa dalla stessa revisione, dagli stessi test e dalle stesse verifiche.',
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
      'Sono un Senior Software Engineer con più di 18 anni di esperienza, oggi concentrato sulle piattaforme frontend e sui problemi che emergono quando molti team lavorano sulla stessa codebase. Sono arrivato al codice passando dall’arte e dal design, e mi interessa ancora che la struttura si capisca al primo sguardo.',
    buttons: { github: 'GITHUB', linkedin: 'LINKEDIN', email: 'EMAIL', cv: 'CV.PDF ↓' },
  },

  sections: {
    approach: { num: '01', title: 'Come lavoro' },
    focus: { num: '02', title: 'Su cosa lavoro' },
    ai: { num: '03', title: 'AI', eyebrow: 'STRUMENTI, REVISIONE E VERIFICA' },
    experience: { num: '04', title: 'Esperienza' },
    projects: { num: '05', title: 'Progetti personali' },
    contact: { num: '06', title: 'Restiamo in contatto' },
  },

  approach: [
    {
      label: 'Art_School',
      tone: 'root',
      title: 'Guardo ancora il codice con l’occhio del design',
      body: '<b>Ho cominciato dal design</b>, poi sono passato dal frontend al full-stack e all’infrastruttura. Probabilmente è per questo che tengo così tanto alla struttura. Mi piace il software che ha senso quando lo guardi, non solo quando lo esegui.',
    },
    {
      label: 'The_Boundaries',
      title: 'Le regole devono reggere anche quando non ci sono',
      body: '<b>Una parte importante del mio lavoro sta fra i team</b>: confini dei moduli, codice condiviso, dipendenze, build tooling e CI. Scrivo il motivo di una regola e, quando posso, la trasformo in un controllo. La codebase non deve dipendere da qualcuno che si ricorda come dovrebbero funzionare le cose.',
    },
    {
      label: 'Hands_On',
      title: 'Resto dentro il codice',
      body: '<b>Passo ancora molto tempo a implementare e fare debugging.</b> Lavoro sul tooling condiviso, indago i problemi che toccano tutta la piattaforma e automatizzo decisioni che altrimenti si ripeterebbero in ogni review. Quando un problema appartiene a un altro team, lo documento, lo passo in modo chiaro e resto disponibile senza portargli via il lavoro.',
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
    heading: 'Come uso l’AI nel lavoro di engineering',
    paragraphs: [
      'Lo sviluppo assistito e agentico fa parte del mio workflow, ma il codice generato segue gli stessi standard di tutto il resto. Se non può essere revisionato, testato e verificato, non entra.',
    ],
    rulesLead: 'Tre regole tengono questo lavoro sul pratico.',
    rules: [
      '<b>Delego solo quello che so verificare.</b> Se non riesco a revisionare e capire il risultato, farlo più in fretta non serve.',
      '<b>Prima controllo se la modifica deve esistere, poi se funziona.</b> Gli agenti propongono di ricostruire cose che esistono già e lo fanno in modo convincente. La prima domanda è se quel nuovo codice abbia davvero un posto nel progetto.',
      '<b>Gli stessi gate valgono per ogni contributore.</b> Scritto da una persona o generato, il codice deve rispettare gli stessi confini dei moduli, gli stessi test e gli stessi controlli di qualità prima di arrivare in main.',
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
      title: 'Frontend Developer',
      company: 'Treedom',
      context: 'Piattaforma e-commerce per piantare alberi',
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
      title: 'Frontend Developer',
      company: 'Forzieri.com',
      context: 'E-commerce di lusso',
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
      title: 'Head of Web · Full-Stack Designer',
      company: 'Easysystem',
      context: 'Agenzia web e servizi IT',
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

  projects: [
    {
      name: 'Lumina',
      kind: 'FANTASY MUD',
      description:
        'Un MUD fantasy costruito end to end, dal backend Node.js/MongoDB al client React e all’infrastruttura Cloudflare.',
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

  workClosing:
    'Ho cominciato dal design, sono passato dal frontend, dal backend e dall’infrastruttura, e sono arrivato a lavorare sulla struttura condivisa da molti team. La scala è cambiata, l’abitudine no: <b>capire come sta insieme il sistema e poi correggere il punto che continua a far tornare lo stesso problema</b>.',

  footer: {
    built: 'Scritto, disegnato e messo online da me.',
  },

  nowBadge: 'IN CORSO',

  contact: {
    invite: 'Scrivimi quando vuoi, anche solo per parlare.',
    inviteMore:
      'Una conversazione nuova non mi ha mai dato fastidio, e una proposta che mi incuriosisce ancora meno.',
    cv: 'CV (PDF)',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    instagram: 'Instagram',
  },
};
