import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  getMovies(): string[] {
    return [];
  }
  getMoviesByTitle(title): string[] {
    return [title];
  }
  getMoviesByGenre(genres): string[] {
    return genres;
  }
}
