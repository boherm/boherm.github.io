import { defineCollection, z } from 'astro:content';

const seoSchema = z.object({
    title: z.string().min(5).max(120).optional(),
    description: z.string().min(15).max(160).optional(),
    image: z
        .object({
            src: z.string(),
            alt: z.string().optional()
        })
        .optional(),
    pageType: z.enum(['website', 'article']).default('website')
});

const blog = defineCollection({
    schema: z.object({
        draft: z.boolean().default(false),
        title: z.string(),
        excerpt: z.string().optional(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string()).default([]),
        seo: seoSchema.optional(),
        serie: z.object({
                id: z.string(),
                part: z.number().min(1),
            })
            .optional(),
    })
});

const pages = defineCollection({
    schema: z.object({
        draft: z.boolean().default(false),
        title: z.string(),
        seo: seoSchema.optional()
    })
});

const projects = defineCollection({
    schema: z.object({
        draft: z.boolean().default(false),
        title: z.string(),
        description: z.string().optional(),
        publishDate: z.coerce.date(),
        seo: seoSchema.optional()
    })
});

const series = defineCollection({
    schema: z.object({
        draft: z.boolean().default(false),
        title: z.string(),
        description: z.string().optional(),
        publishDate: z.coerce.date(),
        image: z
            .object({
                src: z.string(),
                alt: z.string().optional()
            })
            .optional(),
    })
});
export const collections = { blog, pages, projects, series };
