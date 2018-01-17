import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const persistedState = {
  todos: [{
    id: 0,
    text: 'Welcome back!',
    completed: false,
  }],
  visibilityFilter: 'SHOW_ACTIVE',
};
const store = createStore(reducer, persistedState);

console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
