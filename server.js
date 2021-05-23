const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(
  process.env.MONGODB_URI || 
  "mongodb://localhost/FitnessDB", 
  {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/routes.js"));

app.listen(PORT, () => {
  console.log(`Express/Node.js server running on: http://localhost:${PORT}/ \n`);
});
