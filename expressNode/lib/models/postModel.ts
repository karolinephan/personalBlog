import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const postSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    postTitle: {
        type: String
    },
    postBody: {
        type: String            
    },
    postTag: {
        type: String            
    },
    postImageUrl: {
        type: String            
    }
});