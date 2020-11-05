const express = require("express");
const router = express.Router();

const User = require("../models").User;
const Exercise = require("../models").Exercise;
const Workout = require("../models").Workout;
const Difficulty = require("../models").Difficulty;

//LISTEN
module.exports = router;