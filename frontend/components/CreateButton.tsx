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

import { useDispatch } from 'react-redux';
import { useAppSelector, AppDispatch } from '../redux/store';
import { openModal, closeModal } from '../redux/features/modal-slice';

const CreateButton: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const isModalOpen = useAppSelector((state) => state.modalReducer.isModalOpen);


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

	const handleOpenCreateModal = (type: string) => {
		if (isModalOpen) {
			dispatch(closeModal());
		} else {
			dispatch(openModal(type));
		}
		console.log('type being passed', type);
	};

	return (
		<div className={`create-button-container ${isOpen ? 'open' : ''}`}>
			<Button
				color='primary'
				onClick={handleClick}
				variant={isHovered ? 'filled' : 'outline'}
				style={{
					borderRadius: '50%',
					width: '4em',
					height: '4em',
					borderWidth: '2px',
				}}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<FaPlus className='button-icon' size={'10em'} />
			</Button>

			{isOpen && (
				<div className='floating-buttons'>
					<button
						className='floating-button'
						onClick={() => handleOpenCreateModal('budget')}
					>
						Create Budget
					</button>
					<button
						className='floating-button'
						onClick={() => handleOpenCreateModal('expense')}
					>
						Create Expense
					</button>
				</div>
			)}
		</div>
	);
};

export default CreateButton;
