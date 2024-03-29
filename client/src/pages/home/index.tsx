import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { fetchMovies } from "../../store/movie/movieActions";
import { Container } from "../../components/container";
import { Spinner } from "../../components/spinner";
import { MoviesList } from "./components/moviesList";
import { Variants, motion } from "framer-motion";
import { SearchBar } from "./components/searchBar";
import { clearMovies } from "../../store/movie/movieSlice";

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
}

export const Home = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [page] = useState(1);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const { loading, error, movies } = useSelector((state: RootState) => state.movie);

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      dispatch(clearMovies());
    } else {
      if (searchQuery && page <= 1) {
        dispatch(clearMovies());
      }

      dispatch(fetchMovies({ page: page, searchTerm: searchQuery }));
    }
  }, [dispatch, isInitialRender, page, searchQuery]);

  if (loading && isInitialRender) {
    return <div className="mt-[50vh] flex items-center justify-center">
      <Spinner />
    </div>
  }

  if (error) {
    return <p className="text-center mt-14 text-red-500">{error}</p>
  }

  return (
    <motion.main initial="hidden" animate="visible" exit="exit" transition={{ duration: 1 }} variants={variants}>
      <Container>
        <SearchBar setSearch={setSearchQuery} />
        <MoviesList
          movies={movies}
          loading={loading}
        />
      </Container>
    </motion.main>
  )
}
