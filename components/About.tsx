import Image from 'next/image';
import { Card, CardHeader } from './ui/card';
import {
    BrainCircuit,
    Handshake,
    Laugh,
    ScanEye,
    FolderSymlink,
} from 'lucide-react';

const About: React.FC = () => {
    return (
        <section
            id="about"
            className="w-full py-20 flex flex-col items-center gap-20 shadow-md  px-5 text-black dark:text-white bg-white dark:bg-black"
        >
            <div className="max-w-6xl flex flex-col justify-center items-center border-2 rounded-2xl px-10 py-16 space-y-7 text-center ">
                <h4 className="w-32 relative justify-center text-md text-bold text-gray-400 dark:text-neutral-300 mb-1 after:block after:content-[''] after:right-0 after:absolute after:w-32 after:h-0.25 after:bg-black">
                    Soft Skills
                </h4>
                <h1 className="font-bold text-4xl ">About me</h1>

                <p className="font-medium text-2xl text-center py-4 px-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsa ratione, animi dolores voluptates perferendis est
                    dolorem ipsum sint ullam, repellendus et quisquam maxime
                    eligendi officia. Ipsa quam ratione tempora dolorem?
                </p>
                <div className="w-fit h-full flex  flex-col md:flex-row items-center justify-between px-4 border-b gap-3">
                    <div className="md:w-1/2">
                        <Image
                            className="rounded-2xl"
                            src="/images/portrait.jpg"
                            alt="portrait"
                            width={800}
                            height={700}
                        />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col items-start text-md text-gray-800 dark:text-neutral-200 border rounded-2xl p-7">
                        <div className="w-full decoration-0 space-y-6 text-left">
                            <Card className="">
                                <CardHeader className="">
                                    <span className="flex items-center gap-2">
                                        <Handshake className="inline" />
                                        <h6>Efficient communication</h6>
                                    </span>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader className="">
                                    <span className="flex items-center gap-2">
                                        <ScanEye className="inline" />
                                        <h6>Team player</h6>
                                    </span>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <span className="flex items-center gap-2">
                                        <BrainCircuit className="inline" />
                                        <h6>System Design Mindset</h6>
                                    </span>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <span className="flex items-center gap-2">
                                        <Laugh className="inline" />
                                        <h6>Time management</h6>
                                    </span>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <a
                className="flex justify-center items-center gap-2"
                href="/resume"
            >
                My resume <FolderSymlink />
            </a>
        </section>
    );
};
export default About;
