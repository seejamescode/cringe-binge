import { combineReducers } from 'redux';
import cards from './cards';
import cardView from './cardView';

const rootReducer = combineReducers({
  cards,
  cardView
});

export default rootReducer;
