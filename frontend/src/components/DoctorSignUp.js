import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const DoctorSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    profilePicture: '',
    name: '',
    specialty: '',
    email: '',
    password:'',
    phoneNumber: '',
   
    yearsOfExp: '',
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
    console.log(formData);
    
    // navigate('/patient');
    axios.post("https://get-well.onrender.com/api/auth/signup/doctor" , formData)
      .then((response) => {
        console.log(response);
        navigate('/patient');
        alert('Doctor signed up successfully!');
      })
      .catch((error) => {
        alert('Error signing up doctor');
      });
  };

  return (
    <div className='DoctorSignup'>
    <form style={{border:'1px solid black', padding:'10px'}} onSubmit={handleSubmit}>
      <div>
        <label>Profile Picture</label>
        <input type="file" name="profilePicture" onChange={handleChange} />
      </div>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Specialty</label>
        <input type="text" name="specialty" value={formData.specialty} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone Number</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>Years of Experience</label>
        <input type="number" step="0.1" name="yearsOfExp" value={formData.yearsOfExp} onChange={handleChange} required />
      </div>
      <div style={{textAlign:'center'}}>
      <button type="submit">Sign Up</button>

      {/* <Link to={`/patient`}>
      <button type="submit">Sign Up</button>

      </Link> */}
      </div>
    </form>
    </div>
  );
};

export default DoctorSignUp;
