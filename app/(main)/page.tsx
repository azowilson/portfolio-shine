import About from '@/components/About';
import Hero from '@/components/Hero';
import Project from '@/components/Project';
import Technical from '@/components/Technical';

export default function Home() {
    // const getLayout = Component.getLayout ?? ((page) => page);
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
