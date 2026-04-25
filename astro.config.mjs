import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://andrea-lisi.com',
  output: 'static',
  adapter: netlify({ edgeMiddleware: false }),
  integrations: [react()],
});
