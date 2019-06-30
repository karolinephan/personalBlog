import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { userSchema } from '../models/userModel';

const User = mongoose.model('User', userSchema);

export class UserController {

    public addUser(req: Request, res: Response) {
        let newUser = new User(req.body);

        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUserById(req: Request, res: Response) {
        User.findById(req.params.userId, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        })
    }
}