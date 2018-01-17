import { createStore } from 'redux'
import throttle from 'lodash/throttle';
import { loadState, saveState } from './loadState';
import reducer from './reducers'

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(reducer, persistedState);
  
  console.log(store.getState())
  
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }), 1000);

  return store;
}

export default configureStore;