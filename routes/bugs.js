const router = require('express').Router()
let Bug = require('../models/bug.model')
const path = require('path');
// var express     = require("express")
// var app = express();


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

router.route('/json').get(
    (req, res) => {
        Bug.find().then(bugs=>{
            res.json(bugs)
        })
    }
);

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
    const status = req.query.status;
    const reproductionDetails = req.query.reproductionDetails;
    const bugDescription = req.query.bugDescription;

    var newBug = {
        productName,
        bugName,
        dateFound,
        severity,
        status,
        reproductionDetails,
        bugDescription
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

router.get('/chart', (req, res) => {
    console.log("showing chart...");

    Bug.find({}, (err, bugs)=>{
        // console.log(bugs);
        // none, low, medium, high
        labels = ['none', 'low', 'medium', 'high'];
        data = [0,0,0,0];
        bugs.forEach((bug)=>{
            var index=0;
            // console.log(bug.severity);
            switch(bug.severity){
                case 'none': 
                    index=0;break;
                case 'low':
                    index=1;break;
                case 'medium':
                    index=2;break;
                case 'high':
                    index=3; break;
            }
            data[index] +=1;
        });
        console.log(data);
        res.sendFile('chart.html', {root: './public', data, labels});
    });

    
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
