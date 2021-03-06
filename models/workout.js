const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  day: {
    type: Date,
    default:  () => new Date(),
  },
  exercises: [
  {
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
    
  },
  reps: {
    type: Number,
    
  },
  sets: {
    type: Number,
    
  },
  distance: {
    type: Number,
   
  },
},
],
 
  
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
