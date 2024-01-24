import React, {useState} from 'react'
import BudgetForm from './BudgetForm'

function CreateBudget() {
  const [budgetAmount, setBudgetAmount] = useState(500)
  const [budgetType, setBudgetType] = useState('Monthly');
  const [budgetName, setBudgetName] = useState('Groceries');
  const [toggledCreateBudget, setToggledCreateBudget] = useState(false);
  const handleSubmit = (data: { name: string; type: string; amount: number }) => {
    setBudgetName(data.name);
    setBudgetType(data.type);
    setBudgetAmount(data.amount);
  };

  return (
    <>
     <div className='flex justify-center items-center'>
      {toggledCreateBudget ? <BudgetForm onSubmit={handleSubmit}/>
      : <button onClick={() => setToggledCreateBudget(true)}>Add a Budget</button>}

      </div>
    </>
  )
}

export default CreateBudget