import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import * as actions from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos, getIsFetching } from '../reducers'

class VisibleTodoList extends Component {
  componentDidMount () {
    this.fetchData();
  }

  componentDidUpdate (prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData () {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render () {
    const { toggleTodo, todos, isFetching } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }
    return <TodoList todos={todos} onTodoClick={toggleTodo} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  const filter = ownProps.match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter,
    isFetching: getIsFetching(state, filter),
  }
}


VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList));

export default VisibleTodoList
