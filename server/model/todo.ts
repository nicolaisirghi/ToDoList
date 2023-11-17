import { Schema, model } from 'mongoose';

interface Todo {
  value: string;
  isCompleted: boolean;
}

const TodoSchema = new Schema<Todo>({
  value: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
});
export const TodoModel = model<Todo>('Todo', TodoSchema);