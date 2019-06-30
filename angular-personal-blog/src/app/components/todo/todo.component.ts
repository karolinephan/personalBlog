import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import Todo class from todo.model.ts
import { Todo } from '../../models/todo.model';
//import Checklist class from checklist.model.ts
import { Checklist } from '../../models/checklist.model'
//import Checklist service 
import { ChecklistService } from '../../services/checklist.service'
//import Checklist service 
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //get input of todo from todo-list component
  @Input() todo: Todo;
  //array to hold all checklists from server
  checklists: Checklist[];
  //create a delete emitter to notify todo-list to refresh the page
  @Output() deletedEmitter = new EventEmitter<boolean>();

  //inject ChecklistService
  constructor(
    private checklistService: ChecklistService, 
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getChecklistByTodoId(this.todo._id);
  }

  //call addChecklist from service to add new checklist to server
  addChecklist(
    todoId: HTMLInputElement,
    checklistName: HTMLInputElement) {

    // create new post from the user input
    let newChecklist = new Checklist(
      todoId.value,
      checklistName.value,
    );

    this.checklistService.addChecklist(newChecklist)
      .subscribe(checklistResult => this.checklists.push(checklistResult));
  }

  //call getChecklistByTodoId from service to get all checklist of a todo from server
  getChecklistByTodoId(todoId): void {
    this.checklistService.getChecklistByTodoId(todoId)
      .subscribe(checklistsResult => this.checklists = checklistsResult);
  }

  //call getChecklistByTodoId from service to get all checklist of a todo from server
  getChecklist(): void {
    this.checklistService.getChecklist()
      .subscribe(checklistsResult => this.checklists = checklistsResult);
  }

  //call deleteTodo from service to delete a todo
  deleteTodo() {
    console.log("call deleteTodo() in todo.component.ts");
    this.todoService.deleteTodo(this.todo._id)
      //deletedEmitter needs to be inside subscribe to work because it's asynchronus
      //notify parent(todo-list) that a todo has been deleted
      // in todo-list.html, when deletedEmitter emited, todo-list will call ngOnInit (look at todo-list.html)
      .subscribe(() => this.deletedEmitter.emit(true));
  }
}
