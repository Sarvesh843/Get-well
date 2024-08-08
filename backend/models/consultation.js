const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
  currentIllnesHistory: {
    type: String, 
  },
  recentSurgery: {
    type: String,
  },
  familyMedicalHistory: {
    type: String
  },
  allergies: {
    type: String
  },
  others: {
    type: String
  }
}, {
  timestamps: true
});


const Consultation = mongoose.model("Consultation", consultationSchema);
module.exports = Consultation;