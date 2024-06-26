// store.js
import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlice';

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});

export default store;
