import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    value: UserState;
}

type UserState = {
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            password_digest: string;
            created_at: string;
            updated_at: string;
};



const initialState = {
    value: {
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        password_digest: "",
        created_at: "",
        updated_at: "",
    } as UserState,
} as InitialState

const user = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser: (_, action: PayloadAction<UserState>) => {
            console.log('action.payload', action.payload)
            return {value: action.payload};
        },
        resetUser: () => initialState,
        // other user-related reducers
    },
});

export const {setUser, resetUser} = user.actions;

export default user.reducer;