// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://henriquepires.com',
  output: 'static',
  integrations: [sitemap()],
  redirects: {
    '/media': '/about',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'min-light',
    },
  },
});
