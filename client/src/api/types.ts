type Response<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

interface TodoResponse {
  _id: string;
  value: string;
  isCompleted: boolean;
};

export type Todos = TodoResponse[];