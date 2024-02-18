import { createSlice } from '@reduxjs/toolkit';
import { fetchMovieInfo, fetchTrendingMovies } from './movieActions';
import { Movie } from './interfaces';

interface InitialState {
  loading: boolean,
  error: string,
  movies: Movie[],
  movie: Partial<Movie>,
}

const initialState: InitialState = {
  loading: false,
  error: '',
  movies: [],
  movie: {},
}

const movieSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    clearMovies(state) {
      state.movies = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.movies = state.movies.concat(payload as Movie[]);
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || '';
      }),
      builder
        .addCase(fetchMovieInfo.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchMovieInfo.fulfilled, (state, { payload }) => {
          state.loading = false;
          state.movie = payload;
        })
        .addCase(fetchMovieInfo.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || '';
        })
  }
});

export const { clearMovies } = movieSlice.actions;
export default movieSlice.reducer;
