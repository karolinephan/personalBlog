import { Request, Response } from "express";  //import request, response for HTTP req, res
import { UserController } from "../controllers/userController";
import { PostController } from "../controllers/postController";
import { CommentController } from "../controllers/commentController";
import { TodoController } from "../controllers/todoController"
import { ChecklistController } from "../controllers/checklistController"


export class Routes {

    // create new UserController object 
    public userController: UserController = new UserController();
    //create new PostController object
    public postController: PostController = new PostController();
    //create new PostController object
    public commentController: CommentController = new CommentController();
    //create new TodoController object
    public todoController: TodoController = new TodoController();
    //create new ChecklistController object
    public checklistController: ChecklistController = new ChecklistController();


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
            .get(this.postController.getPostById)
            //update a post
            .put(this.postController.updatePost)
            //delete a post
            .delete(this.postController.deletePost);

        //------COMMENT------
        app.route('/comment')
            // Post a new comment
            .post(this.commentController.addComment);
        app.route('/comment/:postId')
            // get comments by post
            .get(this.commentController.getCommentsByPostId);

        //------TODO-----
        app.route('/todo')
            //post a new todo
            .post(this.todoController.addTodo)
            //list all todos
            .get(this.todoController.listTodos);

        app.route('/todo/:todoId')
            // get a todo by todo ID
            .get(this.todoController.getTodoById)
            //update a todo
            .put(this.todoController.updateTodo)
            //delete a todo
            .delete(this.todoController.deleteTodo);

        //-----CHECKLIST-----
        app.route('/checklist')
            //post a new checklist
            .post(this.checklistController.addChecklist)
            //get all checklist
            .get(this.checklistController.getChecklist)

        app.route('/checklist/:checklistId')
            //get a checklist by checklist ID
            .get(this.checklistController.getChecklistById)
            //delete a checklist
            .delete(this.checklistController.deleteChecklist)
        
        app.route('/checklist/todo/:todoId')
            //get checklist by todo ID
            .get(this.checklistController.getChecklistByTodoId)
    }
}