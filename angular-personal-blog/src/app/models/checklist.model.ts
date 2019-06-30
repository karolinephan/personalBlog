export class Checklist {
    todoId: String;
    checklistName: String;

    constructor(todoId: string, checklistName: string) {
        this.todoId = todoId;
        checklistName = checklistName;
    }
}