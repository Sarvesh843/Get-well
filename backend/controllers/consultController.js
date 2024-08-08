const Consultation = require("../models/consultation");
const Prescription = require("../models/prescription");

const bcrypt = require("bcrypt");
const { validateEmail } = require("../utils/validation");


exports.consultation = async (req, res) => {
  try {
    const { doctorId, patientId, currentIllnesHistory, recentSurgery, familyMedicalHistory, allergies } = req.body;

    await Consultation.create({ doctorId, patientId, currentIllnesHistory, recentSurgery, familyMedicalHistory, allergies  });
    res.status(200).json({ msg: "Congratulations!! Consultation has been created for you.." });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

exports.prescription = async (req, res) => {
  try {
    const { doctorId, patientId, careToBeTaken, Medicine } = req.body;
   
    await Prescription.create({ doctorId, patientId, careToBeTaken, Medicine });
    res.status(200).json({ msg: "Congratulations!! Prescription has been created for you.." });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}




