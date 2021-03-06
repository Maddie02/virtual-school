const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const Model = mongoose.model;

const teacherSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    teachClass: {
        type: Array,
        required: true
    }
})

module.exports = new Model('Teacher', teacherSchema);