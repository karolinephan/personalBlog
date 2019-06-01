import { Component, OnInit } from '@angular/core';
//import router for routing
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //inject router 
  constructor(private router: Router) { }

  home() {
    this.router.navigate(['home']);
  }

  posts() {
    this.router.navigate(['/post']);
  }

  aboutMe() {
    this.router.navigate(['/aboutMe']);
  }

  todoList() {
    this.router.navigate(['/todoList']);
  }


  ngOnInit() {
  }

}
