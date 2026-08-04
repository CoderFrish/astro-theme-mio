import {defineCollection} from "astro/content/config";
import { z } from 'astro/zod';
import {glob} from "astro/loaders";

const posts = defineCollection({
    loader: glob({ pattern: "**/*.{md, mdx}", base: "./content/_posts" }),
    schema: z.object({
        title: z.string(),
        permalink: z.string().optional(),
    })
})

export const collections = { posts }
