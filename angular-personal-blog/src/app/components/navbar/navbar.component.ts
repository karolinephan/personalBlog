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
    this.router.navigate(['/']);
  }

  contactMe() {
    this.router.navigate(['contactMe']);
  }

  portfolio() {
    this.router.navigate(['/portfolio']);
  }

  blog() {
    this.router.navigate(['/blog']);
  }


  ngOnInit() {
  }

}
