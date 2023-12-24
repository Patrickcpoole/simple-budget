"use client";

import React from "react";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";

import { useDispatch } from "react-redux";
import {useRouter} from "next/navigation";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu, AiOutlineLogin, AiOutlineUserAdd, AiOutlineLogout } from "react-icons/ai";
import Logo from '../../public/wealthfront-small-logo.png'
import { useAppSelector, AppDispatch } from "@/redux/store";
import { toggleNavDrawer } from "@/redux/features/nav-slice";
import { logOut } from "@/redux/features/auth/auth-slice";

function NavDrawer() {
    const isAuth = useAppSelector(state => state.authReducer.isAuth);
    const drawerToggle = useAppSelector(state => state.navReducer.value.toggled);
    const dispatch = useDispatch<AppDispatch>();
    const theme = useTheme();
    const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

    const router = useRouter();

    const handleToggleDrawer = (payload: boolean) => {
        dispatch(toggleNavDrawer(payload));
    }

    const handleLogout = () => {
        router.push('/login')
        dispatch(logOut());
    };

    const handleNavigateAuth = (path: string) => () => {
        handleToggleDrawer(false);
        router.push('/' + path)
    }

    return (
        <>
            <div className="absolute top-0 left-0 pt-4 pl-4">
                <button
                    onClick={() => handleToggleDrawer(true)}
                    className="text-white hover:text-primary focus:outline-none focus:text-primary"
                >
                    <AiOutlineMenu color={"#4840bb"} size={35} />
                </button>
            </div>
            <Drawer
                sx={{
                    width: isSmallerScreen ? "100%" : "300px",
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: isSmallerScreen ? "100%" : "300px",
                    },
                }}
                anchor="left"
                open={drawerToggle}
                onClose={() => handleToggleDrawer(false)}
            >
                <div className="absolute top-0 right-0 pt-2 pr-2">
                    <button
                        onClick={() => handleToggleDrawer(false)}
                        className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                    >
                        <AiOutlineClose color={"#4840bb"} size={25}/>
                    </button>
                </div>
                <div className="flex flex-col items-center p-4">
                    <Image
                        src={Logo}
                        alt="Wealthfront Logo"
                        width={100}
                        height={100}
                    />
                    <Divider className="w-full mt-8" />
                    {!isAuth ? (
                        <>

                                <button onClick={handleNavigateAuth('login')} className="flex w-44 justify-center items-center mt-4 bg-primary text-white font-bold py-2 px-4 rounded hover:bg-custom-gradient">
                                    <AiOutlineLogin className="mr-2" /> Login
                                </button>


                                <button onClick={handleNavigateAuth('create-account')} className="flex items-center mt-4 bg-primary text-white font-bold py-2 px-4 rounded hover:bg-custom-gradient">
                                    <AiOutlineUserAdd className="mr-2" /> Create Account
                                </button>

                        </>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="flex w-44  items-center mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                        >
                            <AiOutlineLogout className="mr-2" /> Logout
                        </button>
                    )}
                </div>
            </Drawer>
        </>
    );
}

export default NavDrawer;
