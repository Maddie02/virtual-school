const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { ObjectId } = Schema.Types;

const postSchema = new Schema({

    description: {
        type: String,
        required: true
    },

    author: {
        type: ObjectId,
        ref: "Student"
    }
}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model("Post", postSchema);