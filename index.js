// import express
const express = require('express')
// app is the express server
const app = express()

// responds to HTTP GET requests with specified URL path
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
});