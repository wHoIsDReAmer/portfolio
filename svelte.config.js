import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isDev = process.env.NODE_ENV === 'development';

const defaultOptions = {
  compilerOptions: { dev: isDev, hydratable: true },
  preprocess: vitePreprocess(),
  vitePlugin: {
    emitCss: true,
  }
};

export default {
  ...defaultOptions,
};
