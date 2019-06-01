import { Injectable } from '@angular/core';
//import Hero class from hero model
import { Post } from '../models/post.model';
//import Observable for service
import { Observable, of } from 'rxjs';
//import HTTP client
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  //server routes
  private getPostUrl = 'http://localhost:8080/post';
  private addPostUrl = 'http://localhost:8080/post';

  //inject HttpCLient to constructor
  constructor( private http: HttpClient) { }

  //get all posts from server
  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.getPostUrl);
  }

  //add a new post to server
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.addPostUrl, post);
  }
}
