export class Post {
  userId: string;
  postTitle: String;
  postBody: String;
  postTag: String;
  postImageUrl: String;


  constructor(postTitle: string, postBody: string, postTag: String, postImageUrl: String) {
    this.postTitle = postTitle;
    this.postBody = postBody;
    this.postTag = postTag;
    this.postImageUrl = postImageUrl;
  }
}
