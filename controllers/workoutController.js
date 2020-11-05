const express = require("express");
const router = express.Router();

const User = require("../models").User;
const Exercise = require("../models").Exercise;
const Workout = require("../models").Workout;
const Difficulty = require("../models").Difficulty;

// //GET ==> this is our homepage database
// router.get("/", (req, res) => {
//     Workout.findAll().then((workouts) => {
//         res.render("index.ejs", {
//         workouts: workouts,
//         });
//     });
// });

// //GET ==> show form to user
// router.get('/newWorkout', (req,res)=>{
//     res.render('newWorkout.ejs');
// })
// //GET ==> get/show single object
// router.get("/:id", (req, res) => {
//     Workout.findByPk(req.params.id, {
//         include: [
//         {
//             model: User,
//             attributes: ["name"],
//         },
//         {
//             model: Exercise,
//         },
//         ],
//         attributes: ["activity_name","activty_description","activity_notes"],
//     }).then((workout) => {
//         res.render("showWorkout.ejs", {
//         workout: workout,
//         });
//     });
// });

//POST ==> Create a new workout
router.post("/", (req, res) => {
    if (req.body.difficultyId === "1") {
        req.body.difficultyId = "Easy";
    } else if (req.body.difficultyId === "2") {
        req.body.difficultyId = "Moderate";
    } else if (req.body.difficultyId === "3") {
        req.body.difficultyId = "Hard";
    }
    Workout.create(req.body).then((newWorkout) => {
        res.redirect("/workouts");
    });
});

//EDIT ==>
// //GET ==> prefill the data from the model and show form to user
// router.get("/:id/edit", function (req, res) {
//     Workout.findByPk(req.params.id).then((foundWorkout) => {
//         Exercise.findAll().then((allExercises) => {
//             res.render("edit.ejs", {
//                 workout: foundWorkout,
//                 exercises: allExercises,
//             });
//         });
//     });
// });

//PUT ==> update the data in our model
router.put("/:id", (req, res) => {
    if (req.body.difficultyId === "1") {
        req.body.difficultyId = "Easy";
    } else if (req.body.difficultyId === "2") {
        req.body.difficultyId = "Moderate";
    } else if (req.body.difficultyId === "3") {
        req.body.difficultyId = "Hard";
    }
    Workout.update(req.body, {
        where: { id: req.params.id },
    returning: true,
    }).then((updatedWorkout) => {
        Exercise.findByPk(req.body.exercise).then((foundExercise) => {
            Workout.findByPk(req.params.id).then((foundWorkout) => {
                foundWorkout.addExercise(foundExercise);
                res.redirect("/workouts");
            });
        });
    });
});

//DELETE ==> delete single object 
router.delete("/:id", (req, res) => {
    Workout.destroy({ where: { id: req.params.id } }).then(() => {
        res.redirect("/workouts");
    });
});
  
 
//LISTEN
module.exports = router;