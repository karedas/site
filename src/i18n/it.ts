import type { Copy } from './types';

/**
 * Italian is the author's own voice, taken from the brief verbatim wherever
 * the brief provides it: hero, the six "come lavoro" blocks, the AI block and
 * the Tricentis card. The three older job cards exist only in English in the
 * brief, so those are translated here.
 */
export const it: Copy = {
  htmlLang: 'it',
  langName: 'IT',

  meta: {
    title: 'Andrea Lisi · Platform & Governance · Vienna',
    description:
      'Platform & Governance a Vienna. Programmo da diciotto anni e ho cominciato disegnando. Oggi tengo insieme una piattaforma con parecchi team dentro.',
    ogImageAlt: 'Andrea Lisi, piattaforma e governance a Vienna',
  },
  aiMeta: {
    title: 'AI · Andrea Lisi · Platform & Governance',
    description:
      'Come ci lavoro davvero: il lavoro si è spostato dallo scrivere al decidere, e delego solo quello che sono in grado di verificare.',
  },

  skipLink: 'Vai al contenuto',
  langSwitchLabel: 'Lingua',

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
    greeting: 'Ciao. Mi chiamo',
    tagline: 'Programmo da diciotto anni, e ho cominciato disegnando.',
    eyebrow: 'PLATFORM & GOVERNANCE · SENIOR SOFTWARE ENGINEER · VIENNA',
    stats: [
      { label: 'ESPERIENZA', value: '18+ anni' },
      { label: 'FOCUS', value: 'Piattaforma, governance, AI', tone: 'now' },
      { label: 'BASE', value: 'Vienna, remoto o ibrido' },
      { label: 'LINGUE', value: 'IT · EN · DE in corso' },
      { label: 'FORMAZIONE', value: 'Istituto d’Arte, Firenze', tone: 'root' },
    ],
    intro:
      'Quello che mi tiene acceso è un problema difficile, e non lo lascio finché non è risolto come si deve. Mi fa ancora effetto quando una cosa è fatta bene e si capisce al primo sguardo: è quello che cercavo quando disegnavo. Non mi basta che funzioni, voglio sapere perché.',
    buttons: { github: 'GITHUB', linkedin: 'LINKEDIN', email: 'EMAIL', cv: 'CV.PDF ↓' },
  },

  sections: {
    approach: { num: '01', title: 'Come lavoro' },
    ai: { num: '02', title: 'AI', eyebrow: 'GLI AGENTI E LE REGOLE IN CUI LAVORANO' },
    experience: { num: '03', title: 'Esperienza' },
    contact: { num: '04', title: 'Restiamo in contatto' },
  },

  approach: [
    {
      label: 'The_Code',
      body: '<b>Comincio pulito anche quando è solo una demo</b>: i confini che si vedono da fuori non costa niente metterli subito. Su un progetto già messo male invece non riscrivo tutto il primo giorno, comincio da dove il risultato si vede, e il punto che frena tutti lo divido prima di ogni altra cosa.',
    },
    {
      label: 'The_Rules',
      body: '<b>Ogni regola arriva con il suo perché</b>, perché nessuno deve fidarsi di me sulla parola, e quando è chiara smetto di ripeterla: finisce in pipeline. Certe cose potrei chiuderle da solo e nessuno lo saprebbe, e le passo comunque con un documento e una scadenza: se le faccio sempre io, il team smette di sapere che esistono.',
    },
    {
      label: 'The_People',
      body: '<b>Parlo con tutti, e il ruolo non conta.</b> Scherzo, rido, e con chi parlo non l’ha mai deciso un organigramma. Il tono serio lo tengo per quello che lo merita davvero, e sono molte meno cose di quante sembri.',
    },
    {
      label: 'Art_School',
      tone: 'root',
      body: '<b>Vengo dall’arte</b>: istituto d’arte, poi anni di violino, e disegnare non ho mai smesso. Una cartella per me è un dipinto, e all’architettura applico lo stesso metro: si vede a colpo d’occhio se dentro c’è un ordine o soltanto roba messa via.',
    },
  ],

  ai: {
    heading: 'Come ci lavoro davvero',
    paragraphs: [
      'Quello che l’AI mi ha dato è tenere aperti più fronti di quanti ne reggerei da solo. Il lavoro si è spostato dallo scrivere al decidere, e ormai leggo e correggo molto più codice di quanto ne scriva.',
      '<b>Delego solo quello che sono in grado di verificare.</b> Di ogni proposta guardo prima se quella cosa deve esistere nel progetto, e solo dopo se funziona: un agente ricostruisce volentieri quello che c’è già, o risolve il sintomo e lascia in piedi la causa. Se leggere una risposta mi costa più che scriverla, non ho risparmiato niente.',
      '<b>Poi c’è la parte strutturale, che è quella che tiene.</b> Gli stessi confini che valgono per i team devono valere per un contributore che non è una persona: le regole diventano strette e verificabili in pipeline, perché un agente non le intuisce, le legge.',
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
      tags: ['Architettura', 'Governance', 'Standard', 'Agentic AI'],
      current: true,
      paragraphs: [
        'Sono entrato in un team che sviluppava features per prodotti precisi di Tosca Cloud, Inventory e la simulazione delle API dietro api-playground e api-messages, gomito a gomito con i backend dello stesso team, e quando il progetto è cresciuto <b>mi hanno promosso in un team creato apposta per tenerne le redini</b>.',
        '<b>Mi occupo della governance della repository</b>: una monorepo a microfrontend con sedici progetti, rilasciati da team diversi e che devono restare un prodotto solo. Cosa entra e cosa resta fuori, i confini fra i moduli, il grafo delle dipendenze, e le pipeline con quello che deve fallire prima di arrivare in main.',
        '<b>Faccio da gateway fra il design e i team interni</b> sugli standard, e costruisco le risorse condivise che si usano al posto di rifarle: è lì che le bad practice si fermano prima di diventare abitudine.',
        '<b>L’AI la integro a tutti i livelli</b>, dalla developer experience alle pipeline, con le stesse regole e gli stessi gate del codice scritto a mano.',
      ],
    },
    {
      years: '2019 · 2023',
      place: 'FIRENZE, IT',
      title: 'Frontend Developer',
      company: 'Treedom',
      context: 'Piattaforma e-commerce per piantare alberi',
      tags: ['React', 'Vue', 'GraphQL'],
      paragraphs: [
        'Sono arrivato a rinforzare due sviluppatori sullo storefront, e ho finito per riscriverlo mentre il team cresceva intorno a noi e tutto usciva dal monolite.',
        'Nell’ultimo anno <b>ho costruito da zero il backend dei sistemi interni</b>, quelli con cui i forestali gestiscono gli alberi, dentro un team di backend pur venendo dal frontend.',
        'Le fondamenta che abbiamo posato hanno retto mentre l’azienda passava da una ventina di persone a <b>più di centocinquanta</b>.',
      ],
    },
    {
      years: '2017 · 2019',
      place: 'FIRENZE, IT',
      title: 'Frontend Developer',
      company: 'Forzieri.com',
      context: 'E-commerce di lusso',
      tags: ['React', 'Webpack'],
      paragraphs: [
        'Ho modernizzato <b>un e-commerce ASP legacy da cima a fondo</b>, con una migrazione incrementale prima a jQuery e poi a React.',
        'Il backend è venuto con il resto: <b>un CMS su misura</b> che gestiva gli ordini e la vita quotidiana del negozio.',
        'Il negozio di lusso ha continuato a rilasciare funzionalità per tutta la transizione, senza mai fermarsi.',
      ],
    },
    {
      years: '2007 · 2017',
      place: 'FIGLINE VALDARNO, IT',
      title: 'Head of Web · Full-Stack Designer',
      company: 'Easysystem',
      context: 'Agenzia web e servizi IT',
      tags: ['Design', 'Full-stack', 'Infrastruttura'],
      paragraphs: [
        'Assunto come web designer: prototipi, grafica per la stampa e identità visive disegnate da zero con la suite Adobe, mai montate da un modello comprato.',
        'In parallelo ho fatto <b>infrastruttura vera</b>: reti installate dentro le aziende dei clienti, con i firewall e i server che ci stavano dietro. Il networking l’ho imparato mettendoci le mani.',
        'Dieci anni a tenere insieme tutto questo <b>da solo</b>, per decine di clienti, dal primo schizzo di un marchio alle macchine su cui girava.',
      ],
    },
  ],

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
