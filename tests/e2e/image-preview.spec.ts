import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { getCopy, hrefFor } from '../../src/i18n';

for (const locale of ['it', 'en'] as const) {
  const copy = getCopy(locale);
  const shots = copy.projects.find((project) => project.name === 'Deepfield')?.gallery ?? [];
  for (const viewport of [
    { width: 1280, height: 900 },
    { width: 390, height: 844 },
  ]) {
    test(`image preview ${locale} at ${viewport.width}px stays in-page and is keyboard accessible`, async ({
      page,
    }) => {
      await page.setViewportSize(viewport);
      await page.emulateMedia({ reducedMotion: 'reduce' });
      let downloads = 0;
      let popups = 0;
      page.on('download', () => downloads++);
      page.on('popup', () => popups++);
      await page.goto(hrefFor(locale, 'home'));
      const url = page.url();
      const dialog = page.getByRole('dialog', { name: copy.imagePreview.title });
      for (const shot of shots) {
        const trigger = page.getByRole('button', { name: shot.label });
        await trigger.focus();
        await trigger.press('Enter');
        await expect(dialog).toBeVisible();
        await expect(dialog.locator('img')).toHaveAttribute('src', new URL(shot.src, url).href);
        await expect(dialog.locator('img')).toHaveAttribute('alt', shot.alt);
        await expect
          .poll(() => dialog.locator('img').evaluate((img: HTMLImageElement) => img.naturalWidth))
          .toBe(1600);
        await expect(page.locator('html')).toHaveCSS('overflow', 'hidden');
        const zoom = dialog.locator('[data-preview-zoom]');
        await zoom.click();
        await expect(zoom).toHaveAttribute('aria-pressed', 'true');
        await expect(dialog.locator('img')).toHaveCSS('width', '1600px');
        await dialog.getByRole('button', { name: copy.imagePreview.fit }).click();
        const bounds = await dialog.boundingBox();
        expect(bounds).not.toBeNull();
        expect(bounds?.x ?? -1).toBeGreaterThanOrEqual(0);
        expect(bounds?.width ?? Infinity).toBeLessThanOrEqual(viewport.width);
        await dialog.getByRole('button', { name: copy.imagePreview.close }).focus();
        await page.keyboard.press('Tab');
        expect(await dialog.evaluate((el) => el.contains(document.activeElement))).toBe(true);
        await page.keyboard.press('Escape');
        await expect(dialog).not.toBeVisible();
        await expect(trigger).toBeFocused();
        await expect(page.locator('html')).not.toHaveClass(/image-preview-open/);
      }
      const first = page.getByRole('button', { name: shots[0]?.label });
      await first.click();
      await expect(dialog).toBeVisible();
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(
        results.violations.filter((v) => v.impact === 'critical' || v.impact === 'serious'),
      ).toEqual([]);
      await dialog.getByRole('button', { name: copy.imagePreview.close }).click();
      await expect(first).toBeFocused();
      await first.click();
      await page.mouse.click(2, 2);
      await expect(dialog).not.toBeVisible();
      await expect(first).toBeFocused();
      expect(page.url()).toBe(url);
      expect(downloads).toBe(0);
      expect(popups).toBe(0);
    });
  }
  test(`screenshots remain visible without JavaScript (${locale})`, async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(hrefFor(locale, 'home'));
    for (const shot of shots) {
      const trigger = page.getByRole('button', { name: shot.label });
      await expect(trigger).toBeDisabled();
      await expect(trigger.locator('img')).toBeVisible();
    }
    await context.close();
  });
}
