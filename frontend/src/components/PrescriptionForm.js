import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import {Doctor,Patient} from '../Data.js'
import { useNavigate } from 'react-router-dom';

const PrescriptionForm = () => {
const navigate = useNavigate();

  const { consultationId } = useParams();
  const {patientData, setPatientData} =useState([]);
  const [consultation, setConsultation] = useState(null);
  const [prescription, setPrescription] = useState({
    careToBeTaken: '',
    Medicine: '',
  });
  let data1;
  
  console.log(consultationId);
 
  useEffect(() => {
    console.log(Patient);
    Patient.forEach((data)=>{
      if (data.id == consultationId) { 
        data1=data;
        // setPatientData(data);
      }
    })
    console.log(patientData);
    console.log(data1);
    
    // axios.get(`/api/consultations/${consultationId}`)
    //   .then(response => {
    //     setConsultation(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching consultation details', error);
    //   });
  }, [consultationId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrescription((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const pdf = new jsPDF();
    // pdf.text(`Care: ${prescription.careToBeTaken}`, 10, 10);
    // pdf.text(`Medicines: ${prescription.Medicine}`, 10, 20);
    // pdf.save(`prescription_${consultationId}.pdf`);
    axios.post("https://get-well.onrender.com/api/priscribe ", prescription)
      .then(response => {
        navigate('/patient');

        alert('Prescription submitted successfully!');
      })
      .catch(error => {
        alert('Error submitting prescription');
      });
  };

  // if (!consultation) return <div>Loading...</div>;
  const handleLogout =()=>{
    navigate('/');

  }
  return (
    <div>
   <button style={{height:'44px',fontSize:"24px",margin:"10px"}} onClick={handleLogout}>LogOut</button>
      <form onSubmit={handleSubmit}>
        {/* <h2>Prescription for {data1.name}</h2> */}
        <div>
          <label>Care</label>
          <textarea name="careToBeTaken" value={prescription.careToBeTaken} onChange={handleChange} required />
        </div>
        <div>
          <label>Medicines</label>
          <textarea name="Medicine" value={prescription.Medicine} onChange={handleChange} required />
        </div>
        <button type="submit">Submit Prescription</button>
      </form>
   </div>
  );
};

export default PrescriptionForm;
