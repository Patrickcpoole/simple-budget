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
  chosenColor: string;
  expenses: Expense[];
}

type BudgetsProps = {
  budgets: Budget[];
}

function Budgets({ budgets }: BudgetsProps) {
  console.log('budgets props', budgets);
  return (
    <>
    {
    budgets.length === 0 ? 
    
      <p className='mt-2 text-2xl'>You don’t have any active budgets. Click the create button on the bottom right to get started.</p>

      :
    <div className='flex flex-col md:flex-row h-auto'>
     
        {budgets.map(budget => (  
          <BudgetCard key={budget.id} budgetData={budget}/>
        ))} 
    
    </div>
    }
    

  
    </>
  );
}

export default Budgets;
