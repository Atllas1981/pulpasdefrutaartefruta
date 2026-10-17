// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://atllas1981.github.io',
  base: '/pulpasdefrutaartefruta',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()]
  }
});