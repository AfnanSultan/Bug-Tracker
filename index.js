// import express
const express = require('express')
// app is the express server
const app = express()
const path = require('path')
const mongoose = require('mongoose')
//require('dotenv').config()

app.use(express.json())
// serve public files to client
app.use(express.static(path.join(__dirname, '/public')));
app.set("view engine", "ejs");


mongoose.Promise = global.Promise;

const databaseUri = "mongodb://dbUser:520520520@cluster0-shard-00-00-of6ji.mongodb.net:27017,cluster0-shard-00-01-of6ji.mongodb.net:27017,cluster0-shard-00-02-of6ji.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(databaseUri, { 
    useNewUrlParser: true,
    useCreateIndexL: true
    
})
.then(() => console.log(`Database connected`))
.catch(err => console.log(`Database connection error: ${err.message}`));


const bugsRouter = require('./routes/bugs')
const usersRouter = require('./routes/users')

app.use('/bugs', bugsRouter)
app.use('/users', usersRouter)


// starts a UNIX socketand listens for connections on the given path
app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});