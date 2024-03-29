'use client'
 
import { useRouter } from 'next/navigation'
import React from 'react'

import { Card, Avatar, Text, Progress, Badge, Group, Button, ActionIcon, useMantineTheme} from '@mantine/core';
import Link from 'next/link';
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

interface Budget {
  id: number;
  slug: string;
  name: string;
  amount: number;
  chosenColor: string;
}

interface BudgetCardProps {
  budgetData: Budget;
  expenseData: Expense[];
  hideViewDetails?: boolean;
}







function BudgetCard({ budgetData, expenseData, hideViewDetails }: BudgetCardProps) {
  const router = useRouter();
  const totalExpenses = expenseData.reduce((acc, expense) => acc + expense.amount, 0);
  const amountRemaining = budgetData.amount - totalExpenses;
  const progressValue = (totalExpenses / budgetData.amount) * 100;
  const theme = useMantineTheme();

  // const handleViewDetails = (budgetData: Budget) => () => {
  //   router.push(`/dashboard/${budgetData.slug}?budgetData=${JSON.stringify(budgetData)}`);
  // };
  console.log('budgetData', budgetData)
  return (
    <Card className='w-full md:w-[30%] md:mr-4 mt-4' withBorder padding="lg" radius="lg" style={{borderColor: budgetData.chosenColor, borderWidth:'3px',  boxShadow:' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'}} >
      <div className='flex justify-between mb-2'>
        <h4 style={{color: budgetData.chosenColor, fontWeight: 600}}>{budgetData.name}</h4>
        <p style={{color: budgetData.chosenColor}}>${budgetData.amount} Budgeted</p>
      </div>  
      <Progress value={progressValue} mt={5} size={20} radius={15} color={budgetData.chosenColor} />
      <div className='flex justify-between my-4'>
        <p style={{color: budgetData.chosenColor}}>${totalExpenses} Spent</p>
        <p>${amountRemaining} Remaining</p>
      </div>
     <Link href={{
      pathname: `/dashboard/${budgetData.slug}`,
      query: { budgetData: JSON.stringify(budgetData) }
     }}>
      {!hideViewDetails && <Button variant='outline' color={budgetData.chosenColor} radius='xl' >View Details</Button>}
    </Link>
    </Card>
  )
}

export default BudgetCard