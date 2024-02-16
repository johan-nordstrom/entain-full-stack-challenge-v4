export class Movie {
    Genre: string;
    Title: string;
    constructor(title :string, genre :string) {
        this.Genre = genre;
        this.Title = title;
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