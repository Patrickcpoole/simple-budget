import React, {useState} from 'react';
import BudgetForm from './BudgetForm';
import { useDispatch } from 'react-redux'; 
import type { AppDispatch } from '../../redux/store';
import { addBudget } from '../../redux/features/budgets/budgets-slice';
import * as Icons from 'react-icons/md';



function CreateBudget() {
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (data: { name: string; chosenColor: string; chosenIcon: keyof typeof Icons | undefined; amount:number }) => {
    const newBudget = {
      ...data,
      slug: 'test-budget',
      id: 4
    }
    dispatch(addBudget(newBudget))
  };

  return (
    <>
     <div className='flex justify-center items-center'>
       <BudgetForm onSubmit={handleSubmit}/>
      </div>
    </>
  )
}

export default CreateBudget