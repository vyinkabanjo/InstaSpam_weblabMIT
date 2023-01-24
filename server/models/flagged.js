const mongoose = require("mongoose");

//define an email schema for the database
const flaggedEmailSchema = new mongoose.Schema({
  subject: String,
  // userID: String,
  emailID: String,
});

// compile model from schema
module.exports = mongoose.model("flaggedEmail", flaggedEmailSchema);
