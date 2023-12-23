"use client"

import React, {useState} from "react";
import Drawer from "@mui/material/Drawer";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/redux/store";
import Image from "next/image";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import Logo from '../../../public/wealthfront-small-logo.png'
import {useAppSelector} from "@/redux/store";
import {toggleNavDrawer} from "@/redux/features/nav-slice";

function NavDrawer() {
    const drawerToggle = useAppSelector(state => state.navReducer.value.toggled);
    const dispatch = useDispatch<AppDispatch>();
    const theme = useTheme();
    const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

    const handleToggleDrawer = (payload: boolean) => {
        console.log('drawer toggle', drawerToggle);
        console.log('closing drawer')
        dispatch(toggleNavDrawer(payload));
    }

    return (
        <>
            <div>
              <div className="absolute top-0 left-0 pt-4 pl-4">
                    <button
                        onClick={() => handleToggleDrawer(true)}
                        className="text-white hover:text-primary focus:outline-none focus:text-primary"
                    >
                        <AiOutlineMenu size={35} />
                    </button>
                </div>
            </div>
            <Drawer
                sx={{
                    width: isSmallerScreen ? "100%" : "300px", // adjust width based on screen size
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: isSmallerScreen ? "100%" : "300px", // adjust width of paper container
                    },
                }}
                anchor="left"
                open={drawerToggle}
                onClose={() => handleToggleDrawer(false)}
            >
                <div className="absolute top-0 right-0 pt-4 pr-4">
                    <button
                        onClick={() => handleToggleDrawer(false)}
                        className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                    >
                        <AiOutlineClose size={30}/>
                    </button>
                </div>
                <div className="flex flex-col justify-center">

                    <Image
                        src={Logo}
                        alt="Wealthfront Logo"
                        width={100}
                        height={100}

                    />
                    <Link href={"login"}>
                        <button>Login</button>
                    </Link>
                    <Link href={"create-account"}>
                        <button>Create Account</button>
                    </Link>
                </div>
            </Drawer>
        </>
    );
}

export default NavDrawer;
