import {Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query, ValidationPipe} from '@nestjs/common';
import { MovieService } from './movie.service';
import {Movie} from "./movie.model";
import {FindMoviesDto, MovieFilterType} from "./findMoviesDto";

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post("search")
  async getMovies(@Body(new ValidationPipe({transform: true})) body: FindMoviesDto): Promise<Movie[]> {
    if (body.filterType != MovieFilterType.Genre && body.filterType != MovieFilterType.Title) {
        throw new HttpException('Invalid filter type', HttpStatus.BAD_REQUEST);
    }
    return await this.movieService.getMoviesByFilter(body.text, body.filterType);
  }
  @Get()
  async getAll(): Promise<Movie[]> {
    return await this.movieService.getMovies();
  }
}
