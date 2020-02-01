// import express
const express = require('express')
// app is the express server
const app = express()

// respond with index.html when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.sendFile('index.html')
});

// starts a UNIX socketand listens for connections on the given path
app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});