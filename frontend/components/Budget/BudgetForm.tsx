import React, { useState } from 'react';

type FormData = {
	name: string;
	type: string;
	amount: number;
};

type FormProps = {
	onSubmit: (data: FormData) => void;
};

function CardForm({ onSubmit }: FormProps) {
	const [name, setName] = useState('');
	const [type, setType] = useState('');
	const [amount, setAmount] = useState(0);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		onSubmit({ name, type, amount });
	};

	const frequencyInputs = [
		{ value: 'Every Month', label: 'Every Month' },
		{ value: 'Every Few Months', label: 'Every Few Months' },
		{ value: 'Once', label: 'Once' },
	];

	return (
		<div className='bg-white  w-full p-4 rounded-md'>
			<h4 className='mb-6'>Create Budget</h4>
			<form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
				<label className='flex flex-col font-semibold'>
					Title:
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='border mt-2 border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary '
					/>
				</label>
				<label className='flex flex-col font-semibold '>
					Budget Frequency:
					<div onChange={(e) => setType((e.target as HTMLInputElement).value)} className='flex mt-2'>
						{frequencyInputs.map((input, index) => (
							<div key={index }  className='mr-4'>
								<input type='radio' value={input.value} name='frequency' className='mr-2'/>
								{input.label}
							</div>
						))}
					</div>
				</label>
				<label className='flex flex-col font-semibold'>
					What is the budget amount?
	
					<input
						type='number'
						value={amount}
						onChange={(e) => setAmount(Number(e.target.value))}
						className='border border-gray-300  mt-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary '
					/>
			
				</label>
				<button
					type='submit'
					value='Submit'
					className='bg-primary h-12 lg:w-[30%] md:w-[20%] w-[90%]  ml-[1%]
				 text-sm lg:text-md lg:text-md hover:bg-custom-gradient text-white
				  font-bold py-2 px-4 rounded'
				>
					Create Budget
				</button>
			</form>
		</div>
	);
}

export default CardForm;
