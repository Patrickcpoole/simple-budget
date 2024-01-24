'use client';

import React from 'react';

// Components
import CreateBudget from '../../components/Budget/CreateBudget';
import CreateExpense from '../../components/Expense/CreateExpense';
import Budgets from '../../components/Budget/Budgets';
import Expenses from '../../components/Expense/Expenses';
import CreateButton from '../../components/CreateButton';

// External UI Imports
import { MdWbSunny } from 'react-icons/md';
import { Divider } from '@mantine/core';

export default function Dashboard() {
	interface Expense {
		name: string;
		amount: number;
		// other properties as needed
	}

	interface Budget {
        id: number
		name: string;
		amount: number;
		expenses: Expense[];
	}

	const budgets: Budget[] = [
        {
            id: 1,
            name: 'Groceries',
            amount: 800,
            expenses: [
                {
                    name: 'King Soopers',
                    amount: 120.65,
                },
            
            ]
        },
        {   
            id: 2,
            name: 'Entertainment',
            amount: 300,
            expenses: [
                {
                    name: 'Alama Drafthouse',
                    amount: 50.27,
                },
                {
                    name: 'HBO Max',
                    amount: 15.99,
                },
                {
                    name: 'Nuggets Basketball Game',
                    amount: 102.01,
                }
            ]
        },
        {
            id: 3,
            name: 'Hobbies',
            amount: 500,
            expenses: [
                {
                    name: 'Kodak Film',
                    amount: 80.50,
                },
                {
                    name: 'Mikes Camera',
                    amount: 15.99,
                },
               
            ]
        }
    ];
	const expenses: Expense[] = [];

	return (
		<>
			<div className='w-[90%] pt-4'>
				<h1>
					Good Morning <br />
					<span className='text-primary flex'>
						Sierra!
						<MdWbSunny color={'#FFC936'} className='mt- ml-1' />
					</span>
				</h1>
				<h2 className='mt-4'>Budgets</h2>
				<Divider size='sm' color='#333' />
				<Budgets budgets={budgets} />

				<h2 className='mt-8'>Expenses</h2>
				<Divider size='sm' color='#333' />
				<Expenses expenses={expenses} />
				{/* <CreateBudget /> */}
				{/* <CreateExpense /> */}
			</div>
			<CreateButton />
		</>
	);
}
