import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { postSchema } from '../models/postModel';

const Post = mongoose.model('Post', postSchema);

export class PostController {

    // add new post
    public addPost(req: Request, res: Response) 
    {
        let newPost = new Post(req.body);

        newPost.save((err, post) => 
        {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    }

    // get a specific post
    public getPostById(req: Request, res: Response) 
    {
        Post.findById(req.params.postId, (err, post) => 
        {
            if (err) {
                res.send(err);
            }
            res.json(post);
        });
    }

    // get all posts
    public listPosts(req: Request, res: Response) 
    {
        Post.find({}, (err, posts) =>
        {
            if(err) {
                res.send(err);
            }
            res.json(posts);
        });
    }
}

