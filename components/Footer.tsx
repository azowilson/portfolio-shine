import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer: React.FC = () => {
    return (
        <div>
            <footer className="footer w-full bg-black text-white py-4">
                <hr className="w-4/5 bg-white mb-2" />
                <div className="container mx-auto text-center md:max-w-5xl">
                    <div className="w-full grid grid-rows-2 grid-cols-3 gap-8 px-4">
                        <p className="text-left md:text-right col-start-1 col-span-3 md:col-start-2 md:col-span-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Blanditiis facere corporis nihil, laborum
                            repudiandae fugiat. Nisi rem esse, ipsa eaque
                            repudiandae perferendis impedit commodi vel
                            repellendus, libero quisquam! Necessitatibus, neque.
                        </p>
                        <ul className="justify-self-center space-y-3">
                            <li className="border-l-1 border-l-white px-2">
                                <a
                                    className="flex items-center gap-2"
                                    href="https://github.com/azowilson"
                                    target="_blank"
                                >
                                    <FaGithub size={30} />
                                    Github
                                </a>
                            </li>
                            <li
                                className="border-l-1 border-l-white px-2 "
                                style={{ listStyle: 'none' }}
                            >
                                <a
                                    href="mailto:leungazowilson.ca@gmail.com"
                                    className="flex items-center gap-2"
                                >
                                    <MdEmail size={30} />
                                    Email
                                </a>
                            </li>
                        </ul>
                        <div className="h-fit">
                            <a
                                className="flex justify-center items-center gap-2"
                                href="https://www.linkedin.com/in/wilsonleung-dev/"
                                target="_blank"
                            >
                                <FaLinkedin size={30} />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <p className="text-sm bottom-0 absolute left-1/2 -translate-x-1/2">
                        &copy; {new Date().getFullYear()} Wilson Leung.
                    </p>
                </div>
                <hr className="absolute w-3/5 right-0 bottom-0 self-end bg-white" />
            </footer>
        </div>
    );
};

export default Footer;
