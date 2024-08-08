const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
      doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
      },
      patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
      },
      careToBeTaken: {
        type: String,
        
      },
      Medicine: {
        type: String,
      }
}, {
  timestamps: true
});


const Prescription = mongoose.model("Prescription", prescriptionSchema);
module.exports = Prescription;