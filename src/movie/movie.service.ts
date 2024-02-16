import {Inject} from '@nestjs/common';
import {movies} from '../database/schema';
import {Movie} from "./movie.model";
import MovieRepository from "./movie.repository";
import {MovieFilterType} from "./findMoviesDto";

export class MovieService {
  constructor(
      @Inject(MovieRepository) private movieRepository: MovieRepository,
  ) {}
 async getMovies(): Promise<Movie[]> {
     return await this.movieRepository.all();
  }
  async getMoviesByFilter(text: string, filterType: MovieFilterType): Promise<Movie[]> {
      if (text.trim() == "") {
        return await this.getMovies();
      }

      switch (filterType) {
          case MovieFilterType.Genre: {
              return await this.movieRepository.findMany(movies.genre, text);
          }
          case MovieFilterType.Title: {
              return await this.movieRepository.findMany(movies.title, text);
          }
      }
  }
}
