import { configureStore } from '@reduxjs/toolkit';
import admissionReducer from '../features/admission/admissionSlice';

export const store = configureStore({
  reducer: {
    admission: admissionReducer,
  },
});
