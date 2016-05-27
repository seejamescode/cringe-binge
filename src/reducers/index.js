import { combineReducers } from 'redux';
import list from './list';
import results from './results';

const rootReducer = combineReducers({
  list,
  results
});

export default rootReducer;
