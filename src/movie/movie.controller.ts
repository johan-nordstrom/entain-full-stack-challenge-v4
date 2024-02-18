import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query, ValidationPipe } from '@nestjs/common';
import { MovieService } from './movie.service';
import { SearchMoviesDto, Movie, MovieFilterType } from "./movie.model";

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get("search/:text")
  async getMovies(@Param() params: any): Promise<Movie[]> {
    return await this.movieService.getMoviesByFilter(params.text, MovieFilterType.Title);
  }

  @Get()
  async getAll(): Promise<Movie[]> {
    return await this.movieService.getMovies();
  }

  @Get(":id")
  async getById(@Param() params: any): Promise<Movie> {
    return await this.movieService.getMovieById(params.id);
  }
}
