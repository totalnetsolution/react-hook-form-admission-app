import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addApplicant } from '../features/admission/admissionSlice';
import { useNavigate } from 'react-router-dom';

const AdmissionForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(addApplicant(data));
    alert('Form submitted successfully');
    navigate('/verify');
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: '#eaf4f9', padding: '20px', borderRadius: '8px' }}>
      <h2 className="text-center mb-4">Admission Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-3">
          <label>Full Name</label>
          <input
            type="text"
            {...register('fullName', { required: true })}
            className="form-control"
          />
          {errors.fullName && <span className="text-danger">Full Name is required</span>}
        </div>

        <div className="mb-3">
          <label>Father Name</label>
          <input
            type="text"
            {...register('fatherName', { required: true })}
            className="form-control"
          />
          {errors.fatherName && <span className="text-danger">Father Name is required</span>}
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="form-control"
          />
          {errors.email && <span className="text-danger">Email is required</span>}
        </div>

        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="tel"
            {...register('phone', { required: true })}
            className="form-control"
          />
          {errors.phone && <span className="text-danger">Phone Number is required</span>}
        </div>

        <div className="mb-3">
          <label>CNIC</label>
          <input
            type="text"
            {...register('cnic', { required: true, minLength: 13, maxLength: 13 })}
            className="form-control"
          />
          {errors.cnic && <span className="text-danger">Valid CNIC is required</span>}
        </div>

        <div className="mb-3">
          <label>Date of Birth</label>
          <input
            type="date"
            {...register('dob', { required: true })}
            className="form-control"
          />
          {errors.dob && <span className="text-danger">Date of Birth is required</span>}
        </div>

        <div className="mb-3">
          <label>Gender</label>
          <select {...register('gender', { required: true })} className="form-control">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Do you have a laptop?</label>
          <select {...register('laptop', { required: true })} className="form-control">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            {...register('address', { required: true })}
            className="form-control"
          />
          {errors.address && <span className="text-danger">Address is required</span>}
        </div>

        <div className="mb-3">
          <label>Last Qualification</label>
          <input
            type="text"
            {...register('qualification', { required: true })}
            className="form-control"
          />
          {errors.qualification && <span className="text-danger">Qualification is required</span>}
        </div>

        <div className="mb-3">
          <label>Upload your recent passport-size picture</label>
          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            {...register('profileImage', { required: true })}
            className="form-control"
          />
          <ul className="mt-2 text-muted">
            <li>With white or blue background</li>
            <li>File type: jpg, jpeg, png</li>
            <li>Your face should be clearly visible without any glasses</li>
          </ul>
          {errors.profileImage && <span className="text-danger">Profile image is required</span>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AdmissionForm;
