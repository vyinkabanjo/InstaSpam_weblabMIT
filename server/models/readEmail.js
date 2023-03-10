const mongoose = require("mongoose");

//define an email schema for the database
const readEmailSchema = new mongoose.Schema({
  userID: String,
  subject: String,
  emailID: String,
});

// compile model from schema
module.exports = mongoose.model("readEmail", readEmailSchema);
