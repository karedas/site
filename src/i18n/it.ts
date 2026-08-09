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
    title: 'Andrea Lisi · Staff Engineer · Platform & Governance',
    description:
      'Staff Engineer a Vienna. Diciotto anni sul web, oggi governo una monorepo a micro-frontend e decido come l’AI ci entra dentro.',
    ogImageAlt: 'Andrea Lisi, Staff Engineer a Vienna',
  },
  aiMeta: {
    title: 'AI · Andrea Lisi · Staff Engineer',
    description:
      'Come ci lavoro davvero: il lavoro si è spostato dallo scrivere al decidere, e gran parte del valore sta nel sapere quando fermarsi.',
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
    eyebrow: 'STAFF ENGINEER · PLATFORM & GOVERNANCE · VIENNA',
    stats: [
      { label: 'ESPERIENZA', value: '18+ anni' },
      { label: 'FOCUS', value: 'Piattaforma, governance, AI', accent: true },
      { label: 'BASE', value: 'Vienna, remoto o ibrido' },
      { label: 'LINGUE', value: 'IT · EN · DE in corso' },
    ],
    intro:
      'Diciotto anni sul web, arrivato al codice passando dal design e dalla musica. Tengo insieme un sistema che cambia ogni giorno, e decido come l’AI ci entra dentro senza che il codice ne risenta.',
    buttons: { github: 'GITHUB', linkedin: 'LINKEDIN', email: 'EMAIL', cv: 'CV.PDF ↓' },
  },

  sections: {
    approach: { num: '01', title: 'Come lavoro', eyebrow: 'PAROLE MIE' },
    ai: { num: '02', title: 'AI', eyebrow: 'GLI AGENTI E LE REGOLE IN CUI LAVORANO' },
    experience: { num: '03', title: 'Esperienza', eyebrow: 'DICIOTTO ANNI, QUATTRO POSTI' },
    contact: { num: '04', title: 'Contatti', eyebrow: 'CV E PROFILI' },
  },

  approach: [
    {
      title: 'Pulito dal primo minuto',
      body: 'Non esiste per me un progetto avviato sporco. Anche una prima demo la scrivo minimale, ma con ogni pezzo al suo posto, pronto a crescere o a essere buttato. Mi viene così, e non mi costa un minuto in più. <code>any</code> non lo scrivo mai: di solito lo scrive chi TypeScript non lo sa.',
    },
    {
      title: 'In casa d’altri non brucio niente',
      body: 'Se arrivo su un progetto messo male non voglio ripulirlo tutto subito: sarebbe il modo più veloce per farmi odiare e non finire niente. Metto delle priorità e comincio da quello che dà risultato immediato. Un linter lo aggiungo al volo. Ma se apro una cartella e trovo un file da cinquemila righe, quello lo divido prima di ogni altra cosa: costa mezza giornata, e da lì in poi non lo paghi più.',
    },
    {
      title: 'Il perché prima della regola',
      body: 'Prima di imporre una regola vado a cercarmi il motivo, lo scrivo e passo il link. Solo allora si applica, con una scadenza che una persona può reggere. Nessuno deve fidarsi di me sulla parola, e non voglio che lo faccia.',
    },
    {
      title: 'Con le persone parlo, la ripetizione la lascio alla macchina',
      body: 'Vado a parlare di persona, sempre, perché una regola spiegata a voce si discute e una regola scritta si subisce. Quello che non voglio è dire venti volte la stessa cosa. Quando la regola è chiara finisce in pipeline come warning da risolvere, e io passo alla successiva.',
    },
    {
      title: 'A volte il mio lavoro è non risolvere il problema',
      body: 'Potrei chiudere certe cose in cinque minuti. Preferisco perderci mezz’ora: scrivo il documento, apro il task, avviso il team, do una scadenza. Quel lavoro è loro. Se lo faccio sempre io, smettono di sapere che esiste.',
    },
    {
      title: 'Vengo dall’arte',
      body: 'La grafica prima, poi il violino, che ho suonato per anni. Non è un passato che ho chiuso: programmare per me è arte, e deve comportarsi come tale. Una cosa fatta bene si riconosce a vista, e regge anche quando la smonti. Guardo un’interfaccia e un albero di cartelle con lo stesso occhio, e comincio quasi sempre dagli interventi che si vedono.',
    },
  ],

  ai: {
    heading: 'Come ci lavoro davvero',
    paragraphs: [
      'Quello che l’AI mi ha dato è la possibilità di tenere aperti più fronti insieme di quanti ne reggerei da solo. Mentre una cosa va avanti ne apro un’altra. Il lavoro si è spostato dallo scrivere al decidere, e descrivere il problema in modo netto, mai vago, è diventata la parte che conta davvero. Da quasi un anno leggo e correggo molto più codice di quanto ne scriva.',
      '<b>Gran parte del valore sta nel fermare.</b> Un agente ti propone di ricostruire una cosa che esiste già, e suona pure convincente. Serve qualcuno che abbia l’insieme in testa e dica no. Taglio i commenti che spiegano quello che il codice già dice, e le astrazioni tirate su per un solo punto di utilizzo. Quello che resta è la forma più semplice che regge.',
      '<b>So anche quando non usarla</b>, e questa è la parte che in azienda non insegna nessuno. Si spinge tutti ad andare più veloci, poi dove fermarsi ognuno se lo deve trovare da sé. Non se lo trova. Ho visto un collega accettare un suggerimento dopo l’altro senza mai fermarsi a chiedersi cosa stesse accettando.',
      'E poi c’è il lavoro strutturale: le regole del repo strette perché anche gli agenti producano codice a standard. È governance applicata a un nuovo tipo di contributore.',
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
      tags: ['Monorepo', 'Micro-frontend', 'Governance', 'Agentic AI'],
      current: true,
      paragraphs: [
        'Sono entrato nel team di una singola applicazione. Poco dopo mi occupavo <b>della governance e della ristrutturazione architetturale dell’intera monorepo</b>.',
        'È una monorepo a micro-frontend con più team dentro, e il mio compito è tenerla insieme mentre cambia ogni giorno.',
        '<b>Sto in mezzo.</b> Le direzioni del design, le direttive degli stakeholder, le decisioni sull’integrazione dell’AI: arrivano tutte al mio team. Decidiamo come si implementano e le portiamo ai team delle applicazioni.',
        '<b>Decido quali tecnologie entrano</b>, come è fatta la struttura di un’applicazione e dove va un file. Do la struttura e lo scaffolding, e chi sviluppa lavora dentro quei confini.',
        '<b>E resto dentro anch’io</b>: se esce una vulnerabilità che blocca le pipeline, la correggo io.',
      ],
    },
    {
      years: '2019 · 2023',
      place: 'FIRENZE, IT',
      company: 'Treedom',
      role: 'Frontend Developer',
      tags: ['React', 'Vue', 'GraphQL'],
      paragraphs: [
        'Sono arrivato a rinforzare due sviluppatori sullo storefront, poi l’ho riscritto mentre il team cresceva intorno a noi e tutto usciva dal monolite. Da lì ho preso i sistemi interni con cui i forestali gestiscono gli alberi, e <b>quell’interfaccia l’ho scritta da zero</b>. Le fondamenta che abbiamo posato hanno retto mentre l’azienda passava da una ventina di persone a <b>più di centocinquanta</b>.',
      ],
    },
    {
      years: '2017 · 2019',
      place: 'FIRENZE, IT',
      company: 'Forzieri.com',
      role: 'Frontend Developer',
      tags: ['React', 'Webpack'],
      paragraphs: [
        'Ho modernizzato <b>un e-commerce ASP legacy da cima a fondo</b>, una migrazione incrementale prima a jQuery e poi a React, mentre il negozio di lusso continuava a rilasciare funzionalità.',
      ],
    },
    {
      years: '2007 · 2017',
      place: 'FIGLINE VALDARNO, IT',
      company: 'Easysystem',
      role: 'Head of Web · Full-Stack Designer',
      tags: ['Design', 'Full-stack', 'Infrastruttura'],
      paragraphs: [
        'Assunto come grafico dello studio, prototipi e identità visive disegnati da zero, e finito a fare il <b>tecnico dell’infrastruttura on-premise</b>: server, e reti che disegnavo e cablavo su misura dentro le aziende dei clienti. Dieci anni a seguire ogni passaggio per decine di clienti, <b>dal primo schizzo di un marchio alle macchine su cui girava</b>.',
      ],
    },
  ],

  contact: {
    cv: 'CV (PDF)',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    instagram: 'Instagram',
  },
};
