const express = require("express");
const router = express.Router();

const ExerciseModel = require("../models").Exercise;

// GET USERS PROFILE
router.get("/exercise/:id", (req, res) => {
  console.log(req.exercise);
  ExerciseModel.findByPk(req.params.id).then((exerciseTab) => {
    res.render("show.ejs", {
      exercise: exerciseTab,
    });
  });
});

module.exports = router;