const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    // creates field for when it was created and modified
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User
