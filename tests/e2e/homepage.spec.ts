import AxeBuilder from '@axe-core/playwright';
import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';
import { getCopy, hrefFor } from '../../src/i18n';

/** Strip the inline <b> emphasis so copy can be matched as plain text. */
const plain = (html: string): string => html.replace(/<[^>]+>/g, '');

/**
 * Audit a page at rest. Reduced motion removes the loader and settles every
 * entrance, so axe reads final colours instead of a frame mid-fade, and the
 * scan never competes with animation for CPU.
 */
async function auditPage(page: Page, url: string): Promise<void> {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(url);
  await page.waitForLoadState('networkidle');

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  const serious = results.violations.filter(
    (v) => v.impact === 'critical' || v.impact === 'serious',
  );
  expect(serious, JSON.stringify(serious, null, 2)).toEqual([]);
}

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

    test('opens with the greeting, the name and the tagline', async ({ page }) => {
      await page.goto(home);

      await expect(page.getByText(copy.hero.greeting)).toBeVisible();
      await expect(page.getByRole('heading', { level: 1 })).toHaveText('Andrea Lisi.');
      await expect(page.getByText(copy.hero.tagline)).toBeVisible();
      await expect(page.getByText(copy.hero.intro)).toBeVisible();
    });

    test('shows the portrait, served as WebP with a JPEG fallback', async ({ page }) => {
      await page.goto(home);
      const img = page.locator('.hero .portrait img');
      await expect(img).toBeVisible();
      await expect(img).toHaveAttribute('alt', 'Andrea Lisi');
      await expect(page.locator('.hero .portrait source')).toHaveAttribute('type', 'image/webp');
      // The decoded image is the real file, not a broken placeholder.
      expect(await img.evaluate((el: HTMLImageElement) => el.naturalWidth)).toBeGreaterThan(0);
    });

    test('lists the four facts', async ({ page }) => {
      await page.goto(home);
      for (const stat of copy.hero.stats) {
        await expect(page.locator('.hero .facts').getByText(stat.value)).toBeVisible();
      }
    });

    test('renders all six ways-of-working blocks', async ({ page }) => {
      await page.goto(home);
      const titles = page.locator('.approach .block-title');
      await expect(titles).toHaveCount(copy.approach.length);
      for (const [i, block] of copy.approach.entries()) {
        // The title carries a decorative tick before the words.
        await expect(titles.nth(i)).toContainText(plain(block.title));
      }
    });

    test('sets the AI section apart as the one enclosed block', async ({ page }) => {
      await page.goto(home);

      await expect(page.locator('.ai .prose p')).toHaveCount(copy.ai.paragraphs.length);
      await expect(page.locator('.ai .prose .lede')).toContainText(
        plain(copy.ai.paragraphs[0] ?? '').slice(0, 40),
      );
      await expect(page.locator('.ai .plate .eyebrow')).toHaveText(copy.sections.ai.eyebrow);

      // Being the only enclosed surface is what distinguishes it, so a second
      // one appearing anywhere would take that away.
      await expect(page.locator('.plate')).toHaveCount(1);
      // The home page itself must stay indexable.
      await expect(page.locator('meta[name=robots]')).toHaveCount(0);
    });

    test('lists four jobs, each with bullets and chips', async ({ page }) => {
      await page.goto(home);

      const jobs = page.locator('.work .job');
      await expect(jobs).toHaveCount(copy.work.length);

      for (const [i, job] of copy.work.entries()) {
        const card = jobs.nth(i);
        await expect(card.locator('.job-title')).toContainText(job.company);
        await expect(card.locator('.years')).toHaveText(job.years);
        await expect(card.locator('.duty')).toHaveCount(job.paragraphs.length);
        await expect(card.locator('.chip')).toHaveCount(job.tags.length);
      }
    });

    test('closes on an invitation, with the address behind the mail icon', async ({ page }) => {
      await page.goto(home);

      await expect(page.locator('.contact .invite')).toHaveText(copy.contact.invite);
      await expect(page.locator('.contact .invite-more')).toHaveText(copy.contact.inviteMore);
      // The address is a link, not printed text: no duplication with the icon.
      await expect(page.locator('.contact').getByText('lisandr84@gmail.com')).toHaveCount(0);
      await expect(
        page.locator('.contact').getByRole('link', { name: copy.contact.email }),
      ).toHaveAttribute('href', 'mailto:lisandr84@gmail.com');
    });

    test('links the CV download in the hero and in the contact block', async ({ page }) => {
      await page.goto(home);

      for (const scope of ['.hero', '.contact']) {
        const cv = page.locator(scope).getByRole('link', { name: copy.hero.buttons.cv });
        await expect(cv).toHaveAttribute('href', '/andrea-lisi-cv.pdf');
      }
    });

    test('serves the CV PDF and the portrait', async ({ request }) => {
      for (const asset of ['/andrea-lisi-cv.pdf', '/andrea-lisi.webp', '/andrea-lisi.jpg']) {
        expect((await request.get(asset)).status(), asset).toBe(200);
      }
    });

    test('keeps Instagram out of the hero', async ({ page }) => {
      await page.goto(home);
      await expect(page.locator('.hero').getByRole('link', { name: /instagram/i })).toHaveCount(0);
      await expect(
        page.locator('.contact').getByRole('link', { name: copy.contact.instagram }),
      ).toBeVisible();
    });

    test('does not ship the retired copy', async ({ page }) => {
      await page.goto(home);
      for (const banned of [
        /quietly/i,
        /TypeScript/,
        /five thousand/i,
        /cinquemila/i,
        /RAG and embeddings/i,
      ]) {
        await expect(page.getByText(banned), String(banned)).toHaveCount(0);
      }
    });

    /*
     * The architecture is named once, as the thing he governs. In the work
     * history that is evidence of scale. In the hero or in how-I-work it would
     * read as the only thing he does, which is why it was cut the first time.
     * The rule was never the word, it was the position.
     */
    test('names the architecture as evidence, never as a label', async ({ page }) => {
      await page.goto(home);
      const architecture = /micro-?frontend|monorepo/i;

      await expect(page.locator('.hero').getByText(architecture)).toHaveCount(0);
      await expect(page.locator('.approach').getByText(architecture)).toHaveCount(0);
      await expect(page.locator('.work').getByText(architecture).first()).toBeVisible();
    });

    test('spends its three colours only where each one means something', async ({ page }) => {
      await page.goto(home);

      // Gold: the present. The focus fact, the badge, and that role's dates.
      await expect(page.locator('.hero .fact-v.tone-now')).toHaveCount(1);
      await expect(page.locator('.work .now')).toHaveCount(1);
      await expect(page.locator('.work .years.live')).toHaveCount(1);
      await expect(page.locator('.work .job').first().locator('.years.live')).toBeVisible();

      // Lilac: the art foundation. The school, the block about drawing, the
      // job where the drawing was the job.
      await expect(page.locator('.hero .fact-v.tone-root')).toHaveCount(1);
      await expect(page.locator('.approach .tick.tone-root')).toHaveCount(1);
      await expect(page.locator('.work .chip.root')).toHaveCount(1);

      const tones = await page.evaluate(() => {
        const s = getComputedStyle(document.documentElement);
        return ['--acc', '--now', '--root'].map((n) => s.getPropertyValue(n).trim());
      });
      expect(tones.every(Boolean)).toBe(true);
      expect(new Set(tones).size).toBe(3);
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

    test('renders every block without JavaScript', async ({ browser }) => {
      const context = await browser.newContext({ javaScriptEnabled: false });
      const page = await context.newPage();
      await page.goto(home);

      await expect(page.getByRole('heading', { level: 1 })).toHaveText('Andrea Lisi.');
      await expect(page.locator('.approach .block-title')).toHaveCount(copy.approach.length);
      await expect(page.locator('.work .job')).toHaveCount(copy.work.length);
      await expect(page.locator('.contact .invite')).toBeVisible();

      await context.close();
    });

    test('drops the loader under prefers-reduced-motion', async ({ browser }) => {
      const context = await browser.newContext({ reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.goto(home);

      await expect(page.locator('.loader')).toBeHidden();
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

      await context.close();
    });

    test('holds together at phone width', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.goto(home);

      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      const overflows = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 1,
      );
      expect(overflows).toBe(false);
    });

    test('passes axe accessibility checks (no critical/serious violations)', async ({ page }) => {
      test.slow();
      await auditPage(page, home);
    });
  });

  test.describe(`the AI deep link (${locale})`, () => {
    test('carries the same prose on its own page', async ({ page }) => {
      await page.goto(ai);

      await expect(page.locator('html')).toHaveAttribute('lang', copy.htmlLang);
      await expect(page.getByRole('heading', { level: 1 })).toContainText(copy.ai.heading);
      await expect(page.locator('.ai .prose p')).toHaveCount(copy.ai.paragraphs.length);
      // Word for word the home section, so it stays out of the index and exists
      // only as a URL that can be handed to someone.
      await expect(page.locator('meta[name=robots]')).toHaveAttribute('content', /noindex/);
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
