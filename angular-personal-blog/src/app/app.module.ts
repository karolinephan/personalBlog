import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// (1-a) import FormsModule for ngModule of 2 way binding
import { FormsModule } from '@angular/forms';
// (2-a) import HttpClient so service can talk to server
import { HttpClientModule } from '@angular/common/http';

import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ChecklistComponent } from './components/checklist/checklist.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    NavbarComponent,
    HomeComponent,
    TodoListComponent,
    TodoComponent,
    ContactComponent,
    PortfolioComponent,
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,      // <-- (1-b) then import FormsModule here
    HttpClientModule,  // <-- (2-b) then import HttpClientModule here
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
