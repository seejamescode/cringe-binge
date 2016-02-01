import * as types from '../constants/CardActionTypes';

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
