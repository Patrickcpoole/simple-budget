"use client"

import React from 'react';
import CreateBudget from '../../components/CreateBudget';
import CreateExpense from '../../components/CreateExpense';

export default function Dashboard() {
    

    return (
        <div className='md:w-[90%] w-full '>
            <h1 className='my-6 ml-6'>Good Morning <br /><span className='color-primary'>Sierra!</span></h1>
            <div className='flex justify-center items-center'>
              
            <CreateBudget />
            {/* <CreateExpense /> */}
            </div>
        </div>
    );
}
