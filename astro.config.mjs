// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import icon from 'astro-icon';

// astro.config.mjs がある場所を基点にして SCSS パーシャルのパスを絶対化
const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const sassPath = path.resolve(projectRoot, 'src/assets/sass');

// https://astro.build/config
export default defineConfig({
  site: 'https://ptbio.io/',
  base: '/',
  integrations: [icon()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "_base" as base;
            @use "_font" as font;
            @use "_mixin" as mixin;
            @use "_reset" as reset;
            @use "_variables" as vars;
          `,
          loadPaths: [sassPath],
        }
      }
    }
  },
  devToolbar: {
    enabled: false,
  },
});
