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
        id: number;
		name: string;
		amount: number;
		budgetId?: number;
        budgetName?: string;
        budgetColor?: string;
	}

	interface Budget {
        id: number
		name: string;
		amount: number;
        chosenColor: string;
		
	}

    const expenses: Expense[] = [
        {
            id: 1,
            name: 'King Soopers',
            amount: 120.65,
            budgetId: 1,
        },
        {
            id: 2,
            name: 'Alamo Drafthouse',
            amount: 50.27,
            budgetId: 2,

        },
        {
            id: 3,
            name: 'HBO Max',
            amount: 15.99,
            budgetId: 2,
      

        },
        {
            id: 4,
            name: 'Nuggets Basketball Game',
            amount: 102.01,
            budgetId: 2,

        },
        {
            id: 5,
            name: 'Kodak Film',
            amount: 80.50,
            budgetId: 3,

        },
        {
            id: 6,
            name: 'Mikes Camera',
            amount: 15.99,
            budgetId: 3,

        },
    ]

	const budgets: Budget[] = [
        {
            id: 1,
            name: 'Groceries',
            amount: 800,
            chosenColor: '#0C6900',
        },
        {   
            id: 2,
            name: 'Entertainment',
            amount: 300,
            chosenColor: '#FF5353',
           
        },
        {
            id: 3,
            name: 'Hobbies',
            amount: 500,
            chosenColor: '#007CAA',
        
        }
    ];

  
	function addBudgetDetailsToExpense(expense:Expense) {
        const budget = budgets.find(b => b.id === expense.budgetId);
        return {
            ...expense,
            budgetName: budget ? budget.name : 'Unknown',
            budgetColor: budget ? budget.chosenColor : '#000' // Default color if budget is not found
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
