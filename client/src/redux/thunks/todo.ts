import { AppDispatch } from '../store';
import { AddTodo, DeleteTodo, GetTodos, UpdateTodo } from '../../api';
import { addTodo, deleteTodo, getTodos, updateTodo } from '../actions/todoActions';
import { Todo } from '../../types';


export const getTodosThunk = () => async (dispatch: AppDispatch) => {
  try {
    const { todos } = await GetTodos();
    if (todos) {
      const items = todos.map(({ _id, value, isCompleted }) => ({
        id: _id,
        value,
        isCompleted,
      }));

      dispatch(getTodos(items));

    }
  } catch (error) {
    console.log('Error in getTodosThunk : ', error);
  }
};

export const addTodoThunk = (todo: string) => async (dispatch: AppDispatch) => {
  try {
    const newTodo = await AddTodo(todo);
    if (newTodo.created) {
      const { value, _id } = newTodo.todo;

      dispatch(addTodo({ value, id: _id }));
    }
  } catch (error) {
    console.log('Error in addTodoThunk : ', error);
  }
};

export const updateTodoThunk = ({ value, id, isCompleted }: Todo) => async (dispatch: AppDispatch) => {
  try {
    console.log('updateTodoThunk', { value, id, isCompleted });
    const updatedTodo = await UpdateTodo({ value, id, isCompleted });
    if (updatedTodo.updated) {
      dispatch(updateTodo({ value, id, isCompleted }));
    }
  } catch (e) {
    console.log('Error in updateTodoThunk', e);
  }
};

export const deleteTodoThunk = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const deletedTodo = await DeleteTodo(id);
    if (deletedTodo.deleted) {
      dispatch(deleteTodo(id));
    }
  } catch (e) {
    console.log('Error in deleteTodoThunk', e);
  }
};