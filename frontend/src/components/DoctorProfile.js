import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const DoctorProfile = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    axios.get(`/api/doctors/${doctorId}`)
      .then(response => {
        setDoctor(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctor profile', error);
      });
  }, [doctorId]);

  if (!doctor) return <div>Loading...</div>;

  return (
    <div>
      <h1>{doctor.name}'s Profile</h1>
      <img src={doctor.profilePicture} alt={doctor.name} />
      <p>Specialty: {doctor.specialty}</p>
      <p>Email: {doctor.email}</p>
      <p>Phone Number: {doctor.phoneNumber}</p>
      <p>Years of Experience: {doctor.yearsOfExperience}</p>
      <Link to={`/prescription/${doctorId}`}>
        <button>View Prescriptions</button>
      </Link>
    </div>
  );
};

export default DoctorProfile;
