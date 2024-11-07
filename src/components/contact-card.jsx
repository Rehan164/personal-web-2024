import React from 'react';
import { GithubOutlined, LinkedinOutlined, XOutlined, InstagramOutlined } from '@ant-design/icons';

const ContactCard = () => {
    return (
    <div className="project-card border border-black/[0.2] dark:border-white/[0.2]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black"/>
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black"/>
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black"/>
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black"/>

        <div className="flex flex-col items-center text-center space-y-2">
            <h2 className="text-xl font-semibold">Rehan Samaratunga</h2>
            <p className="text-gray-300">Want to chat? Feel free to reach me at...</p>
            <p className="text-gray-300">Email: rdsam@bu.edu</p>
            <p className="text-gray-300">Phone: +1 (978) 908-9282</p>
        </div>

        <div className="flex justify-evenly pt-4">
            <a href="https://github.com/Rehan164" target="_blank" rel="noopener noreferrer">
                <GithubOutlined style={{ fontSize: '24px', color: 'rgb(209 213 219)' }} />
            </a>
            <a href="https://www.linkedin.com/in/rehan-samaratunga/" target="_blank" rel="noopener noreferrer">
                <LinkedinOutlined style={{ fontSize: '24px', color: '#0A66C2' }} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <XOutlined style={{ fontSize: '24px', color: ' rgb(209 213 219)' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramOutlined style={{ fontSize: '24px', color: '#E4405F' }} />
            </a>
        </div>
    </div>
)};

export default ContactCard;


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