"use client"

import React, { useEffect } from 'react';
import BudgetCard from '../../../components/Budget/BudgetCard';
import { useSearchParams } from 'next/navigation';
import * as Icons from 'react-icons/md'; // Import all icons
import { json } from 'stream/consumers';

import { Divider } from '@mantine/core';

interface Budget {
  id: number;
  slug: string;
  name: string;
  amount: number;
  chosenColor: string;
  chosenIcon: keyof typeof Icons | undefined;
}

function BudgetDetails() {
  const searchParams = useSearchParams();
  const dataString: any = searchParams.get("budgetData");

  // Ensure dataString is not undefined before parsing
  if (!dataString) {
    return null; // or handle the case when dataString is undefined
  }
  const data: Budget = JSON.parse(dataString);

  console.log(data);
  console.log(data.name);
  // Ensure budgetData is not undefined before accessing its properties
 
  return (
    <div className='w-full px-8'>
      <h2 className='mt-4'><span style={{color: data.chosenColor}}>{data.name} </span>Overview</h2>
				<Divider size='sm' color='#333' />
        <BudgetCard budgetData={data} expenseData={[]} hideViewDetails={true}/>
    </div>
  );



  // Ensure budgetData is not undefined before accessing its properties



}

export default BudgetDetails;
