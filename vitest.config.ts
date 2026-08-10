import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    /* Nothing here touches the DOM: the components are Astro, so their
       behaviour is covered end to end in a real browser instead. What is left
       to unit test is the copy dictionary, which is plain data. */
    environment: 'node',
    globals: true,
    include: ['tests/unit/**/*.test.ts'],
    css: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/i18n/**/*.ts'],
      exclude: ['**/*.test.ts'],
    },
  },
});
