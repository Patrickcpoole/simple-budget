"use client"

import React from 'react';
import CreateBudget from '../../components/CreateBudget';
import CreateExpense from '../../components/CreateExpense';

export default function Dashboard() {
    

    return (
        <div>
            <h1>Good Morning Sierra!</h1>
            <CreateBudget />
            <CreateExpense />
            
        </div>
    );
}
