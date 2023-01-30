const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  microsoftid: String, // this will be the "homeid" of a microsoft account
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
