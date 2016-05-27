import * as types from '../constants/ListActionTypes';
import { specificMovieSearch } from '../api/MovieSearch';

function searchForSpecificMovie(movie, dispatch) {
  dispatch({
    type: types.SEARCH_ADD,
    movie: movie
  });

  specificMovieSearch(movie.id, (data) => {
    dispatch({
      type: types.ADD_MOVIE_DONE,
      movie: data
    });
  });
}

export function addMovie(id) {
  return (dispatch) => {
    searchForSpecificMovie(id, dispatch);
  };
}

export function removeMovie(id) {
  return {
    type: types.REMOVE_MOVIE, id
  };
}

export function toggleOpen(open) {
  return {
    type: types.TOGGLE_OPEN, open
  };
}