import React from 'react';

const RCard = ({ title, body, link, video }) => {
    return (
        <div className="project-card border border-black/[0.2] dark:border-white/[0.2]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"/>
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black"/>
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"/>
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black"/>

            <div className="flex justify-between items-start w-full">
                <h2 className="text-lg font-semibold">{title}</h2>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Github Link
                </a>
            </div>
            <div className="flex justify-center items-end pt-12">
                <p className="text-center text-sm">{body}</p>
            </div>
            {video && (
                <div className="pt-4">
                    <video width="100%" controls>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </div>
    );
};

export default RCard;

export const Icon = ({className, ...rest}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>
        </svg>
    );
};