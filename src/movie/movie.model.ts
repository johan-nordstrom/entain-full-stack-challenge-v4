export class Movie {
    genre: string;
    title: string;
    posterPath: string;
    backdropPath: string;
    constructor(title: string, genre: string, posterPath: string, backdropPath: string) {
        this.genre = genre;
        this.title = title;
        this.posterPath = posterPath;
        this.backdropPath = backdropPath;
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