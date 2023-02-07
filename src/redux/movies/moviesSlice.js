import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";
import request from '../../services/request'
const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    topMovies: [],
    recommendedMovies: [],
    filterMovies: [],
    detailMovie: {}
  },
  reducers: {
    clearDetailMovie: (state) => {
      state.detailMovie = [];
    },
    cleanFilterMovies: (state) => {
      state.filterMovies = [];
    }
  },
  extraReducers: (builder) => {
    builder

      .addCase(getTopMoviesAsync.fulfilled, (state, action) => {
        state.topMovies = action.payload
      })
      .addCase(getRecommendedMoviesAsync.fulfilled, (state, action) => {
        state.recommendedMovies = action.payload
      })
      .addCase(getFilterMoviesAsync.fulfilled, (state, action) => {
        state.filterMovies = action.payload
      })
      .addCase(getDetailMovieAsync.fulfilled, (state, action) => {
        state.detailMovie = action.payload
      })
  },
})


export const getTopMoviesAsync = createAsyncThunk(
  'getTopMovies',
  async () => {
    const response = await request.getEncoded('movie/top_rated')
    if (response) {
      return response ?? []
    } else {
      throw 'Error fetching';
    }
  },
);

export const getRecommendedMoviesAsync = createAsyncThunk(
  'getRecommendedMovies',
  async () => {
    const response = await request.getEncoded('movie/popular')
    if (response) {
      return response ?? []
    } else {
      throw 'Error fetching';
    }
  },
);

export const getFilterMoviesAsync = createAsyncThunk(
  'getFilterMovies',
  async (searchObj = {}) => {
    const response = await request.getEncoded('search/movie', searchObj)
    if (response) {
      return response ?? []
    } else {
      throw 'Error fetching';
    }
  },
);

export const getDetailMovieAsync = createAsyncThunk(
  'getDetailMovie',
  async (movie_id) => {
    console.log("URL",`movie/${movie_id}`)
    const response = await request.getEncoded(`movie/${movie_id}`)
    if (response) {
      return response ?? []
    } else {
      throw 'Error fetching';
    }
  },
);
export const { clearDetailMovie,cleanFilterMovies } = moviesSlice.actions;
export const stateSelector = state => state.moviesSlice
export default moviesSlice.reducer;