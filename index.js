// import express
const express = require('express')
// app is the express server
const app = express()
const path = require('path')
const mongoose = require('mongoose')
//require('dotenv').config()

app.use(express.json())
// serve public files to client
app.use(express.static(path.join(__dirname, 'public')));

const uri = 'mongodb://noraga:mypassword@cluster0-shard-00-00-960za.gcp.mongodb.net:27017,cluster0-shard-00-01-960za.gcp.mongodb.net:27017,cluster0-shard-00-02-960za.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
//const uri = 'mongodb+srv://<username>:<password>@cluster0-960za.gcp.mongodb.net/test?retryWrites=true&w=majority'
//const uri = "mongodb+srv://noramgar:mypassword@cluster0-zbnhm.gcp.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('OMGWTFLOL')
});

const bugsRouter = require('./routes/bugs')
const usersRouter = require('./routes/users')

app.use('/bugs', bugsRouter)
app.use('/users', usersRouter)
app.get('/', (req, res) =>{
  res.sendFile('/public/index.html');
})

// starts a UNIX socketand listens for connections on the given path
app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});