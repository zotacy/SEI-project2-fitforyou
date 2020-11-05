const express = require("express");
const router = express.Router();

const User = require("../models").User;
const Exercise = require("../models").Exercise;
const Workout = require("../models").Workout;

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
//GET NEW WOROKOUT
router.get("/newWorkout", (req, res) => {
    res.render("newWorkout.ejs");
});

//GET WORKOUT
router.get("/showWorkout", (req, res) => {
  res.render("showWorkout.ejs");
});

//LISTEN
module.exports = router;
