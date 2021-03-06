import { Injectable } from '@angular/core';
//import Todo class from todo model
import { Todo } from '../models/todo.model';
//import Observable for service
import { Observable, of } from 'rxjs';
//import HTTP client
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //server routes
  private getTodoUrl = 'http://localhost:8080/todo';
  private addTodoUrl = 'http://localhost:8080/todo';
  private deleteTodoUrl = 'http://localhost:8080/todo/';

  //inject HttpCLient to constructor
  constructor( private http: HttpClient) { }

  //get all todos from server
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.getTodoUrl);
  }

  //add a new todo to server
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.addTodoUrl, todo);
  }

  //delete a todo
  deleteTodo(todoId: String): Observable<{}> {
    console.log("call deleteTodo in service" + todoId);
    return this.http.delete(this.deleteTodoUrl + todoId)
    
  }
}

