import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import all components to use in routing
import { PostListComponent } from './components/post-list/post-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

//declare all paths for routing
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contactMe', component: ContactComponent},
  {path: 'blog', component: PostListComponent},
  {path: 'todoList', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
