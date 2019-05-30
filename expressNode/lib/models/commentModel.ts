import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const commentSchema = new Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId
    },
    commentorEmail: {
        type: String
    },
    commentBody: {
        type: String            
    }
});