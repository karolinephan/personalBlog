export class Post {
  userId: string;
  postTitle: String;
  postBody: String;


  constructor(postTitle: string, postBody: string) {
    this.postTitle = postTitle;
    this.postBody = postBody;
  }
}
