import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../reducers'

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  return {
    todos: getVisibleTodos(state, ownProps.match.params.filter || 'all')
  }
}


const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList
