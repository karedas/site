import { defineConfig, devices } from '@playwright/test';

// A port of its own: the suite must never quietly bind to, or reuse, the dev
// server a human has open on 4321.
const PORT = 4323;
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // Every page runs a WebGL loop and a canvas rAF loop. One Chromium per core
  // starves them all and simple assertions start timing out, so cap the fan-out.
  workers: process.env.CI ? 1 : 4,
  reporter: process.env.CI ? [['html', { open: 'never' }], ['github']] : 'list',

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    // Test the artifact that ships. The dev server compiles on demand, so the
    // first hit from each worker pays a Vite build and the suite measures the
    // bundler instead of the site.
    command: `npm run build && npm run preview -- --host 127.0.0.1 --port ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
