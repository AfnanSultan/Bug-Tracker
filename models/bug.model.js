const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bugSchema = new Schema({
    // person who opened bug
    productName: String,
    // description of bug
    bugName: String,
    // open, closed, in progress
    dateFound: String,
    // date bug was opened
    severity: String,
    status: String,
    reproductionDetails: String,
    bugDescription: String
})

const Bug = mongoose.model('Bug', bugSchema)

module.exports = Bug
