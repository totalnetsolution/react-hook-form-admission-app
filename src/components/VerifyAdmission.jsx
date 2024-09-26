import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyApplicant } from '../features/admission/admissionSlice';

const VerifyAdmission = () => {
  const [cnic, setCnic] = useState('');
  const dispatch = useDispatch();
  const applicant = useSelector(state => state.admission.currentApplicant);

  const handleVerify = () => {
    dispatch(verifyApplicant(cnic));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Verify Admission</h2>
      <div className="mb-3">
        <label>Enter CNIC</label>
        <input
          type="text"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          className="form-control"
          placeholder="Enter CNIC to verify"
        />
        <button onClick={handleVerify} className="btn btn-primary mt-2">Verify</button>
      </div>

      {applicant ? (
        <div className="mt-4">
          <h3>Applicant Details</h3>
          <p><strong>Name:</strong> {applicant.fullName}</p>
          <p><strong>Father Name:</strong> {applicant.fatherName}</p>
          <p><strong>Email:</strong> {applicant.email}</p>
          <p><strong>Phone:</strong> {applicant.phone}</p>
          <p><strong>CNIC:</strong> {applicant.cnic}</p>
          <p><strong>Date of Birth:</strong> {applicant.dob}</p>
          <p><strong>Gender:</strong> {applicant.gender}</p>
          <p><strong>Laptop:</strong> {applicant.laptop}</p>
          <p><strong>Address:</strong> {applicant.address}</p>
          <p><strong>Qualification:</strong> {applicant.qualification}</p>
        </div>
      ) : (
        <p className="text-danger mt-3">No applicant found with this CNIC</p>
      )}
    </div>
  );
};

export default VerifyAdmission;
