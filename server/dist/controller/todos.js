var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TodoModel } from '../model/todo';
class Todos {
    getTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const todos = yield TodoModel.find();
                res.status(200).json({ todos });
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    createTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { value } = req.body;
                const todo = yield TodoModel.create({ value });
                res.status(201).json({ todo, created: true });
            }
            catch (error) {
                res.status(500).json({ error, created: false });
            }
        });
    }
    updateTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { value, id, isCompleted = false } = req.body;
                const todo = yield TodoModel.findOneAndUpdate({ _id: id }, { value, isCompleted });
                if (todo) {
                    const updatedTodo = yield TodoModel.findById(id);
                    return res.status(200).json({ todo: updatedTodo, updated: true });
                }
                throw new Error('Todo not found');
            }
            catch (error) {
                res.status(500).json({ error, updated: false });
            }
        });
    }
    deleteTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.body;
                const todo = yield TodoModel.findByIdAndDelete(id);
                if (todo) {
                    return res.status(200).json({ todo, deleted: true });
                }
                throw new Error('Todo not found');
            }
            catch (error) {
                res.status(500).json({ error, deleted: false });
            }
        });
    }
}
export default new Todos();
