import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://andrea-lisi.com',
  output: 'static',
  adapter: netlify({ edgeMiddleware: false }),
  integrations: [react()],
  vite: {
    css: {
      transformer: 'lightningcss',
    },
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
