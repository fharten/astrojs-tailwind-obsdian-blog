import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blogposts' }),
  schema: z.object({
    title: z.string(),
    titleAppend: z.string().optional(),
    author: z.string(),
    slug: z.string(),
    editorsChoice: z.boolean().optional(),
    hero: z.boolean().optional(),
    category: z.string(),
    categoryLink: z.string(),
    description: z.string(),
    image: z.object({ url: z.string(), alt: z.string() }),
    pubDate: z.coerce.date(),
  }),
});

const why = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleAppend: z.string().optional(),
    image: z.object({ url: z.string(), alt: z.string() }),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { blog };
