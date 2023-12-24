"use client";

import React from 'react';
import {useAppSelector} from "@/redux/store";
import {useRouter} from 'next/navigation';
import { deleteUserThunk } from '@/redux/features/user/user-thunks';
import {useDispatch} from 'react-redux';
import {resetUser} from '@/redux/features/user/user-slice';
import {logOut} from '@/redux/features/auth/auth-slice';
import CustomDialog from '../components/CustomDialog';
import type {AppDispatch} from '@/redux/store';



export default function Dashboard() {
    // Use useSelector to get the user state from the Redux store
    const userData = useAppSelector((state) => state.userReducer.value);
    const isAuth = useAppSelector((state) => state.authReducer.isAuth);

    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(resetUser()); // Reset user data
        dispatch(logOut());
        router.push('/login');
    };

    const [openDialog, setOpenDialog] = React.useState(false);

  const handleDeleteUser = () => {
    // Assuming you have userId available here
    if (userData && userData.id) {
        dispatch(deleteUserThunk(userData.id))
            .unwrap()
            .then(() => {
                router.push('/login'); // Navigate back to login after deletion
            })
            .catch((error: Error) => {
                // Error handling is done in the thunk with toasts
            });
    }
};


    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <div className="container mx-auto p-4">
                {userData && isAuth && (
                    <div className="max-w-2xl mx-auto shadow-md overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Field
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Value
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {Object.entries(userData).map(([key, value]) => (
                                <tr key={key}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {key}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        {value}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleLogout}
                        className="bg-primary h-12 w-48 ml-[1%] hover:bg-custom-gradient text-white font-bold py-2 px-4 rounded"
                    >
                        Logout
                    </button>

                    <button
                        onClick={handleClickOpen}
                        className="bg-red-500 text-white h-12 w-48 font-bold py-2 px-4 ml-4 rounded"
                    >
                        Delete User
                    </button>
                </div>

            </div>

            <CustomDialog open={openDialog} handleClose={handleClose} handleDeleteUser={handleDeleteUser} />
        </>
    );
};