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

export default todo;