import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://andrea-lisi.com',
  output: 'static',
  integrations: [react()],
  vite: {
    cacheDir: '.vite',
  },
});
