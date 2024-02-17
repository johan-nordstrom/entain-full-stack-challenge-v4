import { serial, pgTable, varchar } from 'drizzle-orm/pg-core';

export const movies = pgTable('movies', {
  id: serial('id').primaryKey(),
  genre: varchar('genre', { length: 100 }),
  backdrop_path: varchar('backdrop_path', { length: 100 }),
  poster_path: varchar('poster_path', { length: 100 }),
  title: varchar('title', { length: 100 }).unique(),
});