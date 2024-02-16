import {Inject, Injectable} from '@nestjs/common';
import {PostgresJsDatabase} from "drizzle-orm/postgres-js";
import * as schema from '../database/schema';
import {movies} from '../database/schema';
import {Movie} from "../models/movie";

@Injectable()
export class MovieService {
  constructor(
      @Inject('DB_DEV') private db: PostgresJsDatabase<typeof schema>,
  ) {}
 async getMovies(): Promise<Movie[]> {
    return await this.db.select().from(movies).then((movs) => {
        return movs.map((mov) => {
            return new Movie(mov.title, mov.genre);
        });
    });
  }
  getMoviesByTitle(title): string[] {
    return [title];
  }
  getMoviesByGenre(genres): string[] {
    return genres;
  }
}
