import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import * as Icons from 'react-icons/md';

import { openModal, closeModal } from '../../redux/features/modal-slice';
import { useSelector, useDispatch } from 'react-redux'; 

type FormData = {
	name: string;
	chosenColor: string;
	amount: number;
	chosenIcon: keyof typeof Icons | undefined; // Ensure this matches iconName in Expense

};

type FormProps = {
	onSubmit: (data: FormData) => void;
};

type ModalState = {
	isModalOpen: boolean;
	modalType: string | null;
};

const colorChoices = [
	'#FF5353', '#007CAA', '#0C6900', '#E6C616', '#EF8442', 
	'#AC55F7', '#4DF4AD', '#801A1A', '#3754F0', '#794600',
	'#B0FF33', '#E577CB'
]

function BudgetForm({ onSubmit }: FormProps) {
	const dispatch = useDispatch(); // Use useDispatch to get the dispatch function
	// Use useSelector to access the isModalOpen state from Redux
	const isModalOpen = useSelector(({modalReducer}) => {

		return modalReducer.isModalOpen

	});
	console.log('is modal open', isModalOpen)
	const [opened, { open, close }] = useDisclosure(false);
	const [name, setName] = useState<string>('');
	const [type, setType] = useState<string>('');
	const [amount, setAmount] = useState<number>(0);
	const [chosenColor, setChosenColor] = useState<string>('');
	const [chosenIcon, setChosenIcon] = useState<keyof typeof Icons | undefined>('MdLocalMovies');

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		
		onSubmit({ name, chosenColor, chosenIcon, amount });
	};

	const handleCloseModal = () => {
		if (isModalOpen) {
			dispatch(closeModal());
			close();
		}
	}

	

	return (
		<Modal opened={isModalOpen} onClose={handleCloseModal} title='Create Budget' >
	
	
			<form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
				<label className='flex flex-col font-semibold'>
					Budget Name:
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='border mt-2 border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary '
					/>
				</label>
			
				<label className='flex flex-col font-semibold'>
					Budget Amount:
					<input
						type='number'
						value={amount}
						onChange={(e) => setAmount(parseInt(e.target.value))}
						className='border mt-2 border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary '
					/>
				</label>
				<label className='flex flex-col font-semibold'>
					Search for Budget Icon:
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='border mt-2 border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary '
					/>
				</label>
				<label className='flex flex-col font-semibold'>
					Choose a Budget Color:
					<div className='grid grid-cols-6 w-full gap-4 px-4 pt-4'>
						{colorChoices.map((color, index) => (
							<div key={index} style={{ backgroundColor: color }} className='h-6 w-6 rounded-full cursor-pointer' onClick={() => setChosenColor(color)}></div>
						))}
					</div>
					</label>

				<div className='flex justify-between'>
				<button
					type='submit'
					value='Submit'
					className='bg-primary h-12 lg:w-[30%] md:w-[20%] w-[90%]  ml-[1%]
				 text-sm lg:text-md lg:text-md hover:bg-custom-gradient text-white
				  font-bold py-2 px-4 rounded'
				>
					Create
				</button>
				<button
					onClick={() => closeModal}
					className='bg-danger h-12 lg:w-[30%] md:w-[20%] w-[90%]  ml-[1%]
				 text-sm lg:text-md lg:text-md hover:bg-custom-gradient text-white
				  font-bold py-2 px-4 rounded'
				>
					Cancel
				</button>
				</div>
			</form>

		</Modal>
	);
}

export default BudgetForm;
