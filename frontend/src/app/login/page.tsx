"use client"
import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from 'react-redux';
import Link from 'next/link'

interface LoginFormInputs {
    email: string;
    password: string;
}

interface ButtonInfo {
  name: keyof LoginFormInputs;
  type: string;
  placeholder: string;
}

const buttonInfoArray: ButtonInfo[] = [
    {name: 'email', type: 'email', placeholder: 'Email'},
    {name: 'password', type: 'password', placeholder: 'Password'},
];

export default function Login() {
    const {register, handleSubmit} = useForm<LoginFormInputs>();
    const dispatch = useDispatch();

    const onSubmit = (data: LoginFormInputs) => {
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
          <button
            style={{ borderColor: '#4840bb' }}
            type="submit"
            className="bg-white h-12 w-48 mr-[1%] border  hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 rounded"
          >
            Log In
          </button>

          <Link href={"/create-account"}>
            <button
              className="bg-primary h-12 w-48 ml-[1%] hover:bg-custom-gradient text-white font-bold py-2 px-4 rounded"
            >
              Create Account
            </button>
          </Link>
        </div>
      </form>

  );
};
