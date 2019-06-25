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

  //call getPost from service to retrieve posts from server
  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todosResult => this.todos = todosResult);
  }

  //call addPost from service to add new post to server
  addTodo(todoName: HTMLInputElement, todoDescription: HTMLInputElement, startDate: HTMLInputElement, dueDate: HTMLInputElement) {

    // create new post from the user input
    let newTodo = new Todo (todoName.value, todoDescription.value, startDate.valueAsDate, dueDate.valueAsDate);

    this.todoService.addTodo(newTodo)
    .subscribe(postResult => this.todos.push(postResult));
  }

  ngOnInit() {
    //get all post when the page loads
    this.getTodos();
  }
}
