'use client';

import React from 'react';
import { AiOutlineMenu} from 'react-icons/ai';
import { CgProfile } from "react-icons/cg";
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

	const handleToggleProfile = (payload: boolean) => {
		// To Do - dispatch toggleProfileDrawer
	}
	return (
		<nav className='bg-white py-4 w-full flex h-auto justify-between items-center'>

				<button
					onClick={() => handleToggleDrawer(true)}
					className='text-white hover:text-primary focus:outline-none focus:text-primary pl-4 '
				>
					
					<AiOutlineMenu color={'#7AACC3'} size={30} />
				</button>

				<button
					onClick={() => handleToggleProfile(true)}
					className='text-white hover:text-primary focus:outline-none focus:text-primary pr-4 '
				>
			<CgProfile color={'#7AACC3'} size={30} />
			</button>
		
		</nav>
	);
};

export default Navbar;
