import express from 'express';
import TodosController from '../controller/todos';
const router = express.Router();
router.get('/', TodosController.getTodos);
router.post('/', TodosController.createTodo);
router.put('/', TodosController.updateTodo);
router.delete('/', TodosController.deleteTodo);
export default router;
