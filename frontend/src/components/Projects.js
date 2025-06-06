import React from 'react';
import './Projects.css';
import calciimg from '../assets/CALCI.png'; 
import fieldviewimg from '../assets/fieldview.png';
import ATTENDIFYPRO from '../assets/ATTEN.PNG';
function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>Calculator App</h3>
        <p>A simple calculator built using HTML, CSS, and JavaScript with a clean UI.</p>
        <img src={calciimg} alt="Calculator" />
      </div>

      <div className="project-card">
        <h3>Attendify Pro (Mobile App)</h3>
        <p>An attendance management system for colleges using location & fingerprint recognition.</p>
        <img src={ATTENDIFYPRO} alt="Attendify Pro" />
      </div>

      <div className="project-card">
        <h3>FieldView (Mobile App)</h3>
        <p>An app that helps HODs and District officials to do field visits digitally.</p>
        <img src={fieldviewimg} alt="FieldView" />
      </div>
    </section>
  );
}

export default Projects;
