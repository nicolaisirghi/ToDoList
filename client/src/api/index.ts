import axios from 'axios';
import { Todos } from './types';
import { ResponseTodo, Todo } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const GetTodos = () => api.get<{ todos: Todos }>('/todos').then((res) => res.data);
export const AddTodo = (value: string) =>
  api
    .post<{
      todo: ResponseTodo;
      created?: boolean;
    }>('/todos', { value })
    .then((res) => res.data);

export const UpdateTodo = ({ id, value, isCompleted }: Todo) =>
  api
    .put<{ todo: Todo; updated: boolean }>('/todos', {
      id,
      value,
      isCompleted,
    })
    .then((res) => res.data);

export const DeleteTodo = (id: string) =>
  api
    .delete<{
      todo: Todo;
      deleted: boolean;
    }>('/todos', { data: { id } })
    .then((res) => res.data);
