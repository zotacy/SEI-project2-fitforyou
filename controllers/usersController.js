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
router.delete('/profile/:id', (req,res)=>{
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
router.get("/newWorkout", (req, res) => {
  User.findByPk(req.params.id, {
      include: [{model: Exercise}],
  }).then((singleUser) =>{
      Exercise.findAll().then((allExercises) => {
        res.render("newWorkout.ejs", {
          exercises: allExercises,
      });
    });
  });
});
//GET SHOW WORKOUT
router.get("/showWorkout", (req, res) => {
  res.render("showWorkout.ejs")
});

//POST ==> CREATES NEW WORKOUT
router.post('/showWorkout', (req,res)=> {
    Workout.create(req.body).then((newWorkout) => { 
      res.redirect(`/users/showWorkout`) 
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

//LISTEN
module.exports = router;
