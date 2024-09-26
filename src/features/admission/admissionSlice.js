import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  applicants: [],
  currentApplicant: null,
};

const admissionSlice = createSlice({
  name: 'admission',
  initialState,
  reducers: {
    addApplicant: (state, action) => {
      state.applicants.push(action.payload);
    },
    verifyApplicant: (state, action) => {
      const cnic = action.payload;
      state.currentApplicant = state.applicants.find(applicant => applicant.cnic === cnic) || null;
    },
  },
});

export const { addApplicant, verifyApplicant } = admissionSlice.actions;
export default admissionSlice.reducer;
