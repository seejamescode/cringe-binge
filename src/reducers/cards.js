import { TOGGLE_PIN } from '../constants/ActionTypes';

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

  default:
    return state;
  }
}
