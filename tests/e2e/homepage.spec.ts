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
  const cvPath = locale === 'it' ? '/andrea-lisi-cv-it.pdf' : '/andrea-lisi-cv.pdf';

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

    test('renders ways of working with headings and a clear opening sentence', async ({ page }) => {
      await page.goto(home);
      const blocks = page.locator('.approach .block');
      await expect(blocks).toHaveCount(copy.approach.length);

      for (const [i, block] of copy.approach.entries()) {
        const el = blocks.nth(i);
        await expect(el.getByRole('heading', { level: 3 })).toHaveText(block.title);
        // The lead opens the paragraph, and it is the only emphasis in it.
        await expect(el.locator('.block-body b')).toHaveCount(1);
      }

      // Three, because the fourth was about AI and section 02 now says all of
      // it at length. Saying it twice is the defect this page keeps growing.
      expect(copy.approach.length).toBe(3);
    });

    test('summarizes AI work and links to the detailed workflow', async ({ page }) => {
      await page.goto(home);

      await expect(page.locator('.ai-summary p')).toHaveText(copy.ai.summary);
      await expect(page.locator('.ai .rules')).toHaveCount(0);
      await page.locator('.ai').getByRole('link', { name: copy.ai.moreLabel }).click();
      await expect(page).toHaveURL(new RegExp(`${ai}/?$`));
      await expect(page.locator('.ai .prose .lede')).toHaveText(plain(copy.ai.paragraphs[0] ?? ''));
      // The home page itself must stay indexable.
      await expect(page.locator('meta[name=robots]')).toHaveCount(0);
    });

    test('shows the focused skills and personal projects', async ({ page }) => {
      await page.goto(home);

      await expect(page.locator('.focus .focus-group')).toHaveCount(copy.focus.length);
      await expect(page.locator('.focus').getByText('TypeScript', { exact: true })).toBeVisible();

      await expect(page.locator('.projects .project')).toHaveCount(copy.projects.length);
      await expect(page.locator('.projects').getByText('lockhound', { exact: true })).toBeVisible();
      await expect(page.locator('.projects code')).toHaveText('npx lockhound');
      for (const project of copy.projects) {
        if (project.href && project.linkLabel) {
          await expect(page.getByRole('link', { name: project.linkLabel })).toHaveAttribute(
            'href',
            project.href,
          );
        }
        for (const shot of project.gallery ?? []) {
          await expect(page.getByRole('button', { name: shot.label })).toHaveAttribute(
            'aria-controls',
            'project-image-preview',
          );
        }
      }
      const previews = page.locator('.project-preview img');
      await expect(previews).toHaveCount(3);
      for (const preview of await previews.all()) {
        await preview.scrollIntoViewIfNeeded();
        await expect(preview).toBeVisible();
        await expect
          .poll(() => preview.evaluate((img: HTMLImageElement) => img.naturalWidth))
          .toBeGreaterThan(0);
      }
      await expect(page.locator('a[href="https://github.com/karedas/deepfield"]')).toHaveCount(0);
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

    test('shows experience before projects and gives the current role scannable leads', async ({
      page,
    }) => {
      await page.goto(home);
      const sections = await page
        .locator('main > section')
        .evaluateAll((nodes) => nodes.map((node) => node.id));
      expect(sections.indexOf('experience')).toBeGreaterThan(sections.indexOf('top'));
      expect(sections.indexOf('experience')).toBeLessThan(sections.indexOf('projects'));
      await expect(page.locator('.work .job').first().locator('.duty b')).toHaveCount(4);
    });

    test('closes on an invitation and a labelled email action', async ({ page }) => {
      await page.goto(home);

      await expect(page.locator('.contact .invite')).toHaveText(copy.contact.invite);
      await expect(page.locator('.contact .invite-more')).toHaveText(copy.contact.inviteMore);
      // The address is a link, not printed text: no duplication with the icon.
      await expect(page.locator('.contact').getByText('lisandr84@gmail.com')).toHaveCount(0);
      await expect(
        page.locator('.contact').getByRole('link', { name: copy.contact.writeLabel }),
      ).toHaveAttribute('href', 'mailto:lisandr84@gmail.com');
    });

    test('links the CV download in the hero and in the contact block', async ({ page }) => {
      await page.goto(home);

      for (const scope of ['.hero', '.contact']) {
        const cv = page.locator(scope).getByRole('link', { name: copy.hero.buttons.cv });
        await expect(cv).toHaveAttribute('href', cvPath);
      }
    });

    test('serves the CV PDF and the portrait', async ({ request }) => {
      for (const asset of [cvPath, '/andrea-lisi.webp', '/andrea-lisi.jpg']) {
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
      for (const banned of [/quietly/i, /five thousand/i, /cinquemila/i, /RAG and embeddings/i]) {
        await expect(page.getByText(banned), String(banned)).toHaveCount(0);
      }
    });

    test('uses the official title and keeps employer detail out of the personal bio', async ({
      page,
    }) => {
      await page.goto(home);
      await expect(page.locator('.hero .tagline')).toHaveText('Senior Software Engineer.');
      await expect(page.locator('.hero')).not.toContainText(/Tricentis|Tosca Cloud|Staff Engineer/);
      await expect(page.locator('.work .job-title').first()).toContainText(
        'Senior Software Engineer',
      );
      await expect(page.locator('#examples')).toHaveCount(0);
      await expect(
        page
          .locator('.work')
          .getByText(/monorepo/i)
          .first(),
      ).toBeVisible();
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
      await expect(page.locator('.approach .block-title.tone-root')).toHaveCount(1);
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
      await expect(page.locator('.approach .block')).toHaveCount(copy.approach.length);
      await expect(page.locator('.focus .focus-group')).toHaveCount(copy.focus.length);
      await expect(page.locator('.work .job')).toHaveCount(copy.work.length);
      await expect(page.locator('.projects .project')).toHaveCount(copy.projects.length);
      await expect(page.locator('.contact .invite')).toBeVisible();

      await context.close();
    });

    test('has no loader and respects reduced motion', async ({ browser }) => {
      const context = await browser.newContext({ reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.goto(home);

      await expect(page.locator('.loader')).toHaveCount(0);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(page.locator('.work .pulse')).toHaveCSS('animation-name', 'none');

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
      const cv = await page.locator('.hero .cv').boundingBox();
      expect(cv).not.toBeNull();
      expect((cv?.y ?? 1000) + (cv?.height ?? 0)).toBeLessThanOrEqual(812);
    });

    test('passes axe accessibility checks (no critical/serious violations)', async ({ page }) => {
      test.slow();
      await auditPage(page, home);
    });
  });

  test.describe(`the AI deep link (${locale})`, () => {
    test('carries the detailed workflow on its own indexable page', async ({ page }) => {
      await page.goto(ai);

      await expect(page.locator('html')).toHaveAttribute('lang', copy.htmlLang);
      await expect(page.getByRole('heading', { level: 1 })).toContainText(copy.ai.heading);
      await expect(page.locator('.ai .rules > li')).toHaveCount(copy.ai.rules.length);
      await expect(page.locator('meta[name=robots]')).toHaveCount(0);
      await expect(page.locator('.ai .ai-summary')).toHaveCount(0);
      await expect(page.getByRole('link', { name: copy.ai.backLabel })).toHaveAttribute(
        'href',
        `${home}#ai`,
      );
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
