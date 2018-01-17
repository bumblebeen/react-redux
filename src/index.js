import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { loadState, saveState } from './loadState';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const store = createStore(reducer, persistedState);

console.log(store.getState())

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}), 1000);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
