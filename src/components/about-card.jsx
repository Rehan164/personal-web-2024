import React from 'react'

const AboutCard = ({ body }) => {
    return (
        <div className="project-card border border-black/[0.2] dark:border-white/[0.2]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"/>
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black"/>
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"/>
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black"/>

            <div className="flex justify-center items-end">
                <p className="text-center text-sm">{body}</p>
            </div>
        </div>
    );
}

export default AboutCard

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