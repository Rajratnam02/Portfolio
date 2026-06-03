import React from "react";
import "./Skills.css";
import SkillCard from "./component/SkillCard";

import { skills } from "../../context/SkillContext";

const Skills = () => {
  return (
    <div id="skills" className="skill-section">
      <p className="skill-heading">Skills & Technologies</p>
      <div className="skill-cards">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
