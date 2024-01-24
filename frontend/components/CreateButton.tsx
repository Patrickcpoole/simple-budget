'use client';

import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { FaPlus } from 'react-icons/fa';
import {
	ActionIcon,
	Button,
	Group,
	MantineProvider,
	createTheme,
} from '@mantine/core';

const CreateButton: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleClick = () => {
		console.log('clicked');
		setIsOpen(!isOpen);
	};

	return (
		<div className={`create-button-container ${isOpen ? 'open' : ''}`}>

			<Button
				color='primary'
      
				onClick={handleClick}
				variant={isHovered ? 'filled' : 'outline'}
				style={{ borderRadius: '50%', width: '4em', height: '4em', borderWidth: '2px', }}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<FaPlus className='button-icon' size={'10em'}  />
			</Button>

			{isOpen && (
				<div className='floating-buttons'>
					<button className='floating-button'>Create Budget</button>
					<button className='floating-button'>Create Expense</button>
				</div>
			)}
		</div>
	);
};

export default CreateButton;
