import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
      /* 这里关闭开发工具栏 */
      enabled: false
  },

  vite: {
      plugins: [tailwindcss()]
  },

  integrations: [icon()]
});