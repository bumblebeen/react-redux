import { createStore } from 'redux'
// import throttle from 'lodash/throttle';
// import { loadState, saveState } from './loadState';
import reducer from './reducers'

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  if (!console.group) return rawDispatch;

  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray',store.getState());
    console.log('%c action', 'color: blue', action);

    const returnValue = rawDispatch(action);

    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  }
}


const addPromiseToDispatch = (store) => {
  const rawDispatch = store.dispatch;

  return (action) =>
    (typeof action.then === 'function') ?
      action.then(rawDispatch) :
      rawDispatch(action)
}

const configureStore = () => {
  const store = createStore(reducer);

  if (process.env.NODE_ENV !== 'production')
    store.dispatch = addLoggingToDispatch(store);
  
  store.dispatch = addPromiseToDispatch(store)

  return store;
}

export default configureStore;