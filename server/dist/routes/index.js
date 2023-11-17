import express from 'express';
import ToDoRouter from './todos';
const router = express.Router();
router.use('/todos', ToDoRouter);
export default router;
