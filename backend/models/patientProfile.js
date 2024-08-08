const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    unique: true
  },
  roleType: {
    type: Number
  },
  profilePicture: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  age: {
    type: String
  },
  historyOfSurgery: {
    type: String
  },
  historyOfillness: {
    type: String
  }
}, {
  timestamps: true
});


const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;