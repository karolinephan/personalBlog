import { Component, OnInit } from '@angular/core';
// import Todo from todo Model
import { Todo } from '../../models/todo.model'
//(1-a) import Post service 
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  //array to hold all todos from server
  todos: Todo[];

  //(1-b) inject TodoService
  constructor(private todoService: TodoService) { }

  //call getTodo from service to retrieve todos from server
  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todosResult => this.todos = todosResult);
  }

  //call addTodo from service to add new todo to server
  addTodo(todoName: HTMLInputElement, todoDescription: HTMLInputElement, startDate: HTMLInputElement, dueDate: HTMLInputElement) {
    // create new post from the user input
    let newTodo = new Todo (todoName.value, todoDescription.value, startDate.valueAsDate, dueDate.valueAsDate);

    this.todoService.addTodo(newTodo)
    .subscribe(todoResult => this.todos.push(todoResult));
  }

  ngOnInit() {
    //get all todos when the page loads
    this.getTodos();
  }
}
