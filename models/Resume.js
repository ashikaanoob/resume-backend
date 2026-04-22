const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  education: String,
  skills: String,
  experience: String,
  projects: String
});

module.exports = mongoose.model("Resume", resumeSchema);