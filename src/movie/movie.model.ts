export class Movie {
    Genre: string;
    Title: string;
    PosterPath: string;
    BackdropPath: string;
    constructor(title: string, genre: string, posterPath: string, backdropPath: string) {
        this.Genre = genre;
        this.Title = title;
        this.PosterPath = posterPath;
        this.BackdropPath = backdropPath;
    }
}

export enum MovieFilterType {
    Title = 'title',
    Genre = 'genre'
}

export class SearchMoviesDto {
    text: string;
    filterType: MovieFilterType;
}