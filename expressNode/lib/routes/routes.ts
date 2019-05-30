import { Request, Response } from "express";  //import request, response for HTTP req, res
import { UserController } from "../controllers/userController";
import { PostController } from "../controllers/postController"
import { CommentController } from "../controllers/commentController"

export class Routes {

    // create new UserController object 
    public userController: UserController = new UserController();
    //create new PostController object
    public postController: PostController = new PostController();
    //create new PostController object
    public commentController: CommentController = new CommentController();


    public routes(app): void {

        //------USER------
        app.route('/user')
            // Create a new user
            .post(this.userController.addUser);
        app.route('/user/:userId')
            // get user by user Id
            .get(this.userController.getUserById);



        //------POST-----
        app.route('/post')
            //post a new post
            .post(this.postController.addPost)
            //list all posts
            .get(this.postController.listPosts);

        app.route('/post/:postId')
            // get a post by post ID
            .get(this.postController.getPostById);

        //------COMMENT------
        app.route('/comment')
            // Post a new comment
            .post(this.commentController.addComment);
        app.route('/comment/:postId')
            // get comments by post
            .get(this.commentController.getCommentsByPostId);


    }
}