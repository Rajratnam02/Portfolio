import React, { useState } from "react";
import "./Navbar.css";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <p className="logo">Rajratnam</p>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="resume-box">
          <a href="#resume" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>

        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <BiX /> : <BiMenu />}
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <a href="#about" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="#projects" onClick={() => setIsOpen(false)}>
          Projects
        </a>
        <a href="#skills" onClick={() => setIsOpen(false)}>
          Skills
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
        <a href="#resume" onClick={() => setIsOpen(false)}>
          Resume
        </a>
      </div>
    </>
  );
};

export default Navbar;
