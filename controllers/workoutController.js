const express = require("express");
const router = express.Router();

const WorkoutModel = require("../models").Workout;
const ExerciseModel = require("../models").Exercise;
const UserModel = require("../models").User;

//GET NEW WORKOUT FORM
router.get("/newWorkout", (req, res) => {
    res.render("newWorkout.ejs");
});

//POST ==> CREATES NEW WORKOUT
router.post('/showWorkout', (req,res)=> {
    WorkoutModel.create(req.body).then((newWorkout) => { 
      ExerciseModel.create({
        exerciseId: req.body.exerciseId,
        workoutId: newWorkout.id
      })
      res.redirect(`/users/profile/${req.params.id}`) 
    });
});

//EDIT WORKOUT
router.put('/:id', (req, res) => { //:id of workout to edit in workout array
    WorkoutModel.update(req.body, { //in our users array, find the id specified in the url (:index).  Set that element to the value of req.body (the input data)
        where: {id: req.params.id},
        returning: true,
    }).then((user)=>{
        res.redirect(`/users/profile/$${req.params.id}`); 
    });   
});

//DELETE WORKOUT
router.delete('/:id', (req,res)=>{
    WorkoutModel.destroy({ where: {id: req.params.id} }).then(() => {
        console.log(req.params.id);
        res.redirect(`/users/profile/${req.params.id}`)
    });
});

// LISTEN
module.exports = router;