// import express
const express = require('express')
// app is the express server
const app = express()

// responds to HTTP GET requests and sends argument of send() to the server
app.get('/', (req, res) => {
    res.send(index.html)
});

// 
app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});