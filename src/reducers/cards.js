import { TOGGLE_PIN, ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_TODO, MARK_ALL, CLEAR_MARKED } from '../constants/ActionTypes';

const initialState = require('../cards.json');
initialState.forEach(function (e, id) {
    e.id = id;
});

export default function cards(state = initialState, action) {
  switch (action.type) {
  case TOGGLE_PIN:
    return state.map(card =>
      card.id === action.id ?
        { ...card, pinned: !card.pinned } :
        card
    );

  case ADD_TODO:
    return [{
      id: (state.length === 0) ? 0 : state[0].id + 1,
      marked: false,
      text: action.text
    }, ...state];

  case DELETE_TODO:
    return state.filter(todo =>
      todo.id !== action.id
    );

  case EDIT_TODO:
    return state.map(todo =>
      todo.id === action.id ?
        { ...todo, text: action.text } :
        todo
    );

  case MARK_TODO:
    return state.map(todo =>
      todo.id === action.id ?
        { ...todo, marked: !todo.marked } :
        todo
    );

  case MARK_ALL:
    const areAllMarked = state.every(todo => todo.marked);
    return state.map(todo => ({
      ...todo,
      marked: !areAllMarked
    }));

  case CLEAR_MARKED:
    return state.filter(todo => todo.marked === false);

  default:
    return state;
  }
}
