import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos
    case 'completed':
      return todos.filter(t => t.completed)
    case 'active':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return {
    todos: getVisibleTodos(state.todos, ownProps.match.params.filter || 'all')
  }
}


const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList
