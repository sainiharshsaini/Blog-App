import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    authorImg: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

export const BlogModel = mongoose.models.blog || mongoose.model('blog', blogSchema);

// If any model will be available in the DB with the same name then it will not create the new model