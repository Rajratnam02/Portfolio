import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <p className='logo'>Rajratnam</p>

        <div className='nav-links'>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#skills'>Skills</a>
            <a href='#contact'>Contact</a>
        </div>

        <div className='resume-box'>
            <a href='#resume' target='_blank' rel='noopener noreferrer'>
                Resume
            </a>
        </div>
    </div>
  )
}

export default Navbar