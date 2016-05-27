import * as types from '../constants/SearchActionTypes';
import { infamousMovieSearch } from '../api/MovieSearch';

function searchWithMovieAPI(page, dispatch) {
  if (page >= 2) {
    dispatch({
      type: types.SEARCH_PENDING_FOR_NEXT,
    });
  }else {
    dispatch({
      type: types.SEARCH_PENDING,
    });
  }

  infamousMovieSearch(page, (data) => {
    dispatch({
      type: types.SEARCH_DONE,
      movies: data.results,
      page
    });
  });
}

export function searchNextPageAction() {
  return (dispatch, getState) => {
    const page = getState().results.page + 1;
    searchWithMovieAPI(page, dispatch);
  };
}

export function searchPhotoAction(page = 1) {
  return (dispatch) => {
    searchWithMovieAPI(page, dispatch);
  };
}
