'use client';
import { Button } from './ui/button';
import { icons } from 'lucide-react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant={'outline'}
            size={'icon'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
            <FaSun className="absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"></FaSun>
            <FaMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:rotate-0 dark:scale-100"></FaMoon>
        </Button>
    );
};

export default ThemeToggle;
