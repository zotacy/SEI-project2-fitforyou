const express = require("express");
const router = express.Router();

const User = require("../models").User;
const Exercise = require("../models").Exercise;
const Workout = require("../models").Workout;
const Difficulty = require("../models").Difficulty;
const UserExercise = require("../models").UserExercise;

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  User.findByPk(req.params.id).then((userProfile) => {
    res.render("users/profile.ejs", {
      user: userProfile,
    });
  });
});

//EDIT USER PROFILE
router.put('/profile/:id', (req, res) => { //:index is the index of our users array that we want to change
	User.update(req.body, { //in our users array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
        where: {id: req.params.id},
        returning: true,
    }).then((user)=>{
        res.redirect(`/users/profile/${req.params.id}`); //redirect to the index page
    });   
});

//DELETE USER PROFILE
router.delete('/:id', (req,res)=>{
    User.destroy({ where: {id: req.params.id} }).then(() => {
        console.log(req.params.id);
        res.redirect('/')
    });
});

// GET LOGOUT
router.get("/logout", (req, res) => {
  res.render("/users/index.ejs", {
  });
});

// ---------------- USER LINKS ---------------------- //
//GET NEW WORKOUT FORM
router.get("/profile/:id/workouts/newWorkout", (req, res) => {
  User.findByPk(req.params.id, {
      include: [{model: Exercise}],
  }).then((userId) => {
      Exercise.findAll().then((allExercises) => {
        res.render("newWorkout.ejs", {
          exercises: allExercises,
          user: userId,
      });
    });
  });
});

//POST ==> CREATES WORKOUT
router.post('/profile/:id/workouts', (req,res)=> {
  Workout.create(req.body).then((newWorkout) => { 
    res.redirect(`/users/profile/${req.params.id}/workouts`) 
  });
});

//GET WORKOUTS PAGE
router.get("/profile/:id/workouts", (req, res) => {
  User.findByPk(req.params.id, {
    include: [{model: Workout}],
  }).then((userId) => {
    Workout.findAll().then((allWorkouts) => {
      res.render("workouts.ejs", {
        workouts: allWorkouts,
        user: userId,
      });
    });
  });
});

//GET SPECIFIC WORKOUTS
router.get("/profile/:id/workouts/:id", (req, res) => {
  Workout.findByPk(req.params.id, {
    where: {id:req.params.id},
    include: [{model: User, attributes: ["id"]}],
  }).then((workoutId) => {
    User.findByPk(2, {
      where: {id:req.params.id},
    }).then((userId) => {
      res.render("showWorkout.ejs", {
        workouts: workoutId,
        user: userId
      });
    });
  });
});

//EDIT WORKOUT
router.put("/profile/:userId/workouts/:workoutId", (req, res) => { 
  // console.log("READING EDIT", req.params.userId)
  // console.log("READING EDIT", req.params.workoutId)
  User.findByPk(req.params.userId, {
    include: [{model: Workout}],
    attributes: ["id"],
  }).then((userId) => {
    Workout.update(req.body, { 
      where: {id: req.params.workoutId},
        returning: true,
    }).then((user)=>{
      // sending back with updated view
        res.redirect('back');
    });
  });   
});

//DELETE WORKOUT
router.delete("/profile/:id/workouts/:id", (req,res)=>{
  console.log("delete", req.params.id),
  Workout.destroy({ where: {id: req.params.id} }).then(() => {
      console.log(req.params.id);
      res.redirect(`/users/profile/${req.params.id}`)
  });
});

//LISTEN
module.exports = router;
