import { useEffect, useState } from 'react';

export default function useScroll() {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    let lastScroll: number = 0;
    const handleScroll = () => {
        console.log('scroll Y: ', window.scrollY);
        setIsVisible(!(window.scrollY > lastScroll));
        console.log('last scroll: ', lastScroll);
        lastScroll = window.scrollY;
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return { isVisible };
}
