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
router.route('/add').get((req, res) => {
    const username = req.query.username;
    const password = req.query.password;
    const userType = req.query.userType;
    const newUser = new User({username, password, userType})

    User.create(newUser, (err, newlyCreated) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(newlyCreated);
            res.redirect('/users');
        }
    })

    // newUser.save()
    //     .then(() => res.json('User added'))
    //     .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/login').get((req, res) => {

    res.send("you are logging in...");
})

router.get('/register', (req, res) => {
    res.sendFile('createAcc.html', {root: './public'});
})

module.exports = router