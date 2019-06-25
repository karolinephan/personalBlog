import { Component, OnInit, Input } from '@angular/core';
//import Todo class from todo.model.ts
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //get input of todo from todo-list
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
