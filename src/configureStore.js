import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';

const configureStore = () => {
  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production')
    middlewares.push(createLogger());

  const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  );
  return store;
}

export default configureStore;