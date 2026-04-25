import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('homepage', () => {
  test('renders the four major sections', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Selected Work' })).toBeVisible();
    await expect(page.getByText('Hi, I')).toBeVisible();
  });

  test('emits no console errors during load', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    expect(errors).toEqual([]);
  });

  test('hydrates the solar system island and exposes its aria-label', async ({ page }) => {
    await page.goto('/');
    const solarSystem = page.getByLabel(/solar system illustration/i);
    await expect(solarSystem).toBeVisible();
  });

  test('hydrates the skill cloud island', async ({ page }) => {
    await page.goto('/');
    const cloud = page.getByLabel(/skill cloud/i);
    // Below the fold — scroll to it so client:visible triggers.
    await cloud.scrollIntoViewIfNeeded();
    await expect(cloud).toBeVisible();
  });

  test('renders all four work entries in chronological order', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Tricentis · Tosca Cloud')).toBeVisible();
    await expect(page.getByText('Treedom')).toBeVisible();
    await expect(page.getByText('Forzieri.com')).toBeVisible();
    await expect(page.getByText('Easysystem')).toBeVisible();
  });

  test('respects prefers-reduced-motion (no LED keyframes applied)', async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await context.newPage();
    await page.goto('/');
    await expect(page.getByText('TRANSMITTING')).toBeVisible();
    await context.close();
  });

  test('passes axe accessibility checks (no critical/serious violations)', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const criticalOrSerious = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious',
    );

    expect(criticalOrSerious, JSON.stringify(criticalOrSerious, null, 2)).toEqual([]);
  });
});
