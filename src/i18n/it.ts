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
      'Piattaforma e governance a Vienna. Diciotto anni sul web. Tengo insieme sistemi che cambiano ogni giorno, e decido come l’AI ci entra dentro.',
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
    tagline: 'Al codice ci sono arrivato dall’arte.',
    eyebrow: 'PLATFORM & GOVERNANCE · SENIOR SOFTWARE ENGINEER · VIENNA',
    stats: [
      { label: 'ESPERIENZA', value: '18+ anni' },
      { label: 'FOCUS', value: 'Piattaforma, governance, AI', tone: 'now' },
      { label: 'BASE', value: 'Vienna, remoto o ibrido' },
      { label: 'LINGUE', value: 'IT · EN · DE in corso' },
      { label: 'FORMAZIONE', value: 'Istituto d’Arte, Firenze', tone: 'root' },
    ],
    intro:
      'Diciotto anni sul web. Tengo insieme sistemi che cambiano ogni giorno, e decido come l’AI ci entra dentro senza che il codice ne risenta.',
    buttons: { github: 'GITHUB', linkedin: 'LINKEDIN', email: 'EMAIL', cv: 'CV.PDF ↓' },
  },

  sections: {
    approach: { num: '01', title: 'Come lavoro', eyebrow: 'PAROLE MIE' },
    ai: { num: '02', title: 'AI', eyebrow: 'GLI AGENTI E LE REGOLE IN CUI LAVORANO' },
    experience: { num: '03', title: 'Esperienza', eyebrow: 'DICIOTTO ANNI, QUATTRO POSTI' },
    contact: { num: '04', title: 'Restiamo in contatto', eyebrow: 'CV E PROFILI' },
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
      body: 'Prima di imporre una regola vado a cercarmi il motivo, e lo scrivo. La regola arriva sempre insieme al suo perché, e con una scadenza che una persona può reggere. Nessuno deve fidarsi di me sulla parola, e non voglio che lo faccia. Quando è chiara smetto di ripeterla: finisce in pipeline come warning da risolvere, e io passo alla successiva.',
    },
    {
      title: 'Accorcio le distanze',
      body: 'Con le persone ci parlo, tutte, e non aspetto il momento giusto. Scherzo, rido, e con chi parlo non l’ha mai deciso un organigramma: mi interessa la persona molto prima del ruolo che ha. Il tono serio lo tengo per le cose che lo meritano davvero, e sono molte meno di quante sembri. Sul resto si fa prima a guardarsi in faccia.',
    },
    {
      title: 'A volte il mio lavoro è non risolvere il problema',
      body: 'Certe cose potrei chiuderle da solo in silenzio, e nessuno se ne accorgerebbe. Preferisco spenderci il tempo che serve a passarle: scrivo il documento, apro il task, avviso il team, do una scadenza. Quel lavoro è loro. Se lo faccio sempre io, smettono di sapere che esiste.',
    },
    {
      title: 'Una cartella è un dipinto',
      tone: 'root',
      body: 'Ho fatto l’istituto d’arte, e disegnare non ho mai smesso. Prima il disegno, poi anni di violino. Di un’interfaccia mi interessa se è bella e perché è fatta così, e sono due domande che non riesco a separare. Lo stesso metro lo applico all’architettura: una cartella per me è un dipinto, e si vede a colpo d’occhio se dentro c’è un ordine o soltanto roba messa via.',
    },
  ],

  ai: {
    heading: 'Come ci lavoro davvero',
    paragraphs: [
      'Quello che l’AI mi ha dato è la possibilità di tenere aperti più fronti insieme di quanti ne reggerei da solo. Mentre una cosa va avanti ne apro un’altra. Il lavoro si è spostato dallo scrivere al decidere, e descrivere il problema in modo netto è diventata la parte che conta davvero. Ormai leggo e correggo molto più codice di quanto ne scriva.',
      '<b>Il valore vero sta in quello che viene dopo.</b> Un agente ti propone di ricostruire una cosa che esiste già, e suona convincente. Oppure risolve il sintomo e lascia in piedi la causa. Di ogni proposta guardo prima se quella cosa deve esistere nel progetto, e solo dopo se funziona. Quasi sempre la rimando indietro almeno una volta, e quello che torna al secondo giro è più semplice di quello che era partito.',
      '<b>Delego solo quello che sono in grado di verificare.</b> Se leggere e capire una risposta mi costa più che scriverla, non ho risparmiato niente: ho solo spostato il lavoro dove si vede meno. Vale per le migrazioni che non si tornano indietro e per i problemi che non riesco ancora a descrivere con precisione, perché lì un agente ti dà una risposta sicura alla domanda sbagliata.',
      'E poi c’è il lavoro strutturale, la parte meno visibile e quella che tiene. Gli stessi confini che valgono per i team ora devono valere per un contributore che non è una persona: le regole diventano strette e verificabili in pipeline, perché un agente non le intuisce, le legge. È governance applicata a un nuovo tipo di contributore, uno che prende alla lettera tutto quello che scrivi.',
    ],
    permalinkLabel: 'Questa sezione ha una pagina sua',
    backLabel: 'ANDREA LISI',
  },

  work: [
    {
      years: '2023 · OGGI',
      place: 'VIENNA, AT',
      title: 'Senior Software Engineer',
      company: 'Tricentis',
      role: 'Platform & Governance',
      tags: ['Architettura', 'Governance', 'Standard', 'Agentic AI'],
      current: true,
      paragraphs: [
        'Sono entrato in un team a cui era affidata una delle applicazioni di Tosca Cloud, poi diventate due, e ne ho ristrutturato e ridisegnato parti importanti, tanto che in poco tempo sono stato <b>promosso nel team che tiene la governance della piattaforma</b>.',
        '<b>Mi occupo della governance della repository</b>, ed è il centro del ruolo: una monorepo a microfrontend con sedici progetti dentro, rilasciati da team diversi e che devono restare un prodotto solo. Cosa entra e cosa resta fuori, come è strutturata, dove va ogni cosa e quali confini ha davanti ogni team.',
        '<b>La manutengo a livello architetturale</b>: confini fra i moduli, grafo delle dipendenze, tempi di build e pipeline, con quello che deve fallire in CI prima di arrivare in main, e quando si rompe qualcosa che blocca tutti la correzione passa da qui.',
        '<b>Aggiornamento e integrazione dei pacchetti</b> su tutta la piattaforma: versioni maggiori, vulnerabilità, e le rotture che assorbo prima che arrivino ai team.',
        '<b>Costruisco le risorse condivise</b> che i team usano invece di rifarsele ognuno per conto proprio, e smonto le bad practice quando vedo che stanno diventando abitudine.',
        '<b>Faccio da gateway fra il design e i team interni</b> sugli standard: le direzioni arrivano da lì, e le traduco in regole e componenti con cui si possa lavorare.',
        '<b>Integro l’AI a tutti i livelli</b>, dalla developer experience alle pipeline, con le stesse regole e gli stessi gate del codice scritto a mano.',
      ],
    },
    {
      years: '2019 · 2023',
      place: 'FIRENZE, IT',
      title: 'Frontend Developer',
      company: 'Treedom',
      role: 'Frontend Developer',
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
      role: 'Frontend Developer',
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
      role: 'Head of Web · Full-Stack Designer',
      tags: ['Design', 'Full-stack', 'Infrastruttura'],
      paragraphs: [
        'Assunto come web designer: prototipi, grafica per la stampa e identità visive disegnate da zero, mai montate da un modello comprato.',
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
