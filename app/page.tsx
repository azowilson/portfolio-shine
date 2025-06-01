import About from '@/components/About';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Project from '@/components/Project';
import Resume from '@/components/Resume';
import Technical from '@/components/Technical';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
            <Hero />
            <Project />
            <About />
            <Technical />
            {/* <Resume /> */}
        </div>
    );
}
