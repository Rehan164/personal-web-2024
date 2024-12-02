import React from 'react'
import NavBar from '../components/NavBar'
import RCard from "../components/r-card.jsx";

export const Projects = () => {
    return (
        <div className="projects">
            <NavBar />

            <div className="p-content">
                <h1>My Projects</h1>
                <RCard
                    title="MetaTube"
                    body="MetaTube is a simple and intuitive Flutter application designed to help YouTube creators save and manage metadata for their videos, including the title, description, and tags. IMPORTANT: Tutorial followed by Spellthron. Check him out at: https://github.com/Spellthorn."
                    photo="/metatube.jpg"
                    link="https://github.com/Rehan164/MetaTube"
                />
            </div>
        </div>
    )
}