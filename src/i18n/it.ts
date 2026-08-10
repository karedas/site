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
      'Quello che mi tiene acceso è un problema difficile, e non lo lascio finché non è risolto come si deve. Mi fa ancora effetto quando una cosa è fatta bene e si capisce al primo sguardo: è quello che cercavo quando disegnavo.',
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
      label: 'Art_School',
      tone: 'root',
      title: 'L’architettura è una questione visiva, e di rispetto per chi legge',
      body: '<b>Vengo dall’istituto d’arte</b>, e per me l’ordine di una base di codice non è un vezzo teorico. Quando apro una repository, il modo in cui sono strutturate le cartelle e le dipendenze mi dice subito se il progetto è sano o se è un labirinto. Cerco di scrivere codice che si spieghi da solo: se è evidente dove debba andare una modifica e cosa rischi di influenzare, abbiamo risparmiato ore di debug a chi lavorerà su quel file dopo di noi. Anche quando sviluppo un prototipo veloce o una demo, imposto confini logici puliti fin dall’inizio: non costa tempo in più, ed evita di accumulare debito tecnico invisibile.',
    },
    {
      label: 'The_Rules',
      title: 'Se una regola è importante, la controlla una macchina',
      body: '<b>Non credo nella figura dello sviluppatore eroe</b>, e non voglio che la stabilità di un progetto dipenda dalla mia memoria o dalla mia presenza costante. Quando dentro il team decidiamo uno standard o una convenzione architetturale, il mio primo passo è automatizzarla. Se un controllo può eseguirlo un linter, un test di pipeline o uno script che mappa il grafo delle dipendenze, quel lavoro lo delego alla macchina. Così eliminiamo le discussioni ripetitive sulle convenzioni nelle pull request, e liberiamo spazio mentale per la logica applicativa vera.',
    },
    {
      label: 'The_People',
      title: 'Comunicazione diretta e orizzontale',
      body: '<b>I problemi tecnici complessi si risolvono con la chiarezza e l’onestà, non con i titoli sulla carta.</b> Avendo vissuto sia la realtà delle piccole agenzie, dove gestivo in autonomia dalla grafica di stampa fino all’installazione fisica di server e firewall aziendali, sia contesti internazionali strutturati, ho capito che le soluzioni migliori nascono quando si abbattono i filtri gerarchici. Mi piace confrontarmi apertamente con tutti, mantenendo il tono serio solo per le cose che lo meritano davvero.',
    },
  ],

  ai: {
    heading: 'Come uso l’AI, senza farmi inquinare il codice',
    paragraphs: [
      'L’intelligenza artificiale mi permette di gestire molti più fronti di quanti ne coprirei da solo. Ma ha cambiato radicalmente il mio modo di lavorare: oggi scrivo molto meno codice e passo la maggior parte del tempo a leggere, valutare e correggere quello generato. Invece di un semplice esecutore, il mio ruolo è diventato quello di un decisore.',
    ],
    rulesLead: 'Nell’usare questi strumenti applico tre regole molto pragmatiche.',
    rules: [
      '<b>Delego solo quello che so verificare all’istante.</b> Se impiego più tempo a correggere e comprendere la risposta di un modello rispetto a quanto ci avrei messo a scriverla da zero, allora non sto risparmiando nulla.',
      '<b>Diffido delle scorciatoie.</b> L’AI è bravissima a curare il sintomo immediato di un bug ignorando la causa strutturale, e se non viene controllata duplica volentieri logiche che esistono già nel progetto. Per questo, prima ancora di verificare se il codice generato funziona, mi chiedo sempre: ha davvero senso che questa roba esista?',
      '<b>Le macchine non hanno intuito, quindi servono confini di ferro.</b> Un assistente virtuale non “sente” l’architettura e non ne capisce l’eleganza. In progetti complessi, come la nostra monorepo con sedici progetti paralleli, non bastano le raccomandazioni: i limiti architetturali devono essere tradotti in controlli automatici e rigidi direttamente nelle pipeline di rilascio. L’AI non può intuire una regola, ma deve essere costretta a rispettarla da un test che fallisce prima del merge.',
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

  workClosing:
    'Ogni tappa mi ha spostato lo sguardo un po’ più in là del codice. Alla programmazione ci sono arrivato dall’arte, cercando la stessa armonia strutturale, e oggi non guardo la singola feature: guardo le fondamenta, le automazioni e le regole che tengono in piedi l’insieme. <b>Risolvo alla radice</b>, perché non mi basta che un pezzo funzioni: devo sapere che regge tutto il resto.',

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
