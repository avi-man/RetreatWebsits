// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
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