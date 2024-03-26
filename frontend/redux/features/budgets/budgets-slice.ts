import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
	value: Budget[];
};

import * as Icons from 'react-icons/md';

interface Budget {
	id: number;
	slug: string;
	name: string;
	amount: number;
	chosenColor: string;
	chosenIcon: keyof typeof Icons | undefined; // Ensure this matches iconName in Expense
}

const exampleBudgets: Budget[] = [
	{
		id: 1,
		slug: 'groceries',
		name: 'Groceries',
		amount: 800,
		chosenColor: '#0C6900',
		chosenIcon: 'MdShoppingCart',
	},
	{
		id: 2,
		slug: 'entertainment',
		name: 'Entertainment',
		amount: 300,
		chosenColor: '#FF5353',
		chosenIcon: 'MdLocalMovies',
	},
	{
		id: 3,
		slug: 'hobbies',
		name: 'Hobbies',
		amount: 500,
		chosenColor: '#007CAA',
		chosenIcon: 'MdCameraAlt',
	},
];

const initialState = {
	value: [...exampleBudgets]
} as InitialState;

const budgets = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		addBudget: (state, action: PayloadAction<Budget>) => {
      console.log('action.payload in addBudget', action.payload);
      state.value.push(action.payload);
  },
		deleteBudget: (state, {payload}) => {
			console.log('action.payload', payload);
      let newBudgets = state.value;
      newBudgets.filter((budget) => budget.id !== payload)
			return { value: newBudgets};
		},
	},
});

export const { addBudget, deleteBudget } = budgets.actions;

export default budgets.reducer;
