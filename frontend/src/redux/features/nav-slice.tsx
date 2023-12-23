import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialStateType = {
    value: NavState;
}

type NavState = {
   toggled: boolean;
}

const initialState = {
    value: {
        toggled: true,
    } as NavState,
} as InitialStateType;
export const nav = createSlice({
    name: "nav",
    initialState,
    reducers: {
        toggleNavDrawer : (state, action: PayloadAction<boolean>) => {
            console.log('action payload', action.payload)
            return {
                value: {
                    toggled: action.payload,
                }
            }
        }
    }
})

export const {toggleNavDrawer} = nav.actions;
export default nav.reducer;