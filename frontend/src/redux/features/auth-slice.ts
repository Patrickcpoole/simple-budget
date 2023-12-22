import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialStateType = {
    value: AuthState;
}

type AuthState = {
    isAuth: boolean;
    email: string;
    uid: string;
    isAdmin: boolean;
}

const initialState = {
    value: {
        isAuth: false,
        email: "",
        uid: "",
        isAdmin: false
    } as AuthState,
} as InitialStateType;
export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => initialState,
        logIn: (state, action: PayloadAction<AuthState>) => {
            return {
                value: {
                    isAuth: true,
                    email: action.payload.email,
                    uid: action.payload.uid,
                    isAdmin: false
                }
            }
        }
    }
})

export const {logIn, logOut} = auth.actions;
export default auth.reducer;