import { Schema, model } from 'mongoose';
const TodoSchema = new Schema({
    value: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
});
export const TodoModel = model('Todo', TodoSchema);
