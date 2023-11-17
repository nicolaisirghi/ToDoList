import { Request, Response } from 'express'
import { TodoModel } from '../model/todo'

class Todos {
  public async getTodos(req: Request, res: Response) {
    try {
      const todos = await TodoModel.find()
      res.status(200).json({ todos })
    } catch (error) {
      res.status(500).json({ error })
    }
  }

  public async createTodo(req: Request, res: Response) {
    try {
      const { value } = req.body
      const todo = await TodoModel.create({ value })
      res.status(201).json({ todo, created: true })
    } catch (error) {
      res.status(500).json({ error, created: false })
    }
  }

  public async updateTodo(req: Request, res: Response) {
    try {
      const { value, id, isCompleted = false } = req.body
      const todo = await TodoModel.findOneAndUpdate(
        { _id: id },
        { value, isCompleted },
      )

      if (todo) {
        const updatedTodo = await TodoModel.findById(id)
        return res.status(200).json({ todo: updatedTodo, updated: true })
      }
      throw new Error('Todo not found')
    } catch (error) {
      res.status(500).json({ error, updated: false })
    }
  }

  public async deleteTodo(req: Request, res: Response) {
    try {
      const { id } = req.body
      const todo = await TodoModel.findByIdAndDelete(id)
      if (todo) {
        return res.status(200).json({ todo, deleted: true })
      }
      throw new Error('Todo not found')
    } catch (error) {
      res.status(500).json({ error, deleted: false })
    }
  }
}

export default new Todos()
