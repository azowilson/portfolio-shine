import { ReactNode } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './ui/card';
import Image from 'next/image';
interface SkillCardProps {
    icon: ReactNode | string;
    name: string;
    description: string;
    yearOfExperience: number | string;
    levelStars: number;
}
export default function SkillCard({
    icon,
    name,

    yearOfExperience,
    levelStars,
}: SkillCardProps) {
    return (
        <Card className="text-sm">
            <CardHeader className="flex justify-center items-center gap-3">
                {typeof icon === 'string' ? (
                    <Image src={icon} alt={name}></Image>
                ) : (
                    icon
                )}
                {name}
            </CardHeader>
            <CardContent>{levelStars}</CardContent>
            <CardFooter className="self-end">
                <p className="text-gray-400">
                    Posted {yearOfExperience} years ago
                </p>
            </CardFooter>
        </Card>
    );
}
