import * as types from '../constants/ActionTypes';

export function togglePin(id) {
  return {
    type: types.TOGGLE_PIN,
    id
  };
}

export function toggleTop(id) {
  return {
    type: types.TOGGLE_TOP,
    id
  };
}

export function changeCardView(cardView) {
  return {
    type: types.CHANGE_CARDVIEW,
    cardView
  };
}