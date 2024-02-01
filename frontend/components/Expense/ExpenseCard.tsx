import React from 'react';
import {
  Card,
  Avatar,
  useMantineTheme,
} from '@mantine/core';
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

interface ExpenseData {
  expenseData: Expense;
}

// Component to render the dynamic icon
const BudgetIcon: React.FC<{ iconName?: keyof typeof Icons, color: string }> = ({ iconName, color }) => {
  const IconComponent = iconName ? Icons[iconName] : Icons.MdHelpOutline;
  return <IconComponent style={{ color }} size={'1.5em'} />;
};



function ExpenseCard({ expenseData }: ExpenseData) {

  const budgetColor = expenseData.budgetColor || 'defaultColor'; 
  const theme = useMantineTheme();

  return (
    <Card
      className='w-full md:w-[30%] md:mr-4 mt-4'
      withBorder
      radius='xl'
      style={{
        borderColor: expenseData.budgetColor,
        borderWidth: '3px',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      }}
    >
      <div className='flex justify-between items-center mb-2 h-[100%]'>
        <div className='flex items-center'>
        <Avatar radius="xl" color={expenseData.budgetColor} size={'3.5em'}>
          <BudgetIcon iconName={expenseData.iconName} color={budgetColor} />
        </Avatar>
        <div className='flex flex-col justify-between h-full  ml-4'>
          <div>
        <h4 style={{ color: expenseData.budgetColor, fontWeight: 600 }}>{expenseData.name}</h4>
        <h5 style={{ color: expenseData.budgetColor, fontWeight: 500 }}>{expenseData.budgetName}</h5>
        </div>
        <div>
          <p style={{ color: expenseData.budgetColor }} className='mt-4'>{expenseData.transactionDate}</p>
        </div>
        </div>
        </div>
        <h3 style={{ color: expenseData.budgetColor }} >${expenseData.amount}</h3>
      </div>
    </Card>
  );
}

export default ExpenseCard;
