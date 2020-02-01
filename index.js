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


mongoose.connect("mongodb+srv://noramgar:mypassword@cluster0-zbnhm.gcp.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('OMGWTFLOL')
});



// starts a UNIX socketand listens for connections on the given path
app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});