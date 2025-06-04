'use client';
import { FaArrowLeft } from 'react-icons/fa';
import { Button } from './ui/button';
import { redirect } from 'next/navigation';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useState } from 'react';

type FormatSize = 'a4' | 'letter';
export default function DocNavBar() {
    const [format, setFormat] = useState<string>('a4');
    const handleBackBtnOnClick = () => {
        redirect('/#technical');
    };

    const handleDownloadbtnOnClick = () => {};

    return (
        <nav className="sticky top-0 w-full px-42 py-4 bg-gray-600 text-black flex justify-between items-center mb-16">
            <Button
                variant={'ghost'}
                className="flex justify-center items-center gap-2 text-white"
                onClick={() => handleBackBtnOnClick()}
            >
                <FaArrowLeft />
                Back
            </Button>
            <div className="flex justify-center items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'outline'} className="text-white">
                            Format
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuRadioGroup
                            value={format as FormatSize}
                            onValueChange={setFormat}
                        >
                            <DropdownMenuRadioItem value={'a4' as FormatSize}>
                                A4
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value={'letter' as FormatSize}
                            >
                                Letter
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button onClick={handleDownloadbtnOnClick}>Download</Button>
            </div>
        </nav>
    );
}
