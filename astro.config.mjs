// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.puriasthagina.id/landingmeta/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [vue()]
});