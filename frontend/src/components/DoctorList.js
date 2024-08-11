import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Doctor,Patient} from '../Data.js'
import { useNavigate } from 'react-router-dom';

const DoctorList = () => {
  const navigate = useNavigate();

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
    <div style={{background:"beige"}}>
    <button style={{height:'44px',fontSize:"24px",margin:"10px"}} onClick={handleLogout}>LogOut</button>
      <h1 style={{marginLeft:"10%"}}>Doctors List</h1>

      <div className="doctor-grid">
        {Doctor.map(doctor => (
          <div key={doctor.id} className="doctor-card">
            <img className='profile' src={doctor.profilePicture} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p>Specialty: {doctor.specialty}</p><span></span>
            <Link to={`/consultation/${doctor.id}`}>
              <button className='button'>Consult</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
