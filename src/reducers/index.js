import { combineReducers } from 'redux';
import cards from './cards';
import cardView from './cardView';
import { default as photos } from './photos';

const rootReducer = combineReducers({
  cards,
  cardView,
  photos
});

export default rootReducer;
