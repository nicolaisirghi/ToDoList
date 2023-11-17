import React, { FC, useEffect } from 'react';
import TodoList from './ui/TodoList';
import { Row } from './components/Row';
import { connect } from 'react-redux';
import { RootState } from './redux/store';
import { Todos } from './types';
import { getTodosThunk } from './redux/thunks/todo';

interface Props {
  todos: Todos;
  getTodos: () => Promise<void>;
}

const App: FC<Props> = ({ todos, getTodos }) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <Row className="App" alignItems="start">
      <TodoList todos={todos} />
    </Row>
  );
};

export const mapStateToProps = (state: RootState) => {
  return {
    todos: state.todos.todos,
  };
};

export default connect(mapStateToProps, { getTodos: getTodosThunk })(App);
