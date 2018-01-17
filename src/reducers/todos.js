const todo = (todo, action) => {
  if (todo === undefined) {
    return {
      id: action.id,
      text: action.text,
      completed: false
    }
  }
  if (todo.id === action.id) {
    return {...todo, completed: !todo.completed}
  }

  return todo;
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos

export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state
    case 'completed':
      return state.filter(t => t.completed)
    case 'active':
      return state.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
