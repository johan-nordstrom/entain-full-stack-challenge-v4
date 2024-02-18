import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchMovieInfo } from "../../store/movie/movieActions";
import { RootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { Spinner } from "../../components/spinner";
import { Container } from "../../components/container";
import { Variants, motion } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

export const MovieInfo = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { movie, loading } = useSelector((state: RootState) => state.movie);
  const { id: movieID, type } = params;

  useEffect(() => {
    console.log('movieID', movieID);
    if (movieID) {
      dispatch(
        fetchMovieInfo({ id: Number(movieID) })
      );
    }
  }, [dispatch, movieID, type]);

  if (loading) {
    return <div className="mt-[50vh] flex items-center justify-center">
      <Spinner />
    </div>
  }

  return (
    <motion.main initial="hidden" animate="visible" exit="exit" transition={{ duration: 1 }} variants={variants}>
      {
        movie
        && <article>
          <div className="relative">
            <img src={movie.backdropPath} alt="movie" className="object-cover w-full h-[50vh]" />
            <div className="home_hero_overlay" />
          </div>
          <Container>
            <div className="flex gap-6 my-14">
              <img src={movie.posterPath} alt="movie poster"></img>
              <div>
                <h1 className="text-4xl font-medium">{movie.title}</h1>
                <div className="mt-5">
                  <b>Genre:</b>
                  <span key={movie.genre}> {movie.genre}</span>
                </div>
              </div>
            </div>
          </Container>
        </article>
      }
    </motion.main>
  )
}
