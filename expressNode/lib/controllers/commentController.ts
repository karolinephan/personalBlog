import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { commentSchema } from '../models/commentModel';

const Comment = mongoose.model('Comment', commentSchema);

export class CommentController {

    public addComment(req: Request, res: Response) {
        let newComment = new Comment(req.body);

        newComment.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public getCommentsByPostId(req: Request, res: Response) {
        Comment.find({ "postId": req.params.postId }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
}