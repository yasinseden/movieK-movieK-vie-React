export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const REMOVE_MOVIE_FROM_LIST = 'REMOVE_MOVIE_FROM_LIST';

export const addMovieToList = (movie) => ({
  type: ADD_MOVIE_TO_LIST,
  payload: movie
});

export const removeMovieFromList = (movie) => ({
  type: REMOVE_MOVIE_FROM_LIST,
  payload: movie
});
