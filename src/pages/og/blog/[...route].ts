import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const collectionPosts = (await getCollection('blog'));
const pages = Object.fromEntries(collectionPosts.map(({ slug, data }) => [slug + ".png", data]));

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages: pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.excerpt,
    logo: { path: './public/assets/og-logo.png', size: [350] },
    border: { width: 10, color: [242, 241, 236] },
    padding: 40,
    bgGradient: [[23, 23, 23]],
  }),
});
