import { useNavigate } from "react-router-dom"
import { Movie } from "../../store/movie/interfaces"

export const MovieCard = ({ movie, href }: { movie: Movie, href?: string }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (href) {
      navigate(href);
    }
  }

  return (
    <article className="rounded-lg overflow-hidden">
      <img
        src={`${movie.posterPath}`}
        alt="movie"
        className="rounded-xl hover:-translate-y-2 transition-transform object-cover cursor-pointer"
        onClick={handleCardClick}
      />
      <h5 className="pt-2 font-medium truncate">{movie.title}</h5>
    </article>
  )
}
