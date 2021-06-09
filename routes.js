const router = require("express").Router();
const path = require("path");
const Workout = require("./models/workout.js");

const aggregate = Workout.aggregate([
  {$addFields: {"exercises.totalDuration": { $sum: "$exercises.duration" }}} 
]);

//route for getting all workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    aggregate
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
     
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// route for creating new workout
router.post("/api/workouts",  ({body}, res) => {
  Workout.create({})
  .then((dbWorkout) => {
    res.json(dbWorkout);
  })
  .catch((err) => {
    res.json(err);
  });
});

// add exercise to existing workout
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id,
   { $push: {exercises: req.body}}, 
   {new: true} 
   ).then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//get last 7 workouts
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    aggregate
    .limit(7)
    .sort({date: -1})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// routes for rendering exercise and dashboard
  router.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, '/public/exercise.html')));

  router.get('/stats', (req, res) => res.sendFile(path.join(__dirname, '/public/stats.html')));

module.exports = router;

