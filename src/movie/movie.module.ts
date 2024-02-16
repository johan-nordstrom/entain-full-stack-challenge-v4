import {Module} from "@nestjs/common";
import {MovieController} from "./movie.controller";
import {MovieService} from "./movie.service";
import MovieRepository from "./movie.repository";

@Module({
    controllers: [MovieController],
    providers: [MovieService, MovieRepository]
})
export class MovieModule {
}