import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const checklistSchema = new Schema({
    todoId: {type: mongoose.Schema.Types.ObjectId},
    checklistName: {type: String},
    isDone: {type: Boolean}
});