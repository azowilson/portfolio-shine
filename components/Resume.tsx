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
            <h1>Wilson Leung</h1>
            <h3>Software Developer</h3>
            <h4>Summary</h4>
            <p></p>
        </div>
    );
}
