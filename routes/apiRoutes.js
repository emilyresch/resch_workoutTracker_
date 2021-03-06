//pseudo code 
//exercises are documents and workout plans are collections
//require models
const Workout = require("../models/workout"); 
const router = require("express").Router();


router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            // console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
        });
});

// * Add new exercises to a new workout plan.
router.post("/api/workouts", ({body}, res) => {
    // console.log("second post request")
    Workout.create(body)
        .then(dbWorkout => {
            // console.log("new workout is", dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
        });
});

// * Add exercises to a previous workout plan.
//update route to add exercises to a previously made workout collection
router.put("/api/workouts/:id", (req, res) => {
    console.log("got a PUT request");
    //find by id and push new excercise from the body into the document
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });

});

// * View multiple the combined weight of multiple exercises on the `stats` page.
router.get("/api/workouts/range", (req, res) => {
    console.log("get request for stats page");
    Workout.find({})
        .then(dbRange => {
            console.log(dbRange);
            res.json(dbRange);
        }).catch(err => console.log(err));
});


module.exports = router;