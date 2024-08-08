import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Doctor,Patient} from '../Data.js'

const PatientList = () => {
  const [doctors, setDoctors] = useState([]);
console.log(Doctor);

  useEffect(() => {
    axios.get('/api/doctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctors', error);
      });
  }, []);

  const handleLogout =()=>{
    navigate('/');

  }
  return (
    <div>
    <button style={{height:'44px',fontSize:"24px",margin:"10px"}} onClick={handleLogout}>LogOut</button>

      <h1>Patient List</h1>
      <div className="doctor-grid">
        {Patient.map(patient => (
          <div key={patient.id} className="doctor-card">
            <img className='profile' src={patient.profilePicture} alt={patient.name} />
            <h3>{patient.name}</h3>
            <p>Age: {patient.age}</p>
            <p>Email: {patient.email}</p>
            <p>Mobile: {patient.phoneNumber}</p>
            <p>History of Surgery: {patient.historyOfSurgery}</p>
            <p>History of Illness: {patient.historyOfIllness}</p>

            <Link to={`/prescription/${patient.id}`}>
              <button className='button'>Write Prescription</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
