import * as types from '../constants/CardViewActionTypes';

export function changeCardView(cardView) {
  return {
    type: types.CHANGE_CARDVIEW,
    cardView
  };
}