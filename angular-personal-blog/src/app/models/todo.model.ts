export class Todo {
    _id: String;
    todoName: String;
    todoDescription: String;
    startDate: Date;
    dueDate: Date;


    constructor(todoName: string, todoDescription: string, startDate: Date, dueDate: Date, todoId?: String) {
        this.todoName = todoName;
        this.todoDescription= todoDescription;
        this.startDate = startDate;
        this.dueDate = dueDate;
        if (todoId) { this._id = todoId;}
    }
}
