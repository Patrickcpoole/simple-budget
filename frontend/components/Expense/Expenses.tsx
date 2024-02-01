import React from 'react';
import ExpenseCard from './ExpenseCard';
import * as Icons from 'react-icons/md'; // Import all icons

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

interface ExpenseProps {
	expenses: Expense[];
}

function Expenses({ expenses }: ExpenseProps) {
	return (
		<>
			{expenses.length === 0 ? (
				<p className='mt-2 text-2xl'>
					You don’t have any logged expenses. Click the create button on the
					bottom right to get started.
				</p>
			) : (
				<div className='flex flex-col md:flex-row h-auto'>
					{expenses.map((expense) => (
						<ExpenseCard key={expense.id} expenseData={expense} />
					))}
				</div>
			)}
		</>
	);
}

export default Expenses;
