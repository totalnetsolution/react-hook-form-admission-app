import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdmissionForm from './components/AdmissionForm';
import VerifyAdmission from './components/VerifyAdmission';
import Navbar from './components/Navbar'; 

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AdmissionForm />} />
        <Route path="/verify" element={<VerifyAdmission />} />
      </Routes>
    </div>
  );
};

export default App;
