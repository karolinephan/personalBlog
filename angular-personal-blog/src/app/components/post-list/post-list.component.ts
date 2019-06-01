import { Component, OnInit } from '@angular/core';
// import Post from post Model
import { Post } from '../../models/post.model'
//(1-a) import Post service 
import { PostService } from '../../services/post.service'
import { HttpClient } from 'selenium-webdriver/http';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  //array to hold all posts from server
  posts: Post[];

  //(1-b) inject PostService
  constructor(private postService: PostService) { }

  //call getPost from service to retrieve posts from server
  getPost(): void {
    this.postService.getPost()
      .subscribe(postsResult => this.posts = postsResult);
  }

  //call addPost from service to add new post to server
  addPost(postTitle: HTMLInputElement, postBody: HTMLInputElement) {

    // create new post from the user input
    let newPost = new Post (postTitle.value, postBody.value);

    this.postService.addPost(newPost)
    .subscribe(postResult => this.posts.push(postResult));
  }

  ngOnInit() {
    //get all post when the page loads
    this.getPost();
  }

}
