import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie, MovieFilterType } from "./movie.model";

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get("search/:text")
  async getMovies(@Param() params: any): Promise<Movie[]> {
    return await this.movieService.getMoviesByFilter(params.text, MovieFilterType.Title);
  }

  @Get(":id")
  async getById(@Param() params: any): Promise<Movie> {
    return await this.movieService.getMovieById(params.id);
  }

  @Get()
  async getAll(): Promise<Movie[]> {
    return await this.movieService.getMovies();
  }
}
