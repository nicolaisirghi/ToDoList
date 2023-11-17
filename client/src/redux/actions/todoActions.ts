import { Todo } from '../../types';
import { AddTodoAction, DeleteTodoAction, GetTodosAction, UpdateTodoAction } from './types';

export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const DELETE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = (todo: Todo): AddTodoAction => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const getTodos = (todos: Todo[]): GetTodosAction => ({
  type: GET_TODOS,
  payload: todos,
});

export const deleteTodo = (id: string): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateTodo = (todo: Todo): UpdateTodoAction => ({
  type: UPDATE_TODO,
  payload: todo,
});
