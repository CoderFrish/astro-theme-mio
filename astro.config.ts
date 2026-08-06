import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'astro/config';

import {unified} from "@astrojs/markdown-remark";
import icon from 'astro-icon';

import description from 'astro-remark-description'
import reading_stats from '@jcayzac/astro-rehype-frontmatter-reading-stats'

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        /* 这里关闭开发工具栏 */
        enabled: false
    },

    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [icon()],
    server: {
        host: '0.0.0.0',
        port: 8080
    },

    markdown: {
        processor: unified({
            remarkPlugins: [
                [description, {
                    name: "excerpt"
                }],

            ],
            rehypePlugins: [
                reading_stats
            ]
        })
    }
});
