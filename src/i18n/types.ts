/**
 * The shape every locale must fill. Adding a key here breaks the build until
 * both en.ts and it.ts provide it, which is the point: the two languages
 * cannot drift apart silently.
 */

export interface SectionHead {
  num: string;
  title: string;
  eyebrow: string;
}

export interface Stat {
  label: string;
  value: string;
  accent?: boolean;
}

export interface ApproachBlock {
  /** HTML: the first block carries an inline <code>any</code>. */
  title: string;
  body: string;
}

export interface WorkEntry {
  years: string;
  place: string;
  company: string;
  role: string;
  tags: string[];
  /** HTML: at most one <b> per paragraph. */
  paragraphs: string[];
  current?: boolean;
}

export interface Copy {
  /** Value for the <html lang> attribute. */
  htmlLang: string;
  /** Name of this language, in this language, for the switcher. */
  langName: string;

  meta: {
    title: string;
    /** Keep under 155 characters: past that, search and social truncate it. */
    description: string;
    ogImageAlt: string;
  };
  aiMeta: {
    title: string;
    description: string;
  };

  skipLink: string;
  langSwitchLabel: string;

  nav: {
    ariaLabel: string;
    logoLabel: string;
    items: { num: string; label: string; target: string }[];
  };

  hero: {
    eyebrow: string;
    stats: Stat[];
    intro: string;
    buttons: { github: string; linkedin: string; email: string; cv: string };
  };

  sections: {
    approach: SectionHead;
    ai: SectionHead;
    experience: SectionHead;
    contact: SectionHead;
  };

  approach: ApproachBlock[];

  ai: {
    heading: string;
    /** HTML: two <b> spans in the whole block, no more. */
    paragraphs: string[];
    /** One array per printed line. The only keyword list on the site. */
    keywords: string[][];
    /**
     * Appended after the visible href to build the permalink's accessible
     * name. It must stay a suffix: WCAG 2.5.3 wants the name to start with
     * the visible text, and that text differs per locale (/ai vs /it/ai).
     */
    permalinkSuffix: string;
    backLabel: string;
  };

  work: WorkEntry[];

  contact: {
    cv: string;
    github: string;
    linkedin: string;
    email: string;
    instagram: string;
  };
}
