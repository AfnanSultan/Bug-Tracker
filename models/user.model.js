const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    userType: String
});

const User = mongoose.model('User1', userSchema);

module.exports = User
