export class Checklist {
    _id: String
    todoId: String;
    checklistName: String;
    isDone: boolean;

    constructor(todoId: string, checklistName: string, isDone: boolean, checklistId?: String) {
        this.todoId = todoId;
        this.checklistName = checklistName;
        this.isDone = isDone;
        if(checklistId) {this._id = checklistId}
    }
}