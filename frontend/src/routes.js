import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DoctorSignUp from './components/DoctorSignUp';
import PatientSignUp from './components/PatientSignUp';
import DoctorList from './components/DoctorList';
import DoctorConsultationForm from './components/DoctorConsultationForm';
import DoctorProfile from './components/DoctorProfile';
import PrescriptionForm from './components/PrescriptionForm';
import PatientList from './components/PatientList';
import Home from './components/Home';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/doctor-signup" element={<DoctorSignUp />} />
    <Route path="/patient-signup" element={<PatientSignUp />} />
    <Route path="/doctors" element={<DoctorList />} />
    <Route path="/patient" element={<PatientList />} />
    <Route path="/consultation/:doctorId" element={<DoctorConsultationForm />} />
    <Route path="/doctor-profile/:doctorId" element={<DoctorProfile />} />
    <Route path="/prescription/:consultationId" element={<PrescriptionForm />} />
  </Routes>
);

export default AppRoutes;
