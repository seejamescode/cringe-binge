import * as types from '../constants/ActionTypes';

export function togglePin(id) {
  return {
    type: types.TOGGLE_PIN,
    id
  };
}
