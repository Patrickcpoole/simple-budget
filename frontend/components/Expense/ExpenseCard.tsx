import React from 'react';

import {
	Card,
	Avatar,
	Text,
	Progress,
	Badge,
	Group,
	Button,
	ActionIcon,
	useMantineTheme,
} from '@mantine/core';
const avatars = [
	'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
	'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
	'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
];

interface Expense {
	id: number;
	name: string;
	amount: number;
	budgetId?: number;
	budgetName?: string;
	budgetColor?: string;
}

interface expenseData {
	expenseData: Expense;
}

function ExpenseCard({ expenseData }: expenseData) {
	const theme = useMantineTheme();
	return (
		<Card
			className='w-full md:w-[30%] md:mr-4 mt-4'
			withBorder
			padding='lg'
			radius='lg'
			style={{
				borderColor: expenseData.budgetColor,
				borderWidth: '3px',
				boxShadow:
					' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
			}}
		>
      <div className='flex justify-between mb-2'>
        <h4 style={{color: expenseData.budgetColor, fontWeight: 600}}>{expenseData.name}</h4>
        <p style={{color: expenseData.budgetColor}}>${expenseData.amount}</p>
        </div>
    </Card>
	);
}

export default ExpenseCard;
