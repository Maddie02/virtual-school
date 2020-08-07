const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { ObjectId } = Schema.Types;

const studentSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    studentClass: {
        type: Number,
        required: true
    },

    posts: [{ type: ObjectId, ref: "Post" }]
})

studentSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }

    next();
})

module.exports = new Model('Student', studentSchema);