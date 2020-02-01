const router = require('express').Router()
let User = require('../models/user.model')

// handles get request on the /users path
// responds with list of all users in db
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

// use for creating user accounts
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username})

    newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router