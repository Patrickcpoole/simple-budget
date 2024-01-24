import React, {useState} from 'react'
import CardForm from '../Budget/BudgetForm';
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



      </>
  )
}

export default CreateExpense