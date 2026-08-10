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

/**
 * Which of the two named colours a piece of content belongs to. Left off, it
 * takes the ordinary body tone. See tokens.css for what each one means.
 */
export type Tone = 'now' | 'root';

export interface Stat {
  label: string;
  value: string;
  tone?: Tone;
}

export interface ApproachBlock {
  title: string;
  /** HTML: the body may carry inline emphasis. */
  body: string;
  tone?: Tone;
}

export interface WorkEntry {
  /** Job title, shown before the company. */
  title: string;
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
    /** Spoken greeting above the name. */
    greeting: string;
    /** The short line under the name: says the job in one breath. */
    tagline: string;
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
    /** Visible label of the link to the /ai page. */
    permalinkLabel: string;
    backLabel: string;
  };

  work: WorkEntry[];

  /** Small print at the very bottom. */
  footer: {
    built: string;
  };

  /** Badge on the role that is current. */
  nowBadge: string;

  contact: {
    /** The short line that closes the page. Set as a lead, so keep it one breath. */
    invite: string;
    /** The sentence under it, at body size. Carries the reason, not the invitation. */
    inviteMore: string;
    cv: string;
    github: string;
    linkedin: string;
    email: string;
    instagram: string;
  };
}
