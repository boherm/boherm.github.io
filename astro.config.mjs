import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { rehypePrettyCode } from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import { remarkReadingTime } from './src/utils/reading-time.mjs';
import embeds from 'astro-embed/integration';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
    site: 'https://boherm.dev',
    devToolbar: {
        enabled: false,
    },
    integrations: [
        embeds(),
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    markdown: {
        syntaxHighlight: false,
        remarkPlugins: [remarkReadingTime],
        rehypePlugins: [
            [
                rehypePrettyCode,
                {
                    defaultLang: {
                        block: "plaintext",
                        inline: "plaintext",
                    },
                    keepBackground: false,
                    transformers: [
                        transformerCopyButton({
                            copyIcon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzdjN2M4NSIgZD0iTTE1LjI0IDJoLTMuODk0Yy0xLjc2NCAwLTMuMTYyIDAtNC4yNTUuMTQ4Yy0xLjEyNi4xNTItMi4wMzcuNDcyLTIuNzU1IDEuMTkzYy0uNzE5LjcyMS0xLjAzOCAxLjYzNi0xLjE4OSAyLjc2NkMzIDcuMjA1IDMgOC42MDggMyAxMC4zNzl2NS44MzhjMCAxLjUwOC45MiAyLjggMi4yMjcgMy4zNDJjLS4wNjctLjkxLS4wNjctMi4xODUtLjA2Ny0zLjI0N3YtNS4wMWMwLTEuMjgxIDAtMi4zODYuMTE4LTMuMjdjLjEyNy0uOTQ4LjQxMy0xLjg1NiAxLjE0Ny0yLjU5M2MuNzM0LS43MzcgMS42MzktMS4wMjQgMi41ODMtMS4xNTJjLjg4LS4xMTggMS45OC0uMTE4IDMuMjU3LS4xMThoMy4wN2MxLjI3NiAwIDIuMzc0IDAgMy4yNTUuMTE4QTMuNjAxIDMuNjAxIDAgMCAwIDE1LjI0IDIiLz48cGF0aCBmaWxsPSIjN2M3Yzg1IiBkPSJNNi42IDExLjM5N2MwLTIuNzI2IDAtNC4wODkuODQ0LTQuOTM2Yy44NDMtLjg0NyAyLjItLjg0NyA0LjkxNi0uODQ3aDIuODhjMi43MTUgMCA0LjA3MyAwIDQuOTE3Ljg0N2MuODQzLjg0Ny44NDMgMi4yMS44NDMgNC45MzZ2NC44MmMwIDIuNzI2IDAgNC4wODktLjg0MyA0LjkzNmMtLjg0NC44NDctMi4yMDIuODQ3LTQuOTE3Ljg0N2gtMi44OGMtMi43MTUgMC00LjA3MyAwLTQuOTE2LS44NDdjLS44NDQtLjg0Ny0uODQ0LTIuMjEtLjg0NC00LjkzNnoiLz48L3N2Zz4=',
                            visibility: 'always',
                            feedbackDuration: 2_500,
                        }),
                    ],
                },
            ],
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    behavior: 'prepend',
                    content: {
                        type: 'text',
                        value: '#',
                    },
                    headingProperties: {
                        className: ['anchor'],
                    },
                    properties: {
                        className: ['anchor-link'],
                    },
                },
            ]
        ],
    },
});
