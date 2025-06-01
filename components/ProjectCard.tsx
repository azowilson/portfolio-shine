import Image from 'next/image';
import {
    Card,
    CardHeader,
    CardFooter,
    CardDescription,
    CardContent,
} from './ui/card';
import { Badge } from './ui/badge';
import { Github } from 'lucide-react';

export type ProjectCardProps = {
    project: {
        name: string;
        description: string;
        technologies: string[];
        isPublicRepo: boolean;
        githubLink: string;
        image?: string;
        imageAlign?: 'left' | 'right';
    };
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    project,
}: ProjectCardProps) => {
    return (
        <div
            className={`w-full  max-w-3xl md:h-max flex justify-center bg-[rgb(254,254,254)] dark:bg-[rgb(14,15,17)] text-2xl rounded-2xl p-4`}
        >
            <Card className="w-full flex flex-col justify-between items-center text-black dark:text-white">
                {project.image ? (
                    <Image
                        className="w-full object-cover"
                        width={500}
                        height={600}
                        src={project.image}
                        alt={project.name}
                    />
                ) : null}
                <div className="w-full">
                    <CardHeader className="font-bold flex justify-between items-center flex-wrap">
                        <h3 className="w-fit">{project.name}</h3>
                        <Github
                            size={30}
                            className="hover:rotate-30  duration-300 ease-in-out "
                        />
                    </CardHeader>
                    <CardContent className="mb-2">
                        <CardDescription>
                            <h6>{project.description}</h6>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => {
                            return (
                                <Badge
                                    variant="outline"
                                    className="badge text-black dark:text-white"
                                    key={`${project.name}_${index}_${tech}`}
                                >
                                    <span>{tech}</span>
                                </Badge>
                            );
                        })}
                    </CardFooter>
                </div>
            </Card>
        </div>
    );
};
export default ProjectCard;
