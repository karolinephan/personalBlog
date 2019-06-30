import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { checklistSchema } from '../models/checklistModel';

const Checklist = mongoose.model("Checklist", checklistSchema);

export class ChecklistController {

    public addChecklist(req: Request, res: Response) {
        let newChecklist = new Checklist(req.body);
        newChecklist.save((err, checklist) => {
            if (err) {
                res.send(err);
                console.log(err);
            }
            res.json(checklist);
        });
    }

    // get all checklist
    public getChecklist(req: Request, res: Response) {
        Checklist.find({}, (err, checklists) => {
            if (err) {
                res.send(err);
            }
            res.json(checklists);
        });
    }

    public getChecklistById(req: Request, res: Response) {
        Checklist.findById(req.params.checklistId, (err, checklist) => {
            if (err) {
                res.send(err);
            }
            res.json(checklist);
        });
    }

    public getChecklistByTodoId(req: Request, res: Response) {
        Checklist.find({"todoId": mongoose.Types.ObjectId.ObjectId(req.params.todoId)}, (err, checklist) => {
            if (err) {
                res.send(err);
            }
            res.json(checklist);
        });
    }

    public deleteChecklist(req: Request, res: Response) {           
        Checklist.deleteOne({ _id: req.params.checklistId }, 
            (err, record) => {
            if(err){
                res.send(err);
            }
        });
    }
}