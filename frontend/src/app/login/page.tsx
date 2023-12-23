"use client"
import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from 'react-redux';

import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../../public/wealthfront-logo.png'

interface LoginFormInputs {
    email: string;
    password: string;
}

export default function Login() {
    const {register, handleSubmit} = useForm<LoginFormInputs>();
    const dispatch = useDispatch();

    const onSubmit = (data: LoginFormInputs) => {
        console.log('this is the data', data)
    };

    return (
        <>
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
                        style={{borderColor: '#4840bb'}}
                        type="submit"
                        className="bg-white w-[48%] mr-[2%] border  hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 rounded"
                    >
                        Log In
                    </button>
                    <Link href={"/create-account"}>
                        <button
                            className="bg-primary w-[48%] ml-[2%] hover:bg-custom-gradient text-white font-bold py-2 px-4 rounded"
                        >
                            Create Account
                        </button>
                    </Link>
                </div>
            </form>
        </>
    );
};
