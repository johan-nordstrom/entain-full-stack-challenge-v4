import { Movie } from "./movie.model";
import RepositoryInterface from "../database/repository.interface";
import { movies } from "../database/schema";
import { Inject, Injectable } from "@nestjs/common";
import { PostgresJsDatabase } from "drizzle-orm/postgres-js/index";
import * as schema from "../database/schema";
import { ilike, like } from "drizzle-orm";
import { PgColumn } from "drizzle-orm/pg-core";

@Injectable()
export default class MovieRepository implements RepositoryInterface<Movie> {
    constructor(
        @Inject('DB_DEV') private db: PostgresJsDatabase<typeof schema>
    ) {
    }
    async all(): Promise<Movie[]> {
        return await this.db.select({
            title: movies.title,
            genre: movies.genre,
            posterPath: movies.poster_path,
            backdropPath: movies.backdrop_path,
        }).
            from(movies).
            then((movies) => {
                return movies;
            });
    }
    async findMany(column: PgColumn, text: string): Promise<Movie[]> {
        // Format string to work with like statement
        text = `%${text}%`;

        return await this.db.select({
            title: movies.title,
            genre: movies.genre,
            posterPath: movies.poster_path,
            backdropPath: movies.backdrop_path,
        }).
            from(movies).
            where(ilike(column, text)).
            then((movies) => {
                return movies;
            });
    }
}