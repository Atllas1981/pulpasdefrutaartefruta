// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://atllas1981.github.io',
  base: '/pulpasdefrutaartefruta',
  trailingSlash: 'ignore',

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Emit per-component CSS chunks — reduces initial CSS payload
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // Separate heavy animation libs into their own async chunk.
          // These are loaded via dynamic import() so they don't block FCP.
          // NOTE: Rolldown (Astro 7) requires manualChunks as a function, not an object.
          manualChunks(id) {
            if (id.includes('lenis') || id.includes('gsap')) {
              return 'vendor-smooth-scroll';
            }
          },
        },
      },
    },
  },
});