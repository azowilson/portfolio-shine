import { roboto, robotoMono } from '@/app/(main)/layout';
import DocNavbar from '@/components/DocNavbar';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

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
