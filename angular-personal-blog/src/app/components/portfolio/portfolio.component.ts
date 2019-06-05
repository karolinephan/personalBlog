import { Component, OnInit } from '@angular/core';
//import router for routing
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private router: Router) { }

  blog() {
    this.router.navigate(['/blog']);
  }

  todoList() {
    this.router.navigate(['/todoList']);
  }

  ngOnInit() {
  }

}
