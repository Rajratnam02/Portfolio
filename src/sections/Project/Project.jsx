import React from 'react'
import './Project.css'
import ProjectCard from './component/ProjectCard'
import { projects } from '../../context/ProjectContext'
const Project = () => {
  return (
    <div id="projects" className="project-section">
        <p className="heading">My Projects</p>
        <div className="subtext">Explore a selection of projects I've built, showcasing my experience in full-stack development, problem-solving, and modern web technologies.</div>
        
        <div className="project-cards">
          {projects.map((item) => (
            <ProjectCard Name={item.Name} Description={item.Description} DemoLink={item.DemoLink} Github={item.Github} Image={item.Image} />
          ))}
        </div>
    </div>
  )
}

export default Project