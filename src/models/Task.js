const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    done: {
        type: String,
    }
}, { timestamps: true })

module.exports = Task = model("task",TaskSchema);