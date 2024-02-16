import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';
import {Movie} from "./movie";

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/')
  async getMovies(): Promise<Movie[]> {
    return await this.movieService.getMovies();
  }

  @Get('/:title')
  getMoviesByTitle(title: string): string[] {
    return this.movieService.getMoviesByTitle(title);
  }

  @Get('/:genre')
  getMoviesByGenres(genres: string[]): string[] {
    return this.movieService.getMoviesByGenre(genres);
  }
}
