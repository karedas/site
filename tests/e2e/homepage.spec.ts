import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';
import { getCopy, hrefFor, type Locale } from '../../src/i18n';

/**
 * Audit a page at rest: reduced motion stops the entrances and the hero
 * field, so axe reads settled colors and never competes with animation
 * frames for CPU.
 */
async function auditPage(page: Page, url: string): Promise<void> {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(url);
  await page.waitForLoadState('networkidle');

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  const criticalOrSerious = results.violations.filter(
    (v) => v.impact === 'critical' || v.impact === 'serious',
  );

  expect(criticalOrSerious, JSON.stringify(criticalOrSerious, null, 2)).toEqual([]);
}

/** A phrase that only exists in this locale, to prove the right dict landed. */
const FINGERPRINT: Record<Locale, string> = {
  en: 'What AI gave me is the ability',
  it: 'Quello che l’AI mi ha dato',
};

const FIRST_APPROACH_FINGERPRINT: Record<Locale, RegExp> = {
  en: /the boundaries show from outside/,
  it: /i confini si vedono da fuori/,
};

for (const locale of ['en', 'it'] as const) {
  const copy = getCopy(locale);
  const home = hrefFor(locale, 'home');
  const ai = hrefFor(locale, 'ai');
  const cvFilename = locale === 'it' ? 'andrea-lisi-cv-it.pdf' : 'andrea-lisi-cv.pdf';
  const cvHref = `/${cvFilename}`;

  test.describe(`home page (${locale})`, () => {
    test('declares its language and links both alternates', async ({ page }) => {
      await page.goto(home);

      await expect(page.locator('html')).toHaveAttribute('lang', copy.htmlLang);
      await expect(page.locator('link[rel=alternate][hreflang=en]')).toHaveAttribute(
        'href',
        'https://andrea-lisi.com/',
      );
      await expect(page.locator('link[rel=alternate][hreflang=it]')).toHaveAttribute(
        'href',
        'https://andrea-lisi.com/it/',
      );
      await expect(page.locator('link[rel=alternate][hreflang=x-default]')).toHaveAttribute(
        'href',
        'https://andrea-lisi.com/',
      );
    });

    test('keeps its description under the truncation limit', async ({ page }) => {
      await page.goto(home);
      const description = await page.locator('meta[name=description]').getAttribute('content');
      expect(description).toBe(copy.meta.description);
      expect((description as string).length).toBeLessThan(155);
    });

    test('renders the hero with the assembled name and its accessible label', async ({ page }) => {
      await page.goto(home);
      const h1 = page.getByRole('heading', { level: 1 });
      // The scatter script decorates; the accessible name stays intact.
      await expect(h1).toHaveAttribute('aria-label', 'Andrea Lisi.');
      await expect(h1.locator('.split-char').first()).toBeVisible();
      await expect(page.getByText(copy.hero.intro.slice(0, 40))).toBeVisible();
    });

    test('mounts the hero constellation island', async ({ page }) => {
      await page.goto(home);
      const host = page.getByTestId('hero-field');
      await expect(host.locator('canvas')).toHaveCount(1);
      await expect(host).toHaveAttribute('aria-hidden', 'true');
    });

    test('shows all six ways-of-working cards with their titles only', async ({ page }) => {
      await page.goto(home);

      for (const block of copy.approach) {
        const plain = block.title.replace(/<[^>]+>/g, '').replace(/&rsquo;/g, '’');
        await expect(
          page.getByRole('button', { name: new RegExp(plain.slice(0, 18)) }),
        ).toBeVisible();
      }
      // The prose stays put away until a card opens.
      await expect(page.getByText(FIRST_APPROACH_FINGERPRINT[locale])).not.toBeVisible();
    });

    test('opens a card overlay and closes it again', async ({ page }) => {
      await page.goto(home);

      const firstTitle = (copy.approach[0]?.title ?? '').replace(/<[^>]+>/g, '');
      await page.getByRole('button', { name: new RegExp(firstTitle.slice(0, 14)) }).click();
      const dialog = page.locator(`#approach-${locale}-0`);
      await expect(dialog).toBeVisible();
      await expect(dialog.getByText(FIRST_APPROACH_FINGERPRINT[locale])).toBeVisible();

      await dialog.getByRole('button', { name: copy.ui.close }).click();
      await expect(dialog).not.toBeVisible();
    });

    test('opens the AI card with the full prose and the deep link', async ({ page }) => {
      await page.goto(home);

      await page.getByRole('button', { name: new RegExp(copy.ai.heading.slice(0, 16)) }).click();
      const dialog = page.locator(`#ai-${locale}`);
      await expect(dialog).toBeVisible();
      await expect(dialog.getByText(FINGERPRINT[locale])).toBeVisible();
      await expect(
        dialog.getByRole('link', { name: new RegExp(copy.ai.permalinkSuffix) }),
      ).toHaveAttribute('href', ai);
    });

    test('shows the focused skills and personal projects', async ({ page }) => {
      await page.goto(home);

      await expect(page.getByRole('heading', { name: copy.sections.focus.title })).toBeVisible();
      await expect(
        page.getByText(copy.focus[0]?.items[1] ?? '', { exact: true }).first(),
      ).toBeVisible();
      await expect(page.getByRole('heading', { name: copy.sections.projects.title })).toBeVisible();
      await expect(page.getByText('lockhound', { exact: true })).toBeVisible();
      await expect(page.getByText('npx lockhound', { exact: true }).first()).toBeVisible();
    });

    test('walks the timeline: four stops, oldest to current', async ({ page }) => {
      await page.goto(home);

      const stops = page.locator('.timeline .stop .company');
      await expect(stops).toHaveCount(4);
      const reversed = [...copy.work].reverse();
      for (const [i, entry] of reversed.entries()) {
        await expect(stops.nth(i)).toContainText(entry.company);
      }

      // The current stop opens with the full story.
      await page.locator('.timeline .stop.current').click();
      const dialog = page.locator(`#job-${locale}-3`);
      await expect(dialog).toBeVisible();
      await expect(dialog.getByText(/monorepo/i).first()).toBeVisible();
    });

    test('links the CV download in the hero and in the contact card', async ({ page }) => {
      await page.goto(home);

      const heroCv = page.locator('.hero').getByRole('link', { name: copy.hero.buttons.cv });
      await expect(heroCv).toHaveAttribute('href', cvHref);
      await expect(heroCv).toHaveAttribute('download', cvFilename);

      const contactCv = page.locator('.contact-card').getByRole('link', { name: copy.contact.cv });
      await expect(contactCv).toHaveAttribute('href', cvHref);
      await expect(contactCv).toHaveAttribute('download', cvFilename);
    });

    test('serves the CV PDF', async ({ request }) => {
      const res = await request.get(cvHref);
      expect(res.status()).toBe(200);
    });

    test('keeps Instagram small and out of the primary links', async ({ page }) => {
      await page.goto(home);

      await expect(page.locator('.hero').getByRole('link', { name: /instagram/i })).toHaveCount(0);
      await expect(
        page.locator('.contact-card .contact-links').getByRole('link', { name: /instagram/i }),
      ).toHaveCount(0);
      await expect(
        page.locator('.contact-card').getByRole('link', { name: /instagram/i }),
      ).toBeVisible();
    });

    test('does not ship the flagged copy patterns', async ({ page }) => {
      await page.goto(home);

      await expect(page.getByText(/quietly/i)).toHaveCount(0);
      await expect(page.getByText(/SYS NOMINAL/)).toHaveCount(0);
      await expect(page.getByText(/UPTIME/)).toHaveCount(0);
      await expect(page.getByText(/MMXXVI/)).toHaveCount(0);
    });

    test('emits no console errors during load', async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text());
      });
      page.on('pageerror', (err) => errors.push(err.message));

      await page.goto(home);
      await page.waitForLoadState('networkidle');

      expect(errors).toEqual([]);
    });

    test('renders the overlay content inline without JavaScript', async ({ browser }) => {
      const context = await browser.newContext({ javaScriptEnabled: false });
      const page = await context.newPage();
      await page.goto(home);

      await expect(page.getByRole('heading', { level: 1 })).toContainText('Andrea');
      // The noscript stylesheet unfolds every overlay in place.
      await expect(page.getByText(FINGERPRINT[locale])).toBeVisible();
      await expect(page.getByText(FIRST_APPROACH_FINGERPRINT[locale])).toBeVisible();

      await context.close();
    });

    test('respects prefers-reduced-motion (name intact, no scatter)', async ({ browser }) => {
      const context = await browser.newContext({ reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.goto(home);
      const h1 = page.getByRole('heading', { level: 1 });
      await expect(h1).toContainText('Andrea');
      await expect(h1.locator('.split-char')).toHaveCount(0);
      await context.close();
    });

    test('holds together at phone width', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto(home);

      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(page.locator('.timeline .stop').first()).toBeVisible();
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(overflow).toBe(false);
    });

    test('passes axe accessibility checks (no critical/serious violations)', async ({ page }) => {
      test.slow();
      await auditPage(page, home);
    });
  });

  test.describe(`the AI deep link (${locale})`, () => {
    test('serves the full AI prose on its own page', async ({ page }) => {
      await page.goto(ai);

      await expect(page.locator('html')).toHaveAttribute('lang', copy.htmlLang);
      await expect(page.getByRole('heading', { level: 1 })).toContainText(
        copy.ai.heading.slice(0, 16),
      );
      await expect(page.getByText(FINGERPRINT[locale])).toBeVisible();
    });

    test('keeps its own description under the truncation limit', async ({ page }) => {
      await page.goto(ai);
      const description = await page.locator('meta[name=description]').getAttribute('content');
      expect(description).toBe(copy.aiMeta.description);
      expect((description as string).length).toBeLessThan(155);
    });

    test('passes axe accessibility checks', async ({ page }) => {
      test.slow();
      await auditPage(page, ai);
    });
  });
}

test.describe('the language switcher', () => {
  test('crosses between the two home pages', async ({ page }) => {
    await page.goto('/');
    await page.locator('.lang').getByRole('link', { name: 'IT' }).click();
    await expect(page).toHaveURL(/\/it\/?$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'it');

    await page.locator('.lang').getByRole('link', { name: 'EN' }).click();
    await expect(page).toHaveURL(/localhost:\d+\/$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('stays on the AI page when crossing languages', async ({ page }) => {
    await page.goto('/ai');
    await page.locator('.lang').getByRole('link', { name: 'IT' }).click();
    await expect(page).toHaveURL(/\/it\/ai\/?$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'it');
  });

  test('marks the current language for assistive tech', async ({ page }) => {
    await page.goto('/it/');
    const current = page.locator('.lang a[aria-current="true"]');
    await expect(current).toHaveCount(1);
    await expect(current).toHaveText('IT');
  });
});
