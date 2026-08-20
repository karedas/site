import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://andrea-lisi.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    // English stays at the root, Italian lives under /it/.
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    cacheDir: '.vite',
  },
});
