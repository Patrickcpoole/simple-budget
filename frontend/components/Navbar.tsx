'use client';

import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useAppSelector, AppDispatch } from '../redux/store';
import { toggleNavDrawer } from '../redux/features/nav-slice';

const Navbar: React.FC = () => {
	const isAuth = useAppSelector((state) => state.authReducer.isAuth);
	const drawerToggle = useAppSelector(
		(state) => state.navReducer.value.toggled
	);
	const dispatch = useDispatch<AppDispatch>();

	const handleToggleDrawer = (payload: boolean) => {
		dispatch(toggleNavDrawer(payload));
	};
	return (
		<nav className='bg-white py-2 w-full flex h-auto justify-between items-center'>
			<div className='top-0 left-0 pt-4 pl-4'>
				<button
					onClick={() => handleToggleDrawer(true)}
					className='text-white hover:text-primary focus:outline-none focus:text-primary'
				>
					<AiOutlineMenu color={'#4840bb'} size={35} />
				</button>
			</div>
			{isAuth && <div>
				<ul className='flex flex-row space-x-4 mr-12'>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>}
		</nav>
	);
};

export default Navbar;
