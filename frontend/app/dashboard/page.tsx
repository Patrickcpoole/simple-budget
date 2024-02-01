'use client';

import React from 'react';

// Components
import CreateBudget from '../../components/Budget/CreateBudget';
import CreateExpense from '../../components/Expense/CreateExpense';
import Budgets from '../../components/Budget/Budgets';
import Expenses from '../../components/Expense/Expenses';
import CreateButton from '../../components/CreateButton';

import * as Icons from 'react-icons/md';

// External UI Imports
import { MdWbSunny } from 'react-icons/md';
import { Divider } from '@mantine/core';

export default function Dashboard() {
	interface Expense {
        id: number;
		name: string;
		amount: number;
        transactionDate: string;
		budgetId?: number;
        budgetName?: string;
        budgetColor?: string;
        iconName?: keyof typeof Icons | undefined; // Update to keyof typeof Icons
	}

	interface Budget {
        id: number
        slug: string;
		name: string;
		amount: number;
        chosenColor: string;
		chosenIcon: keyof typeof Icons | undefined; // Ensure this matches iconName in Expense
	}

    const expenses: Expense[] = [
        {
            id: 1,
            name: 'King Soopers',
            amount: 120.65,
            budgetId: 1,
            transactionDate: '2024-01-21',
        },
        {
            id: 2,
            name: 'Alamo Drafthouse',
            amount: 50.27,
            budgetId: 2,
            transactionDate: '2024-01-18',

        },
        {
            id: 3,
            name: 'HBO Max',
            amount: 15.99,
            budgetId: 2,
            transactionDate: '2024-01-17',
      

        },
        {
            id: 4,
            name: 'Nuggets Basketball Game',
            amount: 102.01,
            budgetId: 2,
            transactionDate: '2024-01-15',

        },
        {
            id: 5,
            name: 'Kodak Film',
            amount: 80.50,
            budgetId: 3,
            transactionDate: '2024-01-13',

        },
        {
            id: 6,
            name: 'Mikes Camera',
            amount: 15.99,
            budgetId: 3,
            transactionDate: '2024-01-11',

        },
    ]

	const budgets: Budget[] = [
        {
            id: 1,
            slug: 'groceries',
            name: 'Groceries',
            amount: 800,
            chosenColor: '#0C6900',
            chosenIcon: 'MdShoppingCart',
        },
        {   
            id: 2,
            slug: 'entertainment',
            name: 'Entertainment',
            amount: 300,
            chosenColor: '#FF5353',
            chosenIcon: 'MdLocalMovies'
           
        },
        {
            id: 3,
            slug: 'hobbies',
            name: 'Hobbies',
            amount: 500,
            chosenColor: '#007CAA',
            chosenIcon: 'MdCameraAlt'
        
        }
    ];

  
	function addBudgetDetailsToExpense(expense:Expense) {
        const budget = budgets.find(b => b.id === expense.budgetId);
        return {
            ...expense,
            budgetName: budget ? budget.name : 'Unknown',
            budgetColor: budget ? budget.chosenColor : '#000',
            iconName: budget ? budget.chosenIcon : undefined,

        };
    }

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
				<Budgets budgets={budgets} expenses={expenses}/>

				<h2 className='mt-8'>Expenses</h2>
				<Divider size='sm' color='#333' />
                <Expenses expenses={expenses.map(addBudgetDetailsToExpense)} />
				{/* <CreateBudget /> */}
				{/* <CreateExpense /> */}
			</div>
			<CreateButton />
		</>
	);
}
