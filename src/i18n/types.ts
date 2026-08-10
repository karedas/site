/**
 * The shape every locale must fill. Adding a key here breaks the build until
 * both en.ts and it.ts provide it, which is the point: the two languages
 * cannot drift apart silently.
 */

export type SectionHead = {
  num: string;
  title: string;
};

/**
 * Only the AI section carries a label. It is the one enclosed block on the page,
 * and the label is part of what sets it apart, so the field belongs to that
 * section alone rather than sitting unused on the other three.
 */
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
  /**
   * Short mono tag above the paragraph, written as an identifier rather than as
   * a phrase. Deliberately English in both locales: it reads as code, not
   * prose, and Italian does not snake_case gracefully.
   */
  label: string;
  /**
   * HTML: opens with a <b> lead and carries no other emphasis. There is no
   * separate title on purpose. A title above one line of body turned every
   * block into a slogan, however plainly it was written, so the lead is a
   * clause inside the sentence instead of a headline over it.
   */
  body: string;
  tone?: Tone;
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
    ai: LabelledSectionHead;
    experience: SectionHead;
    contact: SectionHead;
  };

  approach: ApproachBlock[];

  ai: {
    heading: string;
    /** HTML: two <b> spans in the whole block, no more. */
    paragraphs: string[];
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
};
