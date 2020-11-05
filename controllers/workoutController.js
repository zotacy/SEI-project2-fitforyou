const express = require("express");
const router = express.Router();

const Workout = require("../models").Workout;
const Exercise = require("../models").Exercise;
const Difficulty = require("../models").Difficulty;
const User = require("../models").User;

//GET NEW WORKOUT FORM
router.get("/newWorkout", (req, res) => {
    Workout.findByPk(req.params.id, {
        include: [{model: Excercise},{model: Difficulty}],
    }).then((selectWorkout) =>{
        Exercise.findAll().then((allExercises) =>{
            res.render("newWorkout.ejs", {
                workout: selectWorkout,
                exercises: allExercises,
            });
        });
    });
});

//POST ==> CREATES NEW WORKOUT
router.post('/showWorkout', (req,res)=> {
    Workout.create(req.body).then((newWorkout) => { 
      Exercise.create({
        exerciseId: req.body.exerciseId,
        workoutId: newWorkout.id
      })
      res.redirect(`/users/profile/${req.params.id}`) 
    });
});

//EDIT WORKOUT
router.put('/:id', (req, res) => { //:id of workout to edit in workout array
    Workout.update(req.body, { //in our users array, find the id specified in the url (:index).  Set that element to the value of req.body (the input data)
        where: {id: req.params.id},
        returning: true,
    }).then((user)=>{
        res.redirect(`/users/profile/$${req.params.id}`); 
    });   
});

//DELETE WORKOUT
router.delete('/:id', (req,res)=>{
    Workout.destroy({ where: {id: req.params.id} }).then(() => {
        console.log(req.params.id);
        res.redirect(`/users/profile/${req.params.id}`)
    });
});

// LISTEN
module.exports = router;