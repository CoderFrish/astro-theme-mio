import {defineCollection} from "astro/content/config";
import { z } from 'astro/zod';
import {glob} from "astro/loaders";

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content/_posts" }),
    schema: z.object({
        title: z.string(),
        permalink: z.string().optional(),
    })
})

const spec = defineCollection({
    loader: glob({ pattern: '*.md', base: "./content" }),
    schema: z.object({})
});

export const collections = { posts, spec }
