// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify(),
  server: {
    port: 4321,
  },
  vite: {
    ssr: {
      noExternal: ['@astrojs/node'],
    },
  },
  redirects: {
    '/': '/en'
  },
});