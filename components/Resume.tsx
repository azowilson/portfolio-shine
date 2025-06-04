import { cn } from '@/lib/utils';

interface ResumeProps {
    dimension?: 'a4' | 'letter';
    format?: 'pdf' | 'jpag';
}
export default function Resume({ dimension }: ResumeProps) {
    return (
        <div
            className={cn(
                'bg-white text-black flex justify-center items-center',
                dimension ?? 'a4'
            )}
        >
            <div className="h-full w-full py-8 px-4 flex flex-col justify-start items-start">
                <h3>Wilson Leung</h3>
                <h6>Software Developer</h6>
                <h5>Skills</h5>
                <hr className=" w-full border-1 border-black" />
                <p>
                    Javascript/Typescript, Java, Python, SQL, Postgres, MongoDB,
                    Reactjs, Nextjs, Spring boot, Redis, Kafka, Gitlab CI/CD,
                    Github Action, Kubernetes, Docker, AWS, Azure, Jira, Agile
                    Collaboration, Team leadership
                </p>
                <h5>Experience</h5>
                <hr className=" w-full border-1 border-black" />
                <h6 className="font-bold">
                    Senior System Engineer - Altech (From Apr 2023 to Sept 2024)
                </h6>
                <ul className="mb-4 defaultList ">
                    <li className="">
                        Participated in high-level system design and adopting
                        Microservice principles to the system architecture.
                    </li>
                    <li>
                        Improved existing synchronous repayment flow by adapting
                        asynchronous system architecture. Sustantially improved
                        the performance from maximum 300 transactions load to
                        10,000+ loads per hour{' '}
                    </li>
                    <li>
                        Developed e-statement service under tight schedule. Over
                        90% users satisify the overall results
                    </li>
                    <li>
                        Developed credit card service internal content
                        management system. Using Nextjs and Shadcn UI framework
                        to faciliate the whole process of fontend development.
                    </li>
                </ul>
                <h6 className="font-bold">
                    Software Developer - EY Mtel (From Jul 2021 to Mar 2023)
                </h6>
                <ul className="mb-4 defaultList">
                    <li>
                        Participated in high-level system design and adopting
                        Microservice principles to the system architecture.
                    </li>
                    <li>
                        Improved existing synchronous repayment flow by adapting
                        asynchronous system architecture. Sustantially improved
                        the performance from maximum 300 transactions load to
                        10,000+ loads per hour{' '}
                    </li>
                    <li>
                        Developed e-statement service under tight schedule. Over
                        90% users satisify the overall results
                    </li>
                    <li>
                        Developed credit card service internal content
                        management system. Using Nextjs and Shadcn UI framework
                        to faciliate the whole process of fontend development.
                    </li>
                </ul>
                <h5>Education</h5>
                <hr className=" w-full border-1 border-black" />
                <ul className="defaultList">
                    <li>
                        Bachelor{"'"}s degree in Electronic and Information
                        Engineering - Hong Kong Polytechnic University (From
                        Sept 2016 to Aug 2021)
                    </li>
                </ul>
            </div>
        </div>
    );
}
