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
                    title="Project Title"
                    body="Project Body"
                    link="https://example.com"
                />
            </div>
        </div>
    )
}