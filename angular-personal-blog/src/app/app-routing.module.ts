import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import all components to use in routing
import { PostListComponent } from './components/post-list/post-list.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HomeComponent } from './components/home/home.component';
import { TodoListComponent } from './components/todo-list/todo-list.component'

//declare all paths for routing
const routes: Routes = [
  {path: 'post', component: PostListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutMe', component: AboutMeComponent},
  {path: 'todoList', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
