import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
    isAuth: boolean;
};

const initialState: InitialStateType = {
    isAuth: false,
};

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser: (state) => {
            state.isAuth = true;
        },
        logOut: (state) => {
            state.isAuth = false;
        },
    },
});

export const { loginUser, logOut } = auth.actions;
export default auth.reducer;
