import React from 'react'
import NavBar from '../components/NavBar'
import { CanvasRevealEffectDemo } from '../components/ui/canvas-reveal-demo'
import '../styles.scss'

const Experience = () => {
  return (
    <>
        <NavBar />
        <div className='experience-card-space'>
            <CanvasRevealEffectDemo />
        </div>
    </>
  )
}

export default Experience