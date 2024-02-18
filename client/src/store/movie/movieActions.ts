import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../utils/axiosClient";
import { IMAGE_BASE_URL } from "../../data/endpoints";
import { Movie } from "./interfaces";

export const fetchTrendingMovies = createAsyncThunk('/movies/list', async (
  { searchTerm = "" }: { page: number, searchTerm?: string }, { rejectWithValue }
) => {
  try {
    const response = await axiosClient.get(
      searchTerm
        ? `/movies/search/${searchTerm}`
        : `/movies`
    );

    const movies = response.data.map((movie: Movie) => ({
      ...movie,
      backdropPath: movie.backdropPath ? IMAGE_BASE_URL + "/w1280" + movie.backdropPath : null,
      posterPath: movie.posterPath ? IMAGE_BASE_URL + "/w342" + movie.posterPath : null,
      title: movie.title
    }));

    return movies as Movie[];
  } catch (error) {
    console.log('error', error);
    return rejectWithValue(error);
  }
});

export const fetchMovieInfo = createAsyncThunk('/movie/info', async (
  { id = 0 }: { id: number }, { rejectWithValue }
) => {
  try {
    const response = await axiosClient.get(`/movies/${id}`);

    const movieInfo = {
      ...response.data,
      backdropPath: response.data.backdropPath ? IMAGE_BASE_URL + "/w1280" + response.data.backdropPath : null,
      posterPath: response.data.posterPath ? IMAGE_BASE_URL + "/w342" + response.data.posterPath : null,
      title: response.data.title
    };

    return movieInfo as Movie;
  } catch (error) {
    console.log('error', error);
    return rejectWithValue(error);
  }
});