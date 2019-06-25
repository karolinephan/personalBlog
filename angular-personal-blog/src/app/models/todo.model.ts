export class Todo {
    todoName: String;
    todoDescription: String;
    startDate: Date;
    dueDate: Date;


    constructor(todoName: string, todoDescription: string, startDate: Date, dueDate: Date) {
        this.todoName = todoName;
        todoDescription= todoDescription;
        this.startDate = startDate;
        this.dueDate = dueDate;
    }
}
