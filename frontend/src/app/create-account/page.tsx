"use client"

import React from 'react'
import Link from "next/link";
import {useForm} from "react-hook-form";
import * as yup from 'yup'; // Import yup for validation
import {yupResolver} from '@hookform/resolvers/yup';

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

const validationSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
});

const buttonInfoArray: ButtonInfo[] = [
    {name: "firstName", type: 'text', placeholder: 'First Name'},
    {name: 'lastName', type: 'text', placeholder: 'Last Name'},
    {name: 'email', type: 'email', placeholder: 'Email'},
    {name: 'password', type: 'password', placeholder: 'Password'},
    {name: 'confirmPassword', type: 'password', placeholder: 'Confirm Password'},
];


export default function CreateAccount() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (data: CreateAccountFormInputs) => {
    console.log('this is the data', data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      {buttonInfoArray.map(({ name, placeholder, type }, index) => (
        <div key={name} className="relative">
          <input
            {...register(name)}
            type={type}
            className="border border-gray-300 p-2 w-[98%] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={placeholder}
          />
         {errors[name] && (
            <span className="text-red-500 text-sm mt-4 ml-1" >
              {errors[name]?.message}
            </span>
          )}
        </div>
      ))}
      <div className="flex mt-6">
        <Link href={"/login"}>
          <button
            style={{ borderColor: '#4840bb' }}
            type="submit"
            className="bg-white h-12 w-48 mr-[2%] border  hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 rounded"
          >
            Back
          </button>
        </Link>
          <button
              type={"submit"}
            className="bg-primary h-12 w-48 ml-[2%] hover:bg-custom-gradient text-white font-bold py-2 px-4 rounded"
          >
            Create Account
          </button>

      </div>
    </form>
  );
}

