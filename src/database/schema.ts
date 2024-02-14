import { serial, pgTable, varchar, integer } from 'drizzle-orm/pg-core';
export const movies = pgTable('movies', {
    id: serial('id').primaryKey(),
    genre: varchar('genre', { length: 100 }),
    title: varchar('title', { length: 100 }).unique(),
  });