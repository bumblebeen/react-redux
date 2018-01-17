import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { createLogger } from 'redux-logger';

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