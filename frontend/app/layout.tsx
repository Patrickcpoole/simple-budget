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

import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
	title: 'Simple Budget',
	description: 'The easiest budgeting app you will ever use.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<ColorSchemeScript />
			</head>
			<body className='bg-background'>
				<ReduxProvider>
					<MantineProvider>
						<header className=''>
							<Navbar />
						</header>
						<NavDrawer />
						<main className='overflow-x-hidden w-full flex flex-col justify-start items-center'>
							{children}
						</main>
					</MantineProvider>
				</ReduxProvider>
				<Toaster />
			</body>
		</html>
	);
}
