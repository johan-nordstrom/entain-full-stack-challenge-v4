import { MovieCard } from "../../../components/movieCard/movieCard"
import { Movie } from "../../../store/movie/interfaces"

interface MoviesListProps {
  movies: Movie[],
  loading: boolean,
}

export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <div className="pt-14 pb-24">
      <section className="mt-0 gap-x-4 gap-y-10 grid xl:grid-cols-5 sm:grid-cols-3 md:grid-cols-4 xs:grid-cols-2 pb-14">
        {
          movies?.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} href={`/movie/${movie.id}`} />
            </div>
          ))
        }
      </section>
    </div>
  )
}
