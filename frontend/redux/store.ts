import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import authReducer from "./features/auth/auth-slice";
import navReducer from "./features/nav-slice";
import modalReducer from './features/modal-slice'; // Your new modal slice
import userReducer from "./features/user/user-slice";
import {TypedUseSelectorHook} from "react-redux";
import {useSelector} from "react-redux";
export const store = configureStore({
  reducer: {
    authReducer,
    userReducer,
    navReducer,
    modalReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown, // <-- Change this to 'unknown'
  Action<string>
>;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;