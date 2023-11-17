import { Todo } from '../../types';
import { ADD_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO } from './todoActions';

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

export interface GetTodosAction {
  type: typeof GET_TODOS;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: string;
}

export interface UpdateTodoAction {
  type: typeof UPDATE_TODO;
  payload: Todo;
}

export type TodoActionTypes = AddTodoAction | GetTodosAction | DeleteTodoAction | UpdateTodoAction;
