import React, {useState} from 'react'
import CardForm from './BudgetForm';
function CreateExpense() {
  const [expenseAmount, setExpenseAmount] = useState(3.50)
  const [expenseType, setExpenseType] = useState('Monthly');
  const [expenseTitle, setExpenseTitle] = useState('Groceries');

  const expenseData = {
    title: expenseTitle,
    type: expenseType,
    amount: expenseAmount
  }
  return (
   <>
      <div className='flex justify-center items-center'>
      {toggledCreateBudget ? <CardForm title={expenseData.title} type={expenseData.type} amount={expenseData.amount}/>
      : <button onClick={() => setToggledCreateBudget(true)}>Add a Budget</button>}

      </div>

      </>
  )
}

export default CreateExpense