import skills from '@/content/skill.json';
import SkillCard from './SkillCard';
import { Wrench } from 'lucide-react';
export default function Technical() {
    return (
        <section className="w-full py-20 flex flex-col items-center gap-20 shadow-md  px-5 text-black dark:text-white bg-white dark:bg-black">
            <div className="max-w-6xl flex flex-col justify-center items-center border-2 rounded-2xl px-10 py-16 space-y-7 text-center ">
                <h4 className="w-32 relative justify-center text-md text-bold text-gray-400 dark:text-neutral-300 mb-1 after:block after:content-[''] after:right-0 after:absolute after:w-32 after:h-0.25 after:bg-black">
                    Hard Skills
                </h4>
                <h1 className="font-bold text-4xl ">Technical Skills</h1>
            </div>
            <div className="w-full p-4 flex flex-wrap justify-center items-center gap-2">
                {skills.map(({ icon, name, description, yearOfExperience }) => (
                    <SkillCard
                        key={name}
                        icon={icon ? icon : <Wrench size={80} />}
                        name={name}
                        description={description}
                        yearOfExperience={yearOfExperience}
                        levelStars={5}
                    />
                ))}
            </div>
        </section>
    );
}
