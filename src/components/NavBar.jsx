import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
        <Link to="/" className='nav-link'>\ Home</Link>
        <Link to="/about" className='nav-link'>\ About</Link>
        <Link to="/work-experience" className='nav-link'>\ Experience</Link>
        <Link to="/projects" className='nav-link'>\ Projects</Link>
        <Link to="/contact" className='nav-link'>\ Contact</Link>
    </div>
  )
}

export default NavBar