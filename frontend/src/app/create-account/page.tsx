"use client"

import React, {useEffect} from 'react'
import Link from "next/link";
import {useForm} from "react-hook-form";
import * as yup from 'yup'; // Import yup for validation
import {yupResolver} from '@hookform/resolvers/yup';

import {createUserThunk} from "@/redux/features/user/user-thunks";
import {useDispatch} from 'react-redux';
import {useRouter} from "next/navigation";
import {AppDispatch} from "@/redux/store";


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



    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 "
            >
                {inputInfoArray.map(({name, placeholder, type}, index) => (
                    <div key={name} className="relative">
                        <input
                            {...register(name)}
                            type={type}
                            className="border border-gray-300 p-2 w-[98%] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={placeholder}
                        />
                        {errors[name] && (
                            <span className="text-red-500 text-sm mt-4 ml-1">
              {errors[name]?.message}
            </span>
                        )}
                    </div>
                ))}
                <div className="flex mt-6">
                    <Link href={"/login"}>
                        <button
                            style={{borderColor: '#4840bb'}}
                            type="button"
                            className="bg-white h-12 w-48 mr-[2%] border  hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 rounded"
                        >
                            Back
                        </button>
                    </Link>
                    <button
                        type="submit"
                        className="bg-primary h-12 w-48 ml-[2%] hover:bg-custom-gradient text-white font-bold py-2 px-4 rounded"
                    >
                        Create Account
                    </button>

                </div>
            </form>

        </>
    );
}