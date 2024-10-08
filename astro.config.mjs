import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  output: 'hybrid',
  base: '/portfolio/',
  site: 'https://whoisdreamer.github.io/portfolio/',
  adapter: vercel()
});