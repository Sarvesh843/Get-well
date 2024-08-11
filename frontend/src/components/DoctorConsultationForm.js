import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const DoctorConsultationForm = () => {
  const navigate = useNavigate();

  const { doctorId } = useParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    currentIllnesHistory: "",
    recentSurgery: "",
    familyMedicalHistory: "",
    allergies: "",
    others: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://get-well.onrender.com/api/consult", formData)
      .then((response) => {
        navigate('/doctors');

        alert("Consultation details submitted successfully!");
      })
      .catch((error) => {
        alert("Error submitting consultation details");
      });
  };
  const handleLogout =()=>{
    navigate('/');

  }
  const renderStep = () => {

    switch (step) {
      case 1:
        return (
          <div className="DoctorConsultant-outer">
          <button style={{height:'44px',fontSize:"24px",margin:"10px"}} onClick={handleLogout}>LogOut</button>

            <div className="DoctorConsultant-inner">
              <div style={{margin: '10px'}}>
                <label>Current Illness History</label>
                <input
                  type="text"
                  name="currentIllnesHistory"
                  value={formData.currentIllnesHistory}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{margin: '10px'}}>
                <label>Recent Surgery</label>
                <input
                  type="text"
                  name="recentSurgery"
                  value={formData.recentSurgery}
                  onChange={handleChange}
                />
              </div>
              <div className="DoctorConsultant-button">
              <button style={{height: '30px', width:'40%'}} type="button" onClick={() => setStep(2)}>
                Next
              </button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="DoctorConsultant-outer">
          <div className="DoctorConsultant-inner">
            <h3>Family Medical History</h3>
            <div>
              <label>Diabetics</label>
              <select
                name="familyMedicalHistory"
                value={formData.familyMedicalHistory}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Diabetics">Diabetics</option>
                <option value="Non-Diabetics">Non-Diabetics</option>
              </select>
            </div>
            <div>
              <label>Allergies</label>
              <input
                type="text"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Others</label>
              <input
                type="text"
                name="others"
                value={formData.others}
                onChange={handleChange}
              />
            </div>
            <button type="button" onClick={() => setStep(1)}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <form onSubmit={handleSubmit}>{renderStep()}</form>;
};

export default DoctorConsultationForm;
