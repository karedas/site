import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';
import { getCopy, hrefFor, type Locale } from '../../src/i18n';

/**
 * Settle the reveal-on-scroll animation before scanning.
 *
 * [data-rv] blocks fade in over 0.7s. Caught mid-fade, axe measures the
 * half-blended colors (an accent button reads as #7b4025 instead of #e8703a)
 * and reports contrast failures that never exist once the page is at rest.
 */
async function settleReveal(page: Page): Promise<void> {
  await page.addStyleTag({ content: '*, *::before, *::after { transition: none !important; }' });
  await page.evaluate(() => {
    for (const el of document.querySelectorAll('[data-rv]')) el.classList.add('rv-in');
  });
}

/**
 * Audit a page at rest.
 *
 * Reduced motion stops the signal canvas and the WebGL asteroid loops. That
 * matters twice: the audit then reads the settled colors rather than a frame
 * mid-fade, and the scan stops competing with rAF for CPU, which used to time
 * the test out whenever the whole suite ran in parallel.
 */
async function auditPage(page: Page, url: string): Promise<void> {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(url);
  await page.waitForLoadState('networkidle');
  await settleReveal(page);

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
  en: 'Most of the value is in stopping',
  it: 'Gran parte del valore sta nel fermare',
};

for (const locale of ['en', 'it'] as const) {
  const copy = getCopy(locale);
  const home = hrefFor(locale, 'home');
  const ai = hrefFor(locale, 'ai');

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

    test('renders the hero and the four numbered sections in this language', async ({ page }) => {
      await page.goto(home);

      await expect(page.getByRole('heading', { level: 1 })).toContainText('Andrea');
      await expect(page.getByText(FINGERPRINT[locale])).toBeVisible();
      for (const key of ['approach', 'ai', 'experience', 'contact'] as const) {
        const { title } = copy.sections[key];
        await expect(
          page.getByRole('heading', { level: 2, name: new RegExp(title) }),
        ).toBeVisible();
      }
    });

    test('does not ship the removed sections or the flagged phrases', async ({ page }) => {
      await page.goto(home);

      await expect(page.locator('#skills')).toHaveCount(0);
      await expect(page.locator('#projects')).toHaveCount(0);
      await expect(page.locator('#off-duty')).toHaveCount(0);
      await expect(page.getByText(/quietly/i)).toHaveCount(0);
      await expect(page.getByText(/SYS NOMINAL/)).toHaveCount(0);
      await expect(page.getByText(/UPTIME/)).toHaveCount(0);
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

    test('renders all four experience entries in chronological order', async ({ page }) => {
      await page.goto(home);
      const companies = page.locator('#experience .company');
      await expect(companies).toHaveCount(4);
      for (const [i, entry] of copy.work.entries()) {
        await expect(companies.nth(i)).toContainText(entry.company);
      }
    });

    test('links the CV download in the hero and in the contact block', async ({ page }) => {
      await page.goto(home);

      const heroCv = page.locator('.hero').getByRole('link', { name: copy.hero.buttons.cv });
      await expect(heroCv).toHaveAttribute('href', '/andrea-lisi-cv.pdf');
      await expect(heroCv).toHaveAttribute('download', 'andrea-lisi-cv.pdf');

      const contactCv = page.locator('#contact').getByRole('link', { name: copy.contact.cv });
      await expect(contactCv).toHaveAttribute('href', '/andrea-lisi-cv.pdf');
    });

    test('keeps Instagram out of the primary link row', async ({ page }) => {
      await page.goto(home);

      await expect(page.locator('.hero').getByRole('link', { name: /instagram/i })).toHaveCount(0);
      await expect(
        page.locator('#contact .primary').getByRole('link', { name: /instagram/i }),
      ).toHaveCount(0);
      await expect(
        page.locator('#contact .secondary').getByRole('link', { name: /instagram/i }),
      ).toBeVisible();
    });

    test('shows the section label next to its number in the nav', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto(home);

      const rail = page.locator('nav.rail');
      for (const item of copy.nav.items) {
        await expect(rail.getByRole('link', { name: item.label, exact: true })).toBeVisible();
      }
    });

    test('renders content without JavaScript', async ({ browser }) => {
      const context = await browser.newContext({ javaScriptEnabled: false });
      const page = await context.newPage();
      await page.goto(home);

      await expect(page.getByRole('heading', { level: 1 })).toContainText('Andrea');
      await expect(page.getByText(FINGERPRINT[locale])).toBeVisible();
      await expect(page.locator('#experience .company').first()).toBeVisible();

      await context.close();
    });

    test('respects prefers-reduced-motion (content still visible)', async ({ browser }) => {
      const context = await browser.newContext({ reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.goto(home);
      await expect(page.getByRole('heading', { level: 1 })).toContainText('Andrea');
      await context.close();
    });

    test('switches to the bottom nav bar on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto(home);
      await expect(page.locator('nav.bottom-bar')).toBeVisible();
      await expect(page.locator('nav.rail')).toBeHidden();
      await expect(
        page.locator('nav.bottom-bar').getByRole('link', { name: 'AI', exact: true }),
      ).toBeVisible();
    });

    test('passes axe accessibility checks (no critical/serious violations)', async ({ page }) => {
      test.slow(); // a full axe scan is not a 30s job under a loaded machine
      await auditPage(page, home);
    });
  });

  test.describe(`the AI deep link (${locale})`, () => {
    test('is reachable from the home page and carries the same copy', async ({ page }) => {
      await page.goto(home);
      await page.getByRole('link', { name: new RegExp(copy.ai.permalinkSuffix) }).click();
      await expect(page).toHaveURL(new RegExp(`${ai}/?$`));

      await expect(page.getByRole('heading', { level: 1 })).toContainText(copy.sections.ai.title);
      await expect(page.getByText(FINGERPRINT[locale])).toBeVisible();
    });

    test('names the permalink so the accessible name starts with the visible text', async ({
      page,
    }) => {
      await page.goto(home);
      const permalink = page.locator('.permalink');
      await expect(permalink).toHaveText(ai);
      // WCAG 2.5.3: speech users say what they read.
      await expect(permalink).toHaveAttribute('aria-label', new RegExp(`^${ai},`));
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
