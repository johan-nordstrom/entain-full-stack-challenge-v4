import { Movie } from "./movie.model";
import RepositoryInterface from "../database/repository.interface";
import escapeString from 'escape-sql-string'
import { movies } from "../database/schema";
import { Inject, Injectable } from "@nestjs/common";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js/index";
import * as schema from "../database/schema";
import { ilike, eq } from "drizzle-orm";
import { PgColumn } from "drizzle-orm/pg-core";

@Injectable()
export default class MovieRepository implements RepositoryInterface<Movie> {
    constructor(
        @Inject('DB_DEV') private db: PostgresJsDatabase<typeof schema>
    ) {
    }
    
    async all(): Promise<Movie[]> {
        return await this.db.select({
            id: movies.id,
            title: movies.title,
            genre: movies.genre,
            posterPath: movies.poster_path,
            backdropPath: movies.backdrop_path,
        }).from(movies);
    }

    async findMany(column: PgColumn, text: string): Promise<Movie[]> {
        return await this.db.select({
            id: movies.id,
            title: movies.title,
            genre: movies.genre,
            posterPath: movies.poster_path,
            backdropPath: movies.backdrop_path,
        }).
            from(movies).
            where(ilike(column, `%${escapeString(text)}%`));
    }

    async findById(id: number): Promise<Movie> {
        return await this.db.select({
            id: movies.id,
            title: movies.title,
            genre: movies.genre,
            posterPath: movies.poster_path,
            backdropPath: movies.backdrop_path,
        }).from(movies).where(eq(movies.id, id)).then((movies) => {
            return movies[0];
        });
    }
}