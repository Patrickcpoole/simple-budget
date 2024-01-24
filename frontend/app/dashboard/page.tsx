"use client"

import React from 'react';

// Components
import CreateBudget from '../../components/CreateBudget';
import CreateExpense from '../../components/CreateExpense';
import Budgets from '../../components/Budgets';
import Expenses from '../../components/Expenses';
import CreateButton from '../../components/CreateButton';

// External UI Imports
import { MdWbSunny } from "react-icons/md";
import { Divider } from '@mantine/core';


export default function Dashboard() {

    interface Expense {
        name: string;
        amount: number;
        // other properties as needed
      }
    
    interface Budget {
        name: string;
        amount: number;
        expenses: Expense[];
    }
    
    const budgets:Budget[] = [];
    const expenses:Expense[] = [];

    return (
        <div className='w-[90%] pt-4'>
            <h1>Good Morning <br /><span className='text-primary flex'>Sierra!<MdWbSunny color={'#FFC936'} className='mt- ml-1'/></span></h1>
            <h2 className='mt-4'>Budgets</h2>
            <Divider size='sm' color='#333'/>
            <Budgets budgets={budgets}/>

            <h2 className='mt-8'>Expenses</h2>
            <Divider size='sm' color='#333'/>
            <Expenses expenses={expenses}/>
            {/* <CreateBudget /> */}
            {/* <CreateExpense /> */}
            </div>
     
    );
}
