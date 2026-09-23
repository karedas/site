/**
 * The shape every locale must fill. Adding a key here breaks the build until
 * both en.ts and it.ts provide it, which is the point: the two languages
 * cannot drift apart silently.
 */

export type SectionHead = {
  num: string;
  title: string;
};

/** Label used on the detailed AI page. */
export type LabelledSectionHead = SectionHead & {
  eyebrow: string;
};

/**
 * Which of the two named colours a piece of content belongs to. Left off, it
 * takes the ordinary body tone. See tokens.css for what each one means.
 */
export type Tone = 'now' | 'root';

export type Stat = {
  label: string;
  value: string;
  tone?: Tone;
};

export type ApproachBlock = {
  /** Heading describing a concrete part of the author's work. */
  title: string;
  /** HTML: opens with a <b> lead and carries no other emphasis. */
  body: string;
  tone?: Tone;
};

export type FocusGroup = {
  title: string;
  items: string[];
};

export type ProjectEntry = {
  name: string;
  kind: string;
  description: string;
  tags: string[];
  command?: string;
  href?: string;
  linkLabel?: string;
  detail: string;
  imageSrc?: string;
  imageAlt?: string;
  gallery?: { src: string; width: number; height: number; alt: string; label: string }[];
  caption: string;
};

export type WorkEntry = {
  /** Job title, shown before the company. */
  title: string;
  years: string;
  place: string;
  company: string;
  /**
   * What the place was, on the line under the title. Never the job title again:
   * three of these repeated it word for word, which the phone layout made
   * obvious by stacking the two lines.
   */
  context: string;
  tags: string[];
  /** HTML: at most one <b> per paragraph. */
  paragraphs: string[];
  current?: boolean;
};

export type Copy = {
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
    focus: SectionHead;
    ai: LabelledSectionHead;
    experience: SectionHead;
    projects: SectionHead;
    contact: SectionHead;
  };

  approach: ApproachBlock[];

  focus: FocusGroup[];

  ai: {
    heading: string;
    summary: string;
    moreLabel: string;
    /** HTML: the opening paragraphs, before the rules. */
    paragraphs: string[];
    /** The line that hands over to the list. */
    rulesLead: string;
    /** HTML: each one opens with a <b> claim and then gives its reason. */
    rules: string[];
    backLabel: string;
  };

  work: WorkEntry[];

  projects: ProjectEntry[];
  imagePreview: { title: string; close: string; zoom: string; fit: string };

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
    writeLabel: string;
  };
};
