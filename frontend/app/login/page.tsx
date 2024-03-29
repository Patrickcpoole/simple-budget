'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { loginUserThunk } from '../../redux/features/auth/auth-thunk';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';

// feb 28th 2024

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
	{ name: 'email', type: 'email', placeholder: 'Email' },
	{ name: 'password', type: 'password', placeholder: 'Password' },
];

const loginValidationSchema = yup.object().shape({
	email: yup.string().email('Invalid email').required('Email is required'),
	password: yup.string().required('Password is required'),
});

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>({
		resolver: yupResolver(loginValidationSchema),
	});

	const [showPassword, setShowPassword] = useState(false);

	const dispatch = useDispatch<AppDispatch>();
	const router = useRouter();

	const onSubmit = (data: LoginFormInputs) => {
		toast.remove();
		dispatch(loginUserThunk(data))
			.unwrap()
			.then(() => {
				router.push('/dashboard');
			})
			.catch((error) => {
				const errorMessage = error.response?.data?.error || error.message;

				if (errorMessage === 'Invalid email or password') {
					toast.error('Invalid email or password');
				} else {
					toast.error(
						'Something is wrong. Please contact patrickcpoole@gmail.com'
					);
				}

				console.error('Login failed:', error);
			});
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-2 w-[95%] bg-white shadow-md my-6 p-6 rounded-md  items-center'
		>
			<div className='relative w-[90%] lg:w-[50%] flex flex-col'>
                <div className='flex justify-center mb-4'>
                <h2>Login</h2>
                </div>
				<input
					{...register('email')}
					type='email'
					className='border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary'
					placeholder='Email'
				/>

				<span className='text-red-500 h-4   text-sm mt-1'>
					{errors.email?.message}
				</span>
			</div>

			<div className='relative w-[90%] lg:w-[50%] flex flex-col'>
				<input
					{...register('password')}
					type={showPassword ? 'text' : 'password'}
					className='border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary'
					placeholder='Password'
				/>
				<button
					type='button'
					onClick={togglePasswordVisibility}
					className='absolute inset-y-0 mb-4 right-0 pr-3 flex items-center justify-center text-sm leading-5'
				>
					{showPassword ? (
						<AiOutlineEyeInvisible size={20} color={'#7AACC3'} />
					) : (
						<AiOutlineEye size={20} color={'#7AACC3'} />
					)}
				</button>

				<span className='text-red-500 h-4 text-sm mt-1'>
					{errors.password?.message}
				</span>
			</div>

			<div className='flex mt-6 w-full'>
				<div className='w-[50%] flex justify-end items-end'>
					<button
						type='submit'
						className='bg-white h-12 lg:w-[50%] md:w-[60%] w-[80%] mr-[2%] border-2 border-primary text-sm 
                     hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 rounded'
					>
						Log In
					</button>
				</div>

				<Link href={'/create-account'} className='w-[50%] flex flex-start'>
					<button
						type='button'
						className='bg-primary h-12 lg:w-[50%] md:w-[60%] w-[80%]  ml-[2%] text-sm 
                        lg:text-md lg:text-md hover:bg-custom-gradient text-white font-bold py-2 px-4 rounded'
					>
						Create Account
					</button>
				</Link>
			</div>
		</form>
	);
}
