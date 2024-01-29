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
  return <IconComponent style={{ color }} />;
};



function ExpenseCard({ expenseData }: ExpenseData) {

  const budgetColor = expenseData.budgetColor || 'defaultColor'; 
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
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
      }}
    >
      <div className='flex justify-between mb-2'>
        <Avatar radius="xl" color={expenseData.budgetColor}>
          <BudgetIcon iconName={expenseData.iconName} color={budgetColor} />
        </Avatar>
        <h4 style={{ color: expenseData.budgetColor, fontWeight: 600 }}>{expenseData.name}</h4>
        <p style={{ color: expenseData.budgetColor }}>${expenseData.amount}</p>
      </div>
    </Card>
  );
}

export default ExpenseCard;
