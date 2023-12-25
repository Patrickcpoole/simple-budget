"use client"

import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux';
import {AppDispatch} from "../../redux/store";
import {createUserThunk} from "../../redux/features/user/user-thunks";

import Link from "next/link";
import {useForm} from "react-hook-form";
import * as yup from 'yup'; // Import yup for validation
import {yupResolver} from '@hookform/resolvers/yup';
import {useRouter} from "next/navigation";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";


interface CreateAccountFormInputs {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

interface InputInfo {
    name: keyof CreateAccountFormInputs;
    type: string;
    placeholder: string;
}

const validationSchema = yup.object().shape({
    first_name: yup.string().required('First Name is required'),
    last_name: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    password_confirmation: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
});

const inputInfoArray: InputInfo[] = [
    {name: "first_name", type: 'text', placeholder: 'First Name'},
    {name: 'last_name', type: 'text', placeholder: 'Last Name'},
    {name: 'email', type: 'email', placeholder: 'Email'},
    {name: 'password', type: 'password', placeholder: 'Password'},
    {name: 'password_confirmation', type: 'password', placeholder: 'Confirm Password'},
];


export default function CreateAccount() {
    const {register, handleSubmit, formState: {errors}, reset, trigger} = useForm({
        resolver: yupResolver(validationSchema),
    });

    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const dispatch = useDispatch<AppDispatch>();
    const onSubmit = (data: CreateAccountFormInputs) => {
        dispatch(createUserThunk(data))
            .unwrap()
            .then((user) => {
                console.log('User created:', user);
                router.push('/login'); // or another route as needed
            })
            .catch((error) => {
                console.error('Failed to create user:', error);
                // Here you can handle errors or show additional messages if needed
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-2 w-full">
            {inputInfoArray.map(({name, placeholder, type}, index) => (
                <div key={name} className="relative w-[90%] lg:w-[50%] flex flex-col items-center">
                    {['password', 'password_confirmation'].includes(name) ? (
                        <>
                            <input
                                {...register(name)}
                                type={showPassword ? "text" : "password"}
                                className="border border-gray-300 w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder={placeholder}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 mb-4 right-0 pr-3 flex items-center justify-center text-sm leading-5"
                            >
                                {showPassword ? <AiOutlineEyeInvisible size={20} color={"#4840bb"}/> :
                                    <AiOutlineEye size={20} color={"#4840bb"}/>}
                            </button>
                        </>
                    ) : (
                        <input
                            {...register(name)}
                            type={type}
                            className="border border-gray-300 w-full p-2 w-[98%] rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder={placeholder}
                        />
                    )}
                    <div className="h-4">
                        <span className="text-red-500 text-sm ml-1">
                            {errors[name]?.message}
                        </span>
                    </div>
                </div>
            ))}
            <div className="flex mt-6 w-full">
                <Link href={"/login"} className="w-[50%] flex justify-end items-end ">
                    <button
                        style={{borderColor: '#4840bb'}}
                        type="button"
                        className="bg-white h-12  lg:w-[50%] md:w-[60%] w-[80%] mr-[1%] border text-sm  hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 rounded"
                    >
                        Back
                    </button>
                </Link>
                <div className="w-[50%] flex justify-start items-end ">
                    <button
                        type="submit"
                        className="bg-primary h-12 lg:w-[50%] md:w-[60%] w-[80%]  ml-[1%] text-sm lg:text-md lg:text-md hover:bg-custom-gradient text-white font-bold py-2 px-4 rounded"
                    >
                        Create Account
                    </button>
                </div>
            </div>
        </form>

    );
}