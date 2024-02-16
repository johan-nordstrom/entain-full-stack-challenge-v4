import {Movie} from "./movie.model";
import RepositoryInterface from "../database/repository.interface";
import {movies} from "../database/schema";
import {Inject, Injectable} from "@nestjs/common";
import {PostgresJsDatabase} from "drizzle-orm/postgres-js/index";
import * as schema from "../database/schema";
import {ilike, like} from "drizzle-orm";
import {PgColumn} from "drizzle-orm/pg-core";

@Injectable()
export default class MovieRepository implements RepositoryInterface<Movie> {
    constructor(
        @Inject('DB_DEV') private db: PostgresJsDatabase<typeof schema>
    ) {
    }
    async all(): Promise<Movie[]> {
        return await this.db.select({Title: movies.title, Genre: movies.genre }).from(movies).then();
    }
    async findMany(column: PgColumn, text: string): Promise<Movie[]> {
        // Format string to work with like statement
        text = `%${text}%`;
        return await this.db.select({Title: movies.title, Genre: movies.genre}).from(movies).where(ilike(column, text)).then(
            (movies) => {
                return movies;
            }
        );
    }
}