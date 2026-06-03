import React from 'react'
import "./SkillCard.css"
const SkillCard = ({icon, name}) => {
  return (
    <div className="skill-card">
      <div className="icon">{icon}</div>
      <div className="skill-name">{name}</div>
    </div>
  )
}

export default SkillCard