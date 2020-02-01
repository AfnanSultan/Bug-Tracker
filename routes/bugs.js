const router = require('express').Router()
let Bug = require('../models/bug.model')

router.route('/').get((req, res) => {
    Bug.find()
        .then(bugs => res.json(exercises))
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

module.exports = router
