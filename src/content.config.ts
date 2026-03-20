import { defineCollection, z } from 'astro:content';

const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    module: z.string(),
    level: z.enum(['beginner', 'intermediate', 'advanced']),
    duration: z.string(),
    xp: z.number(),
    order: z.number(),
  }),
});

export const collections = { lessons };