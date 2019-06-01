import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const todoSchema = new Schema({
  todoName:{type:String},
  todoDescription:{type:String},
  startDate:{type:Date},
  dueDate:{type:Date}
});