import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import netflixImg from "../../Images/Netflix.png";
import foodImg from "../../Images/FoodOrdering.png";
import portfolioImg from "../../Images/Portfolio.png";
import Intelli from "../../Images/Intelliconvene.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Netflix-GPT",
      description:
        "Built a Netflix-inspired streaming platform using React, Redux Toolkit, and Firebase, integrating TMDB API and GPT-powered intelligent movie recommendations with optimized performance and multi-language support.",
      tech: ["React", "Redux Toolkit", "Gemini API", "Firebase"],
      image: netflixImg,
      liveLink: "https://netflix-gpt-2-theta.vercel.app/",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Food Ordering App",
      description:
        "Developed a responsive food ordering application using React, Redux Toolkit, and React Router, featuring live API-based restaurant data integration, dynamic cart management with real-time price calculation, and optimized performance with lazy loading and reusable components.",
      tech: ["React", "Redux Toolkit", "React Router", "Vite"],
      image: foodImg,
      liveLink: "https://swiggy-food-ordering-app.vercel.app/",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A personal portfolio website with unique laptop-style framing, light/dark mode, and interactive animations built using modern React architecture.",
      tech: ["React", "CSS3", "Vite"],
      image: portfolioImg,
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Intelliconvene",
      description:
        "Developed a professional event management platform with responsive UI, optimized performance, and scalable component-based architecture.",
      tech: ["React", "Vite", "Responsive Design"],
      image: Intelli,
      liveLink: "https://intelliconvene.com/",
      codeLink: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project btn-primary"
                >
                  Live Demo{" "}
                  <FaExternalLinkAlt
                    style={{ marginLeft: "5px", fontSize: "0.8em" }}
                  />
                </a>

                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project btn-secondary"
                >
                  Code{" "}
                  <FaGithub style={{ marginLeft: "5px", fontSize: "0.9em" }} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
