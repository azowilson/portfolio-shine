'use client';
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import content from '../content/hero.json';
const Hero: React.FC = () => {
    const [, setTypingStatus] = useState('Initializing');

    return (
        // <div className="w-full">
        <section className="h-fit max-w-5xl mx-auto flex flex-col justify-start mb-40 px-5 shadow-md pb-30 mt-50">
            <div className="text-left ">
                {/* typing animation here */}
                <TypeAnimation
                    className="content text-pink-400 dark:text-blue-500 mb-5 md:text-2xl"
                    sequence={[
                        content.intro.startDelay,
                        () => {
                            setTypingStatus('typing');
                        },
                        content.intro.start,
                        () => {
                            setTypingStatus('typed');
                        },
                        content.intro.deleteDelay,
                        () => {
                            setTypingStatus('deleting');
                        },
                        content.intro.end,
                        () => {
                            setTypingStatus('deleted');
                        },
                        content.intro.restartDelay,
                    ]}
                    speed={{
                        value: content.intro.speed,
                        type: 'keyStrokeDelayInMs',
                    }}
                    deletionSpeed={{
                        value: content.intro.deletionSpeed,
                        type: 'keyStrokeDelayInMs',
                    }}
                    wrapper={'h2'}
                    repeat={Infinity}
                />
                <h1 className="font-bold mb-4">Wilson Leung.</h1>
                <h2 className="text-[clamp(16px,4vw,16rem)] mb-6 text-gray-600 dark:text-gray-400">
                    A passionate{' '}
                    <span className="text-indigo-500">
                        {'<'}Software Developer /{'>'}
                    </span>{' '}
                    building amazing digital experiences.
                </h2>
                <div className="mt-4 flex gap-3">
                    <a
                        href="mailto:leungazowilson.ca@gmail.com"
                        className="text-[min(60px, 2rem)] md:text-2xl px-6 py-3  dark:text-black dark:bg-blue-300 dark:hover:bg-blue-600 bg-indigo-400 hover:bg-indigo-600 hover:-translate-y-1 text-white rounded-4xl shadow-md transition duration-300 ease-in-out delay-150"
                    >
                        Contact Me
                    </a>

                    <a
                        href="https://www.linkedin.com/in/wilsonleung-dev/"
                        target="_blank"
                        className="text-[min(60px, 2rem)] md:text-2xl px-6 py-3 dark:bg-gray-800 dark:hover:bg-gray-600 bg-gray-800 text-white rounded-4xl shadow-md hover:bg-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
        // </div>
    );
};

export default Hero;
