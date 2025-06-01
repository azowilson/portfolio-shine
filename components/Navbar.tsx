'use client';

import useScroll from '@/hooks/useScroll';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
    const { isVisible } = useScroll();
    return (
        <nav
            className={cn(
                'fixed w-full flex justify-center items-center px-5 mt-5 mb-20 ease-in-out duration-300 z-10',
                isVisible ? `translate-y-0` : '-translate-y-[80px]'
            )}
        >
            <div className="opacity-90 w-full max-w-5xl p-3 flex justify-between items-center  text-gray-800 bg-gray-400 dark:text-white dark:bg-gray-900 rounded-4xl">
                <p>Wilson Leung</p>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
