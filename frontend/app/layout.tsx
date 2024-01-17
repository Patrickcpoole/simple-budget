import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {ReduxProvider} from '../redux/provider'
import '../globals.css'
import NavDrawer from "../components/NavDrawer";
import Navbar from '../components/Navbar';
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
            <Navbar />
            <div className="flex justify-center h-screen">
            
          
                    {children}

      
            </div>
        </ReduxProvider>
  <Toaster/>

        </body>
        </html>
    )
}
