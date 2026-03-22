import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hugobepa.github.io/python-learning-app',
  base: '/python-learning-app/',
  integrations: [
    react(),
    mdx(),
    tailwind(),
    sitemap()
  ],
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
    syntaxHighlight: 'shiki',
  },
});