import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '../node_modules/.pnpm/node_modules/playwright/index.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.resolve(__dirname, '..', 'public', 'og-image.png');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;800&family=JetBrains+Mono:wght@500&display=swap" />
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: 1200px; height: 630px; }
  body {
    background: radial-gradient(ellipse at 75% 30%, #1a1f3a 0%, #0a0c17 55%, #05060b 100%);
    color: #e8e3d4;
    font-family: "Montserrat", system-ui, sans-serif;
    position: relative;
    overflow: hidden;
  }
  .stars {
    position: absolute; inset: 0;
    background-image:
      radial-gradient(1px 1px at 12% 18%, rgba(232,227,212,.55), transparent 60%),
      radial-gradient(1px 1px at 22% 72%, rgba(232,227,212,.4), transparent 60%),
      radial-gradient(1px 1px at 38% 35%, rgba(232,227,212,.5), transparent 60%),
      radial-gradient(1px 1px at 47% 82%, rgba(232,227,212,.35), transparent 60%),
      radial-gradient(1px 1px at 58% 22%, rgba(232,227,212,.5), transparent 60%),
      radial-gradient(1px 1px at 68% 60%, rgba(232,227,212,.45), transparent 60%),
      radial-gradient(1.5px 1.5px at 8% 50%, rgba(245,210,122,.45), transparent 60%),
      radial-gradient(1.5px 1.5px at 90% 88%, rgba(63,184,214,.4), transparent 60%);
  }
  .frame {
    position: absolute; inset: 28px;
    border: 1px solid rgba(232,165,58,.18);
    border-radius: 8px;
  }
  .content {
    position: relative;
    height: 100%;
    padding: 80px 88px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top {
    display: flex; align-items: center; gap: 18px;
    font-family: "JetBrains Mono", ui-monospace, monospace;
    font-size: 18px;
    color: #b6ae98;
    letter-spacing: .14em;
    text-transform: uppercase;
  }
  .top .dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: #e8a13a;
    box-shadow: 0 0 12px rgba(232,165,58,.7);
  }
  .name {
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 132px;
    line-height: 1;
    letter-spacing: -.02em;
    background: linear-gradient(120deg, #f5d27a 0%, #e8a13a 35%, #7fc88c 70%, #3fb8d6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-top: 48px;
  }
  .subtitle {
    margin-top: 28px;
    font-weight: 300;
    font-size: 32px;
    line-height: 1.35;
    color: #e8e3d4;
    max-width: 700px;
    letter-spacing: -.005em;
  }
  .subtitle em {
    color: #e6c573; font-style: normal; font-weight: 500;
  }
  .bottom {
    display: flex; align-items: flex-end; justify-content: space-between;
  }
  .bottom .url {
    font-family: "JetBrains Mono", monospace;
    font-size: 22px;
    color: #b6ae98;
    letter-spacing: .04em;
  }
  .bottom .url span { color: #e6c573; }
  .planet {
    position: absolute;
    right: -90px;
    top: 110px;
    width: 440px;
    height: 440px;
    opacity: .92;
  }
</style>
</head>
<body>
  <div class="stars"></div>
  <div class="frame"></div>

  <svg class="planet" viewBox="0 0 64 64" fill="none">
    <ellipse cx="32" cy="34" rx="26" ry="9" transform="rotate(-22 32 34)" fill="none" stroke="url(#ringGrad)" stroke-width="1.4"/>
    <circle cx="32" cy="30" r="13" fill="url(#planetGrad)"/>
    <ellipse cx="32" cy="30" rx="12.5" ry="2" transform="rotate(-22 32 30)" fill="#0a0c17" opacity="0.18"/>
    <path d="M 9 39 Q 32 28 55 27" fill="none" stroke="url(#ringFront)" stroke-width="1.4" stroke-linecap="round"/>
    <defs>
      <radialGradient id="planetGrad" cx="35%" cy="32%" r="75%">
        <stop offset="0%" stop-color="#f5d27a"/>
        <stop offset="40%" stop-color="#e8a13a"/>
        <stop offset="75%" stop-color="#7fc88c"/>
        <stop offset="100%" stop-color="#3fb8d6"/>
      </radialGradient>
      <linearGradient id="ringGrad" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#e8a13a"/>
        <stop offset="50%" stop-color="#7fc88c"/>
        <stop offset="100%" stop-color="#3fb8d6"/>
      </linearGradient>
      <linearGradient id="ringFront" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#3fb8d6"/>
        <stop offset="50%" stop-color="#7fc88c"/>
        <stop offset="100%" stop-color="#e8a13a"/>
      </linearGradient>
    </defs>
  </svg>

  <div class="content">
    <div class="top">
      <span class="dot"></span>
      <span>Observed from Earth</span>
    </div>
    <div>
      <div class="name">Andrea Lisi</div>
      <div class="subtitle">
        Senior Software Engineer in Vienna.<br/>
        Twenty years of art merging into code.
      </div>
    </div>
    <div class="bottom">
      <div class="url"><span>~</span>/andrea-lisi.com</div>
    </div>
  </div>
</body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({
  path: outPath,
  type: 'png',
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});
await browser.close();
console.log('Wrote', outPath);
