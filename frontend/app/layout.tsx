import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {ReduxProvider} from '../redux/provider'
import '../globals.css'
import NavDrawer from "../components/NavDrawer";
import Logo from "../public/wealthfront-logo.png";
import Image from "next/image";
import React from "react";
import {Toaster} from "react-hot-toast";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Account Wealthfront',
    description: 'Sample Create Account Page for Wealthfront Code Challenge',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>


        <ReduxProvider>
            <NavDrawer/>
            <div className="flex justify-center items-center h-screen mt-2">

                <div className="bg-white pb-12 rounded-lg shadow-lg xl:max-w-[45%] lg:max-w-[55%] md:max-w-[70%] sm:max-w-[80%] max-w-[95%] flex flex-col justify-center items-center w-full">
                    <Image src={Logo} alt="Wealthfront Logo" width={300} height={300} />
                    {children}

                </div>
            </div>
        </ReduxProvider>
  <Toaster/>

        </body>
        </html>
    )
}
