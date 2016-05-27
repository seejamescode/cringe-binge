import * as types from '../constants/SearchActionTypes';

const initialState = {
  status: 'IDLE',
  movies: [],
};

export default function getResults(state = initialState, action) {
  switch (action.type) {
  case types.SEARCH_DONE:
    return {
      ...state,
      movies: [...state.movies, ...action.movies],
      status: 'DONE',
      page: action.page
    };
  case types.SEARCH_PENDING_FOR_NEXT:
    return {
      ...state,
      status: 'PENDING_FOR_NEXT',
    };
  case types.SEARCH_PENDING:
    return {
      ...state,
      movies: [],
      status: 'PENDING',
    };
  default:
    return state;
  }
}
