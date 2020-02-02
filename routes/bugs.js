const router = require('express').Router()
let Bug = require('../models/bug.model')
const path = require('path');

router.route('/').get((req, res) => {
    console.log('get /bugs');
    console.log(req.params);
    Bug.find()
        .then(bugs => {
            let items = []
            bugs.forEach(function(obj) { 
                //console.log(obj);
                items.push(obj) 
            });

            console.log(items)
            res.render('../views/bugs-list', {
                bugs: items //JSON.parse(bugs)
            })

        })
        .catch(err => res.status(400).json('Error: ' + err))
})

// router.get('/show', (req, res) =>{
//     res.sendFile('bugs.html', {root: './public'});
// });

router.get('/add', (req, res) => {
    console.log("Inside /bugs/add");
    console.log(req.query);
    const productName = req.query.productName;
    const bugName = req.query.bugName;
    const dateFound = req.query.dateFound;
    const severity = req.query.severity;

    var newBug = {
        productName,
        bugName,
        dateFound,
        severity
    }

    Bug.create(newBug, (err, newlyCreated) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(newlyCreated);
            res.redirect('/bugs');
        }
    })

    // newBug.save()
    //     .then(() => res.json('Bug added!'))
    //     .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/form', (req, res) => {
    res.sendFile('report.html', {root: './public'});

});


router.get('/:userID', (req, res) =>{
    userID = req.params.userID
    res.send('detail page ' + userID);
});

// router.put('/', (req, res) =>{
//     console.log("Inside the /bugs put");
//     console.log(req.params);
//     console.log(req.body);
//     console.log(req.query);
//     res.send('POST /bugs');
// })

router.put('/:id', (req, res) =>{
    id = req.params.id
    res.send('PUT /bugs/'+id);
})

router.delete('/:id', (req, res) =>{
    id = req.params.id
    res.send('Delete /bugs/'+id);
})



module.exports = router
