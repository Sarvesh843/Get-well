const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
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
  yearsOfExp: {
    type: String
  }
}, {
  timestamps: true
});


const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;