import {defineCollection} from "astro/content/config";
import { z } from 'astro/zod';
import {glob} from "astro/loaders";

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content/posts" }),
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()).default([]),
        category: z.string().optional(),
        date: z.date(),
        cover: z.string().optional()
    })
})

const spec = defineCollection({
    loader: glob({ pattern: '*.md', base: "./content" }),
    schema: z.object({})
});

export const collections = { posts, spec }
