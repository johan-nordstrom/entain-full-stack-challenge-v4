import { Controller, Get } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller()
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('/movies')
  getMovies(): string[] {
    return this.movieService.getMovies();
  }

  @Get('/movies/:title')
  getMoviesByTitle(title: string): string[] {
    return this.movieService.getMoviesByTitle(title);
  }

  @Get('/movies/:genre')
  getMoviesByGenres(genres: string[]): string[] {
    return this.movieService.getMoviesByGenre(genres);
  }
}
