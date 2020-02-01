const router = require('express').Router()
let Bug = require('../models/bug.model')
const path = require('path');

router.route('/').get((req, res) => {
    Bug.find()
        .then(bugs => res.json(bugs))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const description = req.body.description
    const status = req.body.status
    const date = Date.parse(req.body.date)

    const newBug = new Bug({
        username,
        description,
        status,
        date
    })

    newBug.save()
        .then(() => res.json('Bug added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/form', (req, res) => {
    res.sendFile('createAcc.html', {root: './public'});

});

router.get('/show', (req, res) =>{
    res.sendFile('bugs.html', {root: './public'});
});


router.get('/:userID', (req, res) =>{
    userID = req.params.userID
    res.send('detail page ' + userID);
});

router.post('/', (req, res) =>{
    res.send('POST /bugs');
})

router.put('/:id', (req, res) =>{
    id = req.params.id
    res.send('PUT /bugs/'+id);
})

router.delete('/:id', (req, res) =>{
    id = req.params.id
    res.send('Delete /bugs/'+id);
})



module.exports = router
