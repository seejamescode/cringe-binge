import * as types from '../constants/ListActionTypes';

const initialState = {
  status: 'IDLE',
  movies: [],
  open: false,
  query: ''
};

export default function updateList(state = initialState, action) {
  switch (action.type) {
  case types.ADD_MOVIE_DONE:
    let newMovieIndex = state.movies.map(function(x) {return x.id; }).indexOf(action.movie.id);
    return {
      ...state,
      movies: [
          ...state.movies.slice(0, newMovieIndex),
          action.movie,
          ...state.movies.slice(newMovieIndex + 1)
      ],
      status: 'DONE',
      query: [state.query, action.movie.id].join('&')
    };
  case types.REMOVE_MOVIE:
    let index = state.movies.map(function(x) {return x.id; }).indexOf(action.id);
    return {
      ...state,
      movies: [
        ...state.movies.slice(0, index),
        ...state.movies.slice(index + 1)
      ],
      status: 'DONE',
      query: state.query.replace('&' + action.id,'')
    };
  case types.SEARCH_ADD:
    return {
      ...state,
      movies: [...state.movies, action.movie],
      status: 'PENDING',
    };
  case types.TOGGLE_OPEN:
    return {
      ...state,
      open: action.open,
    };
  default:
    return state;
  }
}
