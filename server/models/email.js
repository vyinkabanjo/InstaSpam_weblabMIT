const mongoose = require("mongoose");

//define an email schema for the database
const EmailSchema = new mongoose.Schema({
  senderEmail: String,
  senderName: String,
  header: String,
  hasAttachment: Boolean,
  attachments: Array, //will contain base64 encoded text
  emailID: String,
  content: String,
  links: Array,
  times: Array,
  relevantDates: Array,
  venue: String,
  emailURL: String,
  isRead: Boolean,
  isFlagged: Boolean,
  timeReceived: Date,
});

// compile model from schema
module.exports = mongoose.model("email", EmailSchema);
