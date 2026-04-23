// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

/**
 * Set PUBLIC_SITE_URL in your host (e.g. Netlify / Cloudflare) to the canonical
 * production origin, no trailing slash — e.g. https://www.unrealtalent.com
 * Required for sitemap, canonical URLs, and absolute OG / JSON-LD URLs.
 */
const site = process.env.PUBLIC_SITE_URL;

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  integrations: site ? [sitemap()] : [],
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
  },
});