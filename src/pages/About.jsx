import React from 'react'
import NavBar from '../components/NavBar'
import { GlareCard } from '../components/ui/glare-card'
import AboutCard from '../components/about-card'

const About = () => {
  return (
    <>
        <NavBar />
        <div className='about-page'>
            <GlareCard className="flex flex-col items-center justify-center">
                <img
                className="h-full w-full absolute inset-0 object-cover"
                src="/Telemate-9946.jpg"
                />
            </GlareCard>
            <AboutCard body="Welcome! I’m Rehan Samaratunga, a computer science student at Boston University with a focus on AI and product development. As a full-stack software engineer I am proficient in Python, Java, JavaScript, Assembly, C, C#, SQL and Git. Developing natural language processing and generation models for machine learning development. Able to pick up new languages and concepts very easily. Is extremely competent at processing information on the web to deliver solutions efficiently, excellent problem-solving skills and ability to perform well in a team. An outgoing, social team player looking to make an impact on the world."/>
        </div>
    </>
  )
}

export default About