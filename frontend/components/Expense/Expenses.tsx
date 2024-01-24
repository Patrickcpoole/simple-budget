import React from 'react';

interface Expense {
  name: string;
  amount: number;
  // other properties as needed
}

interface ExpenseProps {
  expenses: Expense[];
}


function Expenses({ expenses }: ExpenseProps) {
  return (
    <>
    {
    expenses.length === 0 ? 
    
      <p className='mt-2 text-2xl'>You don’t have any logged expenses. Click the create button on the bottom right to get started.</p>

      :
    <div>
      <ul>
        {expenses.map(budget => (
          <li key={budget.name}>
            {budget.name}: {budget.amount}
          </li>
        ))} 
      </ul>
    </div>
    }
    

  
    </>
  );
}

export default Expenses;
