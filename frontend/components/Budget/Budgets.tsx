import React from 'react';
import BudgetCard from './BudgetCard';

interface Expense {
  name: string;
  amount: number;
  // other properties as needed
}

interface Budget {
  id: number;
  name: string;
  amount: number;
  expenses: Expense[];
}

type BudgetsProps = {
  budgets: Budget[];
}

function Budgets({ budgets }: BudgetsProps) {
  return (
    <>
    {
    budgets.length === 0 ? 
    
      <p className='mt-2 text-2xl'>You don’t have any active budgets. Click the create button on the bottom right to get started.</p>

      :
    <div>
      <ul>
        {budgets.map(budget => (
          <BudgetCard key={budget.id} budgetData={budget}/>
        ))} 
      </ul>
    </div>
    }
    

  
    </>
  );
}

export default Budgets;
