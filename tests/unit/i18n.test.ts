import { describe, expect, it } from 'vitest';
import { DEFAULT_LOCALE, getCopy, hrefFor, isDefault, LOCALES } from '@/i18n';
import cvEn from '../../scripts/cv-en.json';
import cvIt from '../../scripts/cv-it.json';

/**
 * Collect every leaf path in an object, arrays included by index, so two
 * locales can be compared as sets of paths. The Copy type already forces both
 * files to carry the same keys; this catches the parts a type cannot see, like
 * one language having five bullets where the other has three.
 */
function leafPaths(value: unknown, prefix = ''): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item, i) => leafPaths(item, `${prefix}[${i}]`));
  }
  if (value !== null && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) =>
      leafPaths(child, prefix ? `${prefix}.${key}` : key),
    );
  }
  return [prefix];
}

function leaves(value: unknown, prefix = ''): [string, unknown][] {
  if (Array.isArray(value)) {
    return value.flatMap((item, i) => leaves(item, `${prefix}[${i}]`));
  }
  if (value !== null && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) =>
      leaves(child, prefix ? `${prefix}.${key}` : key),
    );
  }
  return [[prefix, value]];
}

describe('locale parity', () => {
  it('gives both languages the same set of leaves, arrays included', () => {
    const [en, it] = LOCALES.map((l) => leafPaths(getCopy(l)).sort());

    // Optional keys legitimately differ: only one job is current, and only the
    // toned entries carry a tone.
    const optional = /\.(current|tone)$/;
    expect((en ?? []).filter((p) => !optional.test(p))).toEqual(
      (it ?? []).filter((p) => !optional.test(p)),
    );
  });

  it('never ships an empty string', () => {
    for (const locale of LOCALES) {
      const blank = leaves(getCopy(locale))
        .filter(([, v]) => typeof v === 'string' && v.trim() === '')
        .map(([path]) => path);
      expect(blank, `${locale} has blank copy`).toEqual([]);
    }
  });

  it('declares the language it is', () => {
    for (const locale of LOCALES) {
      expect(getCopy(locale).htmlLang).toBe(locale);
    }
  });
});

describe('metadata limits', () => {
  it('keeps both descriptions under the truncation limit', () => {
    for (const locale of LOCALES) {
      const copy = getCopy(locale);
      for (const [where, text] of [
        ['meta', copy.meta.description],
        ['aiMeta', copy.aiMeta.description],
      ] as const) {
        expect(text.length, `${locale} ${where} is ${text.length} chars`).toBeLessThan(155);
      }
    }
  });
});

describe('the work history', () => {
  it('keeps both CVs structurally aligned, including all skills and projects', () => {
    expect(leafPaths(cvEn).sort()).toEqual(leafPaths(cvIt).sort());
    expect(cvEn.title).toBe(cvIt.title);
    expect(cvEn.jobs.map((job) => job.company)).toEqual(cvIt.jobs.map((job) => job.company));
    expect(cvEn.jobs[0]?.context).toBe('Work on Tosca Cloud');
    expect(cvEn.jobs[0]?.dates).toBe('2023 - present');
    expect(cvEn.profile).not.toMatch(/Tricentis|Staff Engineer|full.stack/i);
    expect(cvEn.skills.map(([, entries]) => entries?.split('|').length)).toEqual(
      cvIt.skills.map(([, entries]) => entries?.split('|').length),
    );
    expect(cvEn.projects.map((project) => project.name)).toEqual(
      cvIt.projects.map((project) => project.name),
    );
    expect(cvEn.projects.find((project) => project.name === 'Deepfield')?.url).toBeUndefined();
    expect(cvEn.skills.flat().join(' ')).toContain('after Okta login');
    expect(cvEn.projects.find((project) => project.name === 'lockhound')?.body).toContain(
      'explicit action',
    );
  });

  it('keeps the Italian CV aligned with the platform role and design background', () => {
    expect(cvIt.title).toBe(getCopy('it').work[0]?.title);
    expect(cvIt.profile).not.toMatch(/Tricentis|Staff Engineer|full.stack/i);
    const role = cvIt.jobs[0]?.bullets.join(' ') ?? '';
    for (const term of ['ADR', 'design system', 'GitHub', 'Azure Pipelines', 'team di prodotto']) {
      expect(role).toContain(term);
    }
    expect(role).not.toMatch(/Playwright|Okta|OpenTelemetry/);
    expect(cvIt.skills).toHaveLength(12);
    const skills = cvIt.skills.flat().join(' ');
    for (const term of ['Zustand', 'ADR', 'Nx', 'Vite', 'Webpack', 'Adobe', 'Figma', 'MCP']) {
      expect(skills).toContain(term);
    }
    expect(skills).toContain('dopo il login Okta');
    expect(cvIt.projects[0]?.body).toContain('in sviluppo');
    expect(cvIt.projects.find((project) => project.name === 'lockhound')?.body).toContain(
      'azione esplicita',
    );
    expect(cvIt.jobs[0]?.company).toBe('Tricentis');
    expect(cvIt.jobs[0]?.context).toBe('Esperienza su Tosca Cloud');
    expect(cvIt.jobs[0]?.dates).toBe('2023 - oggi');
    expect(cvIt.jobs[0]?.bullet_labels).toHaveLength(cvIt.jobs[0]?.bullets.length ?? 0);
  });

  it('marks exactly one role as current, and it is the first', () => {
    for (const locale of LOCALES) {
      const work = getCopy(locale).work;
      expect(work.filter((job) => job.current)).toHaveLength(1);
      expect(work[0]?.current).toBe(true);
    }
  });

  it('gives every job bullets and chips', () => {
    for (const locale of LOCALES) {
      for (const job of getCopy(locale).work) {
        expect(job.paragraphs.length, `${locale} ${job.company}`).toBeGreaterThan(0);
        expect(job.tags.length, `${locale} ${job.company}`).toBeGreaterThan(0);
      }
    }
  });
});

describe('focus and personal projects', () => {
  it('keeps tool names in capabilities without turning recent tasks into achievements', () => {
    for (const locale of LOCALES) {
      const copy = getCopy(locale);
      const currentRole = copy.work[0]?.paragraphs.join(' ') ?? '';
      expect(currentRole).toContain('ADR');
      expect(currentRole).toContain('design system');
      expect(currentRole).not.toContain('Playwright');
      expect(copy.focus.flatMap((group) => group.items)).toContain('Playwright');
      expect(copy.focus.flatMap((group) => group.items)).toContain('Zustand');
    }
  });

  it('groups the skills and links only publicly accessible projects in both languages', () => {
    for (const locale of LOCALES) {
      const copy = getCopy(locale);
      expect(copy.focus).toHaveLength(6);
      for (const project of copy.projects) {
        if (project.href) {
          expect(new URL(project.href).protocol).toBe('https:');
          expect(project.linkLabel?.length).toBeGreaterThan(0);
        } else {
          expect(project.name).toBe('Deepfield');
          expect(project.gallery).toHaveLength(2);
          expect(project.linkLabel).toBeUndefined();
        }
      }
      expect(copy.projects.some((project) => project.name === 'lockhound')).toBe(true);
    }
  });

  it('describes Deepfield as a stopped experiment, not a public product', () => {
    const project = cvIt.projects.find((entry) => entry.name === 'Deepfield');
    expect(project?.label).toBe('Esperimento interrotto');
    expect(project?.url).toBeUndefined();
    expect(getCopy('it').projects.find((entry) => entry.name === 'Deepfield')?.detail).toContain(
      'Ho interrotto',
    );
    expect(getCopy('en').projects.find((entry) => entry.name === 'Deepfield')?.detail).toContain(
      'stopped',
    );
  });
});

describe('the colour system', () => {
  /* Each named colour has one job and marks one category. Spending a tone
     somewhere new turns it back into decoration, so the count is pinned. */
  it('spends each tone exactly once per surface', () => {
    for (const locale of LOCALES) {
      const copy = getCopy(locale);
      const facts = copy.hero.stats.filter((s) => s.tone);
      expect(facts.map((s) => s.tone).sort()).toEqual(['now', 'root']);

      const toned = copy.approach.filter((b) => b.tone);
      expect(toned.map((b) => b.tone)).toEqual(['root']);
    }
  });
});

describe('hrefFor', () => {
  it('leaves the default locale at the root and prefixes the others', () => {
    expect(hrefFor('en', 'home')).toBe('/');
    expect(hrefFor('en', 'ai')).toBe('/ai');
    expect(hrefFor('it', 'home')).toBe('/it/');
    expect(hrefFor('it', 'ai')).toBe('/it/ai');
  });

  it('agrees with isDefault about which locale is the default', () => {
    for (const locale of LOCALES) {
      expect(isDefault(locale)).toBe(locale === DEFAULT_LOCALE);
      expect(hrefFor(locale, 'home').startsWith(`/${locale}`)).toBe(!isDefault(locale));
    }
  });
});
