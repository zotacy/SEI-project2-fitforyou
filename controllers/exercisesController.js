const express = require("express");
const router = express.Router();

const ExerciseModel = require("../models").Exercise;
const UserModel = require("../models").User;

// GET Exercises
router.get("/exercise/:id", (req, res) => {
  console.log(req.exercise);
  ExerciseModel.findByPk(req.params.id).then((exerciseTab) => {
    res.render("show.ejs", {
      exercise: exerciseTab,
    });
  });
});

// GET USERS 
router.get("/exercise/:id", (req, res) => {
  console.log(req.exercise);
  UserModel.findByPk(req.params.id).then((users) => {
    res.render("show.ejs", {
      user: users,
    });
  });
});
module.exports = router;