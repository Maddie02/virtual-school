const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;

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
    }
})

module.exports = new Model('Student', studentSchema);