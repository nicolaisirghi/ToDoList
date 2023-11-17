export interface Todo {
  id: string;
  value: string;
  isCompleted?: boolean;
}

export interface ResponseTodo {
  _id: string;
  value: string;
  isCompleted?: boolean;
}

export type Todos = Todo[];
