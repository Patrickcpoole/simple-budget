import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '../redux/provider';
import '../globals.css';
import Navbar from '../components/Navbar';
import NavDrawer from '../components/NavDrawer';
import Logo from '../public/wealthfront-logo.png';
import Image from 'next/image';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Account Wealthfront',
	description: 'Sample Create Account Page for Wealthfront Code Challenge',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
      
			<body className={inter.className}>
				<ReduxProvider>
					<header className=''>
						<Navbar />
					</header>
						<NavDrawer />
                        <main className='overflow-x-hidden bg-red-500 w-full'>
						{children}
                        </main>
				</ReduxProvider>
				<Toaster />
			</body>
		</html>
	);
}
