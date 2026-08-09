import { en } from './en';
import { it } from './it';
import type { Copy } from './types';

export type { Copy, WorkEntry } from './types';

export const LOCALES = ['en', 'it'] as const;
export type Locale = (typeof LOCALES)[number];

/** English lives at the root; every other locale gets a path prefix. */
export const DEFAULT_LOCALE: Locale = 'en';

const COPY: Record<Locale, Copy> = { en, it };

export function getCopy(locale: Locale): Copy {
  return COPY[locale];
}

/** The pages that exist in every locale. */
export type PageKey = 'home' | 'ai';

const PATHS: Record<PageKey, string> = { home: '/', ai: '/ai' };

export function hrefFor(locale: Locale, page: PageKey): string {
  const path = PATHS[page];
  if (locale === DEFAULT_LOCALE) return path;
  return path === '/' ? `/${locale}/` : `/${locale}${path}`;
}

/** Prefix an in-locale asset or anchor path, e.g. '#ai' stays, '/ai' moves. */
export function isDefault(locale: Locale): boolean {
  return locale === DEFAULT_LOCALE;
}
