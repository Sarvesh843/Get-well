import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const PatientSignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    profilePicture: "",
    name: "",
    age: "",
    email: "",
    password:"",
    phoneNumber: "",
    historyOfSurgery: "",
    historyOfillness: "",
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
      .post("https://get-well.onrender.com/api/auth/signup/patient", formData)
      .then((response) => {
        navigate('/doctors');
        alert("Patient signed up successfully!");
      })
      .catch((error) => {
        alert("Error signing up patient");
      });
  };

  return (
    <div className="DoctorSignup">
      <form
        style={{ border: "1px solid black", padding: "10px" }}
        onSubmit={handleSubmit}
      >
        <div>
          <label>Profile Picture</label>
          <input type="file" name="profilePicture" onChange={handleChange} />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>History of Surgery</label>
          <input
            type="text"
            name="historyOfSurgery"
            value={formData.historyOfSurgery}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>History of Illness</label>
          <input
            type="text"
            name="historyOfillness"
            value={formData.historyOfillness}
            onChange={handleChange}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default PatientSignUp;
