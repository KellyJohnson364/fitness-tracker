const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    required: "Select a workout type"
  },
  name: {
    type: String,
    required: "Enter workout name"
  },
  duration: {
    type: Number,
    required: "Enter duration"
  },
  weight: {
    type: Number,
    required: "Enter weight"
  },
  reps: {
    type: Number,
    required: "Enter Reps"
  },
  sets: {
    type: Number,
    required: "Enter Sets"
  },
  distance: {
    type: Number,
    required: "Enter Distance"
  },
  date: {
    type: Date,
    default: Date.now
  }
  
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
