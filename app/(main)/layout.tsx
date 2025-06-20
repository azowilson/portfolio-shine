import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';

const roboto = Roboto({
    weight: ['200', '400', '600'],
    variable: '--font-roboto',
    subsets: ['latin'],
    display: 'swap',
});

const robotoMono = Roboto_Mono({
    weight: ['200', '400', '600'],
    variable: '--font-roboto-mono',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`w-full min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-all duration-300 relative ${roboto.variable} ${robotoMono.variable} antialiased`}
            >
                <ThemeProvider attribute={'class'} enableSystem={true}>
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
