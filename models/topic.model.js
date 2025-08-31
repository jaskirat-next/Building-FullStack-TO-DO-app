import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema({
    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true});

export const Topic = mongoose.model('Topic', topicSchema)