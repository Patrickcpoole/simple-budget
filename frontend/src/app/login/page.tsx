// src/components/Login.tsx
"use client"
import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from 'react-redux';
import Image from 'next/image'
import Logo from '../../../public/wealthfront-logo.png'
// Import your login action creator
// import { loginAction } from 'path-to-your-actions';

interface LoginFormInputs {
    email: string;
    password: string;
}

export default function Login() {
    const {register, handleSubmit} = useForm<LoginFormInputs>();
    const dispatch = useDispatch();

    const onSubmit = (data: LoginFormInputs) => {
        // Replace 'loginAction' with your actual login action creator
        // dispatch(loginAction(data));
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <Image
						src={Logo}
						alt="Wealthfront Logo"
						width={500}
						height={300}

					/>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                    <input
                        {...register('email')}
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                    />
                    <input
                        {...register('password')}
                        type="password"
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Password"
                    />
                    <div className="flex justify-around mt-6">
                        <button
                            type="submit"
                            className="bg-white w-[48%] mr-[2%] outline outline-primary hover:bg-blue-700 text-primary  py-2 px-4 rounded"
                        >
                            Log In
                        </button>
                        <button

                            className="bg-primary w-[48%] ml-[2%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
