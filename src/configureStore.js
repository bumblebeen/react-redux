import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

import { createLogger } from 'redux-logger';

const thunk = (store) => (next) => (action) => 
  typeof action === 'function' ?
    action(store.dispatch) :
    next(action);

const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production')
    middlewares.push(createLogger());

  const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  );
  return store;
}

export default configureStore;