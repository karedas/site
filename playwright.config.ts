import { defineConfig, devices } from '@playwright/test';

// A port of its own: v2's suite sits on 4323 and the dev servers on
// 4321/4322/4324, so parallel sessions never collide.
const PORT = 4325;
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // The footer runs a WebGL island; one Chromium per core starves the
  // rAF loops and simple assertions start timing out. Cap the fan-out.
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
    // Test the artifact that ships, not the on-demand dev compiler.
    command: `npm run build && npm run preview -- --host 127.0.0.1 --port ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
