const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
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
});


const Transaction = mongoose.model("Session", sessionSchema);

module.exports = Transaction;
