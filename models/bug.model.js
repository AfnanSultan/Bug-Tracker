const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bugSchema = new Schema({
    // person who opened bug
    username: { type: String, required: true },
    // description of bug
    description: { type: String, required: true},
    // open, closed, in progress
    status: { type: String, required: true },
    // date bug was opened
    date: { type: Date, required: true },
    // developer currently fixing bug
    fixer: { type: String },
}, {
    timestamps: true,
})

const Bug = mongoose.model('Bug', bugSchema)

module.exports = Bug
