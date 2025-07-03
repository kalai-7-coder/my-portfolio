import React from 'react';
import './Projects.css';
import calciimg from '../assets/CALCI.png';
import fieldviewimg from '../assets/fieldview.png';
import ATTENDIFYPRO from '../assets/attendlogo1.jpg';

function Projects() {
  const projectData = [
    {
      title: "Calculator App",
      description: "A simple calculator built using HTML, CSS, and JavaScript with a clean UI.",
      techs: "HTML, CSS, JavaScript",
      image: calciimg,
      url: "https://9000-firebase-studio-1749033310140.cluster-w5vd22whf5gmav2vgkomwtc4go.cloudworkstations.dev",
    },
    {
      title: "Attendify Pro (Mobile App)",
      description: "Attendance system using location, fingerprint and facial recognition.",
      techs: "Java, XML, Firebase, MLKit",
      image: ATTENDIFYPRO,
      url: "https://your-attendify-demo-link.com",
    },
    {
      title: "ReportView (Mobile App)",
      description: "Helps students to submit their reports or projects and HOD or teachers can view and digitally sign their documents.",
      techs: "Java, XML, MySQL, DBeaver, Postman, NextJS, SHA256, AWS SNS",
      image: fieldviewimg,
      url: "https://your-fieldview-demo-link.com",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>
            <a href={proj.url} target="_blank" rel="noopener noreferrer">
              <img src={proj.image} alt={proj.title} className="project-image" />
            </a>
            <div className="project-card-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <p><strong>Techs:</strong> {proj.techs}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;