import React from "react";
import "./header.css";
import { TypeAnimation } from "react-type-animation";
const Header = () => {
  return (
    <div id="about" className="header">
      

      <div className="left">
        <p className="header-text">
          <TypeAnimation
            sequence={[
              "Hello, I'm Rajratnam",
              2000,
              "I'm a Full Stack Developer",
              2000,
              "I'm a Problem Solver",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </p>
        
        <p className="header-subtext">Hey, I'm Raj Ratnam, a B.Tech Computer Science & Engineering student at IIIT Ranchi and a passionate Full Stack Developer. I specialize in building modern web applications, real-time collaborative platforms, and scalable backend systems. Driven by problem-solving and continuous learning, I enjoy transforming innovative ideas into impactful digital experiences.</p>

        <div className="cta-buttons">
          <div onClick={() => (document.getElementById("projects").scrollIntoView({behavior: "smooth"}))} className="primary-btn">View My Work</div>
          <div onClick={() => (document.getElementById("contact").scrollIntoView({behavior: "smooth"}))} className="secondary-btn">Contact Me</div>
        </div>

        <div className="badges">
          <span className="badge">React</span>
          <span className="badge">Node.js</span>
          <span className="badge">MongoDb</span>
          <span className="badge">Express</span>
          <span className="badge">DSA</span>
        </div>
      </div>
      
      <div className="right">
        <div className="img-container">
            <img src="/MainImage.jpeg" alt="Main Image" />
        </div>
      </div>

    </div>
  );
};

export default Header;
