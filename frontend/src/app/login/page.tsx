"use client";

import React from 'react';
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import Link from 'next/link';
import {useRouter} from "next/navigation";
import {useDispatch} from 'react-redux';
import type {AppDispatch} from '@/redux/store';
import {loginUserThunk} from '@/redux/features/auth/auth-thunk';
import toast from "react-hot-toast";


interface LoginFormInputs {
    email: string;
    password: string;
}

interface InputInfo {
    name: keyof LoginFormInputs;
    type: string;
    placeholder: string;
}

const inputInfoArray: InputInfo[] = [
    {name: 'email', type: 'email', placeholder: 'Email'},
    {name: 'password', type: 'password', placeholder: 'Password'},
];

const loginValidationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
});

export default function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormInputs>({
        resolver: yupResolver(loginValidationSchema),
    });
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const onSubmit = (data: LoginFormInputs) => {
        dispatch(loginUserThunk(data))
            .unwrap()
            .then(() => {
                router.push("/dashboard");
            })
            .catch((error) => {
                const errorMessage = error.response?.data?.error || error.message;

                if (errorMessage === "Invalid email or password") {
                    toast.error('Invalid email or password');
                } else {
                    toast.error('Something is wrong. Please contact patrickcpoole@gmail.com');
                }

                console.error('Login failed:', error);
            });
    };

    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-auto items-center"
        >


            {inputInfoArray.map(({ name, placeholder, type }, index) => (
                <div key={name} className="relative w-[98%] flex flex-col">
                    <input
                        {...register(name)}
                        type={type}
                        autoComplete={name === 'password' ? 'current-password' : 'on'}
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={placeholder}
                    />
                    {errors[name] && (
                        <span className="text-red-500 text-sm mt-1">
                            {errors[name]?.message}
                        </span>
                    )}
                </div>
            ))}

            <div className="flex mt-6">
                <button
                    style={{borderColor: '#4840bb'}}
                    type="submit"
                    className="bg-white h-12 w-48 mr-[1%] border  hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 rounded"
                >
                    Log In
                </button>

                <Link href={"/create-account"}>
                    <button
                        type="button"
                        className="bg-primary h-12 w-48 ml-[1%] hover:bg-custom-gradient text-white font-bold py-2 px-4 rounded"
                    >
                        Create Account
                    </button>
                </Link>
            </div>
        </form>

    );
};
