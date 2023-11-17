interface TodoResponse {
  _id: string;
  value: string;
  isCompleted: boolean;
}

export type Todos = TodoResponse[];
