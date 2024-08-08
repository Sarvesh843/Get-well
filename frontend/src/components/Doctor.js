import React, { useState } from 'react';

const DoctorSignUp = () => {
  const [doctor, setDoctor] = useState({
    profilePicture: null,
    name: '',
    specialty: '',
    email: '',
    phoneNumber: '',
    yearsOfExperience: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleFileChange = (e) => {
    setDoctor({ ...doctor, profilePicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, API call
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} required />
      <input type="text" name="name" value={doctor.name} onChange={handleInputChange} placeholder="Name" required />
      <input type="text" name="specialty" value={doctor.specialty} onChange={handleInputChange} placeholder="Specialty" required />
      <input type="email" name="email" value={doctor.email} onChange={handleInputChange} placeholder="Email" required />
      <input type="tel" name="phoneNumber" value={doctor.phoneNumber} onChange={handleInputChange} placeholder="Phone Number" required />
      <input type="number" name="yearsOfExperience" value={doctor.yearsOfExperience} onChange={handleInputChange} placeholder="Years of Experience" step="0.1" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default DoctorSignUp;