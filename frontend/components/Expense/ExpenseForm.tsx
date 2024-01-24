import React, { useState } from 'react';

type FormData = {
	name: string;
	type: string;
	amount: number;
};

type FormProps = {
	onSubmit: (data: FormData) => void;
	formTitle: string;
};

function ExpenseForm({ onSubmit, formTitle }: FormProps) {
	const [name, setName] = useState('');
	const [type, setType] = useState('');
	const [amount, setAmount] = useState(0);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		onSubmit({ name, type, amount });
	};

	return (
		<div className='bg-white w-[45%] mr-6'>
			<h2>Create Expense </h2>
			<form onSubmit={handleSubmit} className='flex flex-col'>
				<label className='m-2'>
					Title:
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary '
					/>
				</label>
				<label>
					Type:
					<select value={type} onChange={(e) => setType(e.target.value)}>
						<option value='budget'>Budget</option>
						<option value='expense'>Expense</option>
					</select>
				</label>
				<label>
					What is the budget amount?
					<input
						type='number'
						value={amount}
						onChange={(e) => setAmount(Number(e.target.value))}
					/>
				</label>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
}

export default ExpenseForm;
