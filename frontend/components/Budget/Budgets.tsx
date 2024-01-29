import React from 'react';
import BudgetCard from './BudgetCard';

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
  name: string;
  amount: number;
  chosenColor: string;
}

type BudgetsProps = {
  budgets: Budget[];
  expenses: Expense[];
}



function Budgets( {budgets, expenses}: BudgetsProps) {
    const getBudgetExpenses = (budgetId: number) => {
    return expenses.filter(expense => expense.budgetId === budgetId)
  }

  return (
    <>
    {
    budgets.length === 0 ? 
    
      <p className='mt-2 text-2xl'>You don’t have any active budgets. Click the create button on the bottom right to get started.</p>

      :
    <div className='flex flex-col md:flex-row h-auto'>
     
        {budgets.map(budget => (  
          <BudgetCard key={budget.id} budgetData={budget} expenseData={getBudgetExpenses(budget.id)}/>
        ))} 
    
    </div>
    }
    

  
    </>
  );
}

export default Budgets;
