import { cn } from '@/lib/utils';

interface ResumeProps {
    dimension?: 'a4' | 'letter';
    format?: 'pdf' | 'jpag';
}
export default function Resume({ dimension, format }: ResumeProps) {
    return (
        <div
            className={cn(
                'bg-white text-black flex justify-center items-center',
                dimension ?? 'a4'
            )}
        >
            this is resume
        </div>
    );
}
