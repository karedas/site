import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.describe('homepage', () => {
  test('renders the hero and the five numbered sections', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Andrea');
    await expect(page.getByRole('heading', { name: /About/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Skill matrix/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Selected work/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Personal projects/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Off-orbit/ })).toBeVisible();
  });

  test('shows the mission-console status bar', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('SYS NOMINAL')).toBeVisible();
    await expect(page.getByText('UPTIME: 18+ YRS')).toBeVisible();
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

  test('hydrates the hero canvas island', async ({ page }) => {
    await page.goto('/');
    const canvas = page.getByTestId('signal-canvas');
    await expect(canvas).toBeVisible();
  });

  test('hydrates the three.js asteroid island on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const host = page.getByTestId('asteroid');
    // The island mounts a WebGL canvas inside its host.
    await expect(host.locator('canvas')).toHaveCount(1);
  });

  test('animates the skill matrix into view', async ({ page }) => {
    await page.goto('/');
    const legend = page.getByTestId('skill-legend');
    await legend.scrollIntoViewIfNeeded();
    await expect(legend).toBeVisible();
    await expect(legend).toContainText('76 EXPERT');
    await expect(legend).toContainText('42 SOLID');
    await expect(legend).toContainText('19 FAMILIAR');
  });

  test('renders all four work entries in chronological order', async ({ page }) => {
    await page.goto('/');
    const companies = page.locator('#work .company');
    await expect(companies).toHaveCount(4);
    await expect(companies.nth(0)).toContainText('Tricentis · Tosca Cloud');
    await expect(companies.nth(1)).toContainText('Treedom');
    await expect(companies.nth(2)).toContainText('Forzieri.com');
    await expect(companies.nth(3)).toContainText('Easysystem');
  });

  test('links the CV download button to the PDF', async ({ page }) => {
    await page.goto('/');
    const cv = page.getByRole('link', { name: /CV\.PDF/ });
    await expect(cv).toHaveAttribute('href', '/andrea-lisi-cv.pdf');
    await expect(cv).toHaveAttribute('download', 'andrea-lisi-cv.pdf');
  });

  test('respects prefers-reduced-motion (content still visible)', async ({ browser }) => {
    const context = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await context.newPage();
    await page.goto('/');
    await expect(page.getByText('SYS NOMINAL')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Andrea');
    await context.close();
  });

  test('switches to the bottom nav bar on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await expect(page.locator('nav.bottom-bar')).toBeVisible();
    await expect(page.locator('nav.rail')).toBeHidden();
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
