import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({Name, Description, DemoLink, Image, Github}) => {
  
  return (
    <div className="project-card">
      <img src={Image} alt={Name} />
      <p className="project-name">{Name}</p>
      <p className="project-description">{Description}</p>
      <div className="cta-btns">
        <div onClick={() => window.open(DemoLink, '_blank')} className="primary-btn">Demo</div>
        <div onClick={() => window.open(Github, '_blank')} className="secondary-btn">Github</div>
      </div>
    </div>
  )
}

export default ProjectCard