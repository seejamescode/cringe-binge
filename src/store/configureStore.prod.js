import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const enhancer = applyMiddleware(apiMiddleware, thunk);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
