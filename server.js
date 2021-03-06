const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(
  process.env.MONGODB_URI || 
  "mongodb://localhost/fitness", 
  {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes.js"));

app.listen(PORT, () => {
  console.log(`Express/Node.js server running on: http://localhost:${PORT}/ \n`);
});
