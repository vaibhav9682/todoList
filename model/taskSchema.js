const mongoose = require('mongoose');

const todo_Schema = new mongoose.Schema({

    task: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    }
})

const Task = mongoose.model('Task', todo_Schema);

module.exports = Task;