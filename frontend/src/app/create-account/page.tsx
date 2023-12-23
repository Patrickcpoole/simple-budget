"use client"

import React from 'react'
import Link from "next/link";
import {useForm} from "react-hook-form";

import {useDispatch} from 'react-redux';
import {AppDispatch} from "@/redux/store";


interface CreateAccountFormInputs {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface ButtonInfo {
  name: keyof CreateAccountFormInputs;
  type: string;
  placeholder: string;
}

const buttonInfoArray: ButtonInfo[] = [
    {name: "firstName", type: 'text', placeholder: 'First Name'},
    {name: 'lastName', type: 'text', placeholder: 'Last Name'},
    {name: 'email', type: 'email', placeholder: 'Email'},
    {name: 'password', type: 'password', placeholder: 'Password'},
    {name: 'confirmPassword', type: 'password', placeholder: 'Confirm Password'},
];


export default function CreateAccount() {

    const {register, handleSubmit} = useForm<CreateAccountFormInputs>();
    const dispatch = useDispatch<AppDispatch>();
    const onSubmit = (data: CreateAccountFormInputs) => {
        console.log('this is the data', data)
    };


    return (

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-auto items-center"
        >
            {buttonInfoArray.map(({name, placeholder, type}, index) => <input
                {...register(name)}
                key={name}
                type={type}
                className="border border-gray-300 p-2 w-[98%] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder}
            />)}
            <div className="flex mt-6">
                <Link href={"/login"}>
                    <button
                        style={{borderColor: '#4840bb'}}
                        type="submit"
                        className="bg-white h-12 w-48 mr-[2%] border  hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 rounded"
                    >
                        Back
                    </button>
                </Link>

                <Link href={"/create-account"}>
                    <button
                        className="bg-primary h-12 w-48 ml-[2%] hover:bg-custom-gradient text-white font-bold py-2 px-4 rounded"
                    >
                        Create Account
                    </button>
                </Link>
            </div>
        </form>
    )
}

