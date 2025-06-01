import content from '../content/project.json';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
const Project: React.FC = () => {
    return (
        <section className="w-full mt-20 py-20 flex flex-col items-center gap-20  px-5 text-black dark:text-white bg-gradient-custom dark:bg-black">
            <h1 className="font-bold">Featured Projects</h1>
            {content.projects.map((project, index) => {
                return (
                    <ProjectCard
                        project={project as ProjectCardProps['project']}
                        key={`${index}_${project.name}`}
                    />
                );
            })}
        </section>
    );
};

export default Project;
