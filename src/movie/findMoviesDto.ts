export enum MovieFilterType {
    Title = 'title',
    Genre = 'genre'
}
export class FindMoviesDto {
    text: string;
    filterType: MovieFilterType;
}