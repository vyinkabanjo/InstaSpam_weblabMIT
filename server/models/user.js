const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  microsoftid: String,
  readEmailsDisplay: Boolean,
  militaryClockDisplay: Boolean,
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
