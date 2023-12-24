// In your thunk file
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setUser as setUserFromUserSlice } from "../user/user-slice";

type LoginFormInputs = {
    email: string;
    password: string;
};

export const loginUserThunk = createAsyncThunk(
  'auth/loginUser',
  async (loginData: LoginFormInputs, { dispatch }) => {
    try {
      const response = await fetch('http://127.0.0.1:4000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        dispatch(setUserFromUserSlice(data.user)); // Dispatching action
        return data; // Resolve the promise with data
      } else {
        // Reject the promise with an error message
        return Promise.reject(data.error || 'Login failed');
      }
    } catch (error:any) {
      // Reject the promise with an error message
      return Promise.reject(error.message || 'Error during login');
    }
  }
);
