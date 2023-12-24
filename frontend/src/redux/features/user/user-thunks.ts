// src/redux/features/user/user-thunks.js
import {createAsyncThunk} from '@reduxjs/toolkit';
import {resetUser,  setUser as setUserFromUserSlice } from './user-slice';
import toast from 'react-hot-toast';

interface CreateUserInputs {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const createUserThunk = createAsyncThunk(
    'user/createUser',
    async (userData: CreateUserInputs, thunkAPI) => {
        try {
            const response = await fetch('http://127.0.0.1:4000/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user: userData }),
            });

            const responseBody = await response.json();

            if (response.ok) {
                thunkAPI.dispatch(setUserFromUserSlice(responseBody.user));
                toast.success('User successfully created!');
                return responseBody.user;
            } else {
                if (responseBody.details?.email?.[0] === "has already been taken") {
                    toast.error('Email is already in use');
                } else {
                    toast.error('Failed to create user');
                }
                return thunkAPI.rejectWithValue(responseBody);
            }
        } catch (error:any) {
            console.error('Error creating user:', error);
            toast.error('There was an error');
            return thunkAPI.rejectWithValue(error.message || 'Error during user creation');
        }
    }
);

export const deleteUserThunk = createAsyncThunk(
    'user/deleteUser',
    async (userId: number, thunkAPI) => {
        try {
            const response = await fetch(`http://127.0.0.1:4000/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    // Add your headers here (e.g., for authentication)
                },
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                toast.error('Error deleting user');
                return thunkAPI.rejectWithValue(errorResponse);
            }

            thunkAPI.dispatch(resetUser()); // Reset user data
            toast.success('User successfully deleted.');
            return userId; // You can return a value indicating successful deletion
        } catch (error:any) {
            console.error('Error deleting user:', error);
            toast.error('Error during user deletion');
            return thunkAPI.rejectWithValue(error.message || 'Error during user deletion');
        }
    }
);





































