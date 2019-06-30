import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { todoSchema } from '../models/todoModel';

const Todo = mongoose.model('Todo', todoSchema);

export class TodoController {
    // add new todo
    public addTodo(req: Request, res: Response) {
        let newTodo = new Todo(req.body);

        newTodo.save((err, todo) => {
            if (err) {
                res.send(err);
            }
            res.json(todo);
        });
    }

    // get a specific todo
    public getTodoById(req: Request, res: Response) {
        Todo.findById(req.params.todoId, (err, todo) => {
            if (err) {
                res.send(todo);
            }
            res.json(todo);
        });
    }

    // get all todos
    public listTodos(req: Request, res: Response) {
        Todo.find({}, (err, todos) => {
            if (err) {
                res.send(err);
            }
            res.json(todos);
        });
    }

    //update a todo
    public updateTodo(req: Request, res: Response) {
        Todo.findOneAndUpdate({ _id: req.params.todoId },
            req.body,
            { new: true },
            (err, todo) => {
                if (err) {
                    res.send(err);
                }
                res.json(todo);
            });
    }

    //delete a todo
    public deleteTodo(req: Request, res: Response) {
        console.log("todoCOntroller called" + req.params.todoId);
        Todo.deleteOne({ _id: req.params.todoId },
            (err, todo) => {
                if (err) {
                    res.send(err);
                }
                res.json({ message: 'Successfully deleted a todo!' });
            });
    }
}
