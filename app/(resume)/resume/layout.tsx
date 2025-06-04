import DocNavbar from '@/components/DocNavbar';
import { ThemeProvider } from 'next-themes';
import { Roboto, Roboto_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import '../../globals.css';
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

export default function Layout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`w-full min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-all duration-300 relative ${roboto.variable} ${robotoMono.variable} antialiased mb-20`}
            >
                <ThemeProvider attribute={'class'} enableSystem={true}>
                    <DocNavbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
