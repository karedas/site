/**
 * Regenerate public/og-image.png from the real hero.
 *
 * The social card is a 1200x630 shot of the live hero, so it goes stale the
 * moment the hero changes. Serve the site, then:
 *
 *   node scripts/og-image.mjs
 *
 * Point it at a production build to keep the Astro dev toolbar out of frame:
 *
 *   OG_URL=http://localhost:4399 node scripts/og-image.mjs
 */
import { chromium } from '@playwright/test';

const URL = process.env.OG_URL ?? 'http://localhost:4321';
const OUT = 'public/og-image.png';

const browser = await chromium.launch();

/*
 * Reduced motion does the whole job for us: it drops the loader overlay and
 * settles every entrance animation, so the shot lands on final colours instead
 * of a frame mid-fade.
 */
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  reducedMotion: 'reduce',
});

await page.goto(URL, { waitUntil: 'networkidle' });

// The card is mostly type: without this the shot can catch the fallback face.
await page.evaluate(() => document.fonts.ready);

// Dev mode floats the toolbar over the bottom of the page.
await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });

await page.screenshot({ path: OUT });
await browser.close();

// biome-ignore lint/suspicious/noConsole: this is a CLI script, stdout is the output
console.log(`wrote ${OUT} from ${URL}`);
