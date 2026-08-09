/**
 * Regenerate public/og-image.png from the real hero.
 *
 * The social card is a 1200x630 shot of the live hero, so it goes stale the
 * moment the hero copy changes. Start the dev server, then:
 *
 *   node scripts/og-image.mjs
 */
import { chromium } from '@playwright/test';

const URL = process.env.OG_URL ?? 'http://localhost:4321';
const OUT = 'public/og-image.png';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

await page.goto(URL, { waitUntil: 'networkidle' });

// Reveal-on-scroll keeps [data-rv] blocks hidden until the observer fires.
await page.evaluate(() => {
  for (const el of document.querySelectorAll('[data-rv]')) el.classList.add('rv-in');
});

// The Astro dev toolbar floats over the bottom of the page in dev mode.
await page.addStyleTag({ content: 'astro-dev-toolbar { display: none !important; }' });

// Let the WebGL asteroid and the canvas waves settle into a usable frame.
await page.waitForTimeout(2500);

await page.screenshot({ path: OUT });
await browser.close();

// biome-ignore lint/suspicious/noConsole: this is a CLI script, stdout is the output
console.log(`wrote ${OUT} from ${URL}`);
