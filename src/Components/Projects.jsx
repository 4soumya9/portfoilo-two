import React, { useState } from "react";
import "./Projects.css";
import { FaExternalLinkAlt } from "react-icons/fa";

import netflixImg from "../../Images/Netflix.png";
import foodImg from "../../Images/FoodOrdering.png";
import portfolioImg from "../../Images/Portfolio.png";
import Intelli from "../../Images/Intelliconvene.png";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <div className="description-container">
          <p className={`project-description ${isExpanded ? "expanded" : ""}`}>
            {project.description}
          </p>
          <button
            className="see-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        </div>

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

          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project btn-secondary"
            >
              Details
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Netflix-GPT",
      description:
        "Developed a high-performance, AI-integrated movie discovery platform using React, Redux Toolkit, and Firebase, incorporating TMDB API for dynamic content delivery and GPT-powered intelligent search. Designed reusable components, optimized state management, and applied performance best practices to build a responsive, scalable front-end aligned with enterprise development standards.",
      tech: ["React", "Redux Toolkit", "Gemini API", "Firebase", "Tailwind CSS"],
      image: netflixImg,
      liveLink: "https://netflix-gpt-2-theta.vercel.app/",
      codeLink:
        "https://www.linkedin.com/posts/soumyajit-saha-%F0%9F%9A%80-9b4186191_reactjs-tailwindcss-firebase-activity-7231030340021104641-1QWm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0N0hgBsJzJejULDrQypuaMpac1I5lJ2zk",
    },
    {
      id: 2,
      title: "Food Ordering App",
      description:
        "Engineered a production-ready food ordering application using React, Redux Toolkit, and React Router, featuring API-driven restaurant listings, optimized state management for cart workflows, and lazy loading for improved performance. Emphasized reusable components, clean architecture, and responsive design principles aligned with enterprise front-end standards.",
      tech: ["React", "Redux Toolkit", "React Router", "Vite", "Tailwind CSS"],
      image: foodImg,
      liveLink: "https://swiggy-food-ordering-app.vercel.app/",
      codeLink:
        "https://www.linkedin.com/posts/soumyajit-saha-%F0%9F%9A%80-9b4186191_frontend-reactjs-javascript-activity-7258917571242962944-bh1F?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC0N0hgBsJzJejULDrQypuaMpac1I5lJ2zk",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Developed an enterprise-grade personal portfolio using React and Vite, emphasizing clean architecture, reusable components, optimized build performance, and responsive design principles to reflect strong front-end engineering and production best practices",
      tech: ["React", "React Router", "Vercel", "CSS3", "Vite"],
      image: portfolioImg,
      liveLink: "https://portfoilo-two-nine.vercel.app/",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Intelliconvene",
      description:
        "Developed a professional event management platform with responsive UI, optimized performance, and scalable component-based architecture.",
      tech: ["React", "Next.js", "Tailwind CSS", "Firebase", "DotNet", "Azure"],
      image: Intelli,
      liveLink: "https://intelliconvene.com/",
      codeLink: null,
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <p className="more-projects">
        Additional enterprise-grade projects and detailed experience can be viewed on{" "}
        <a
          href="https://www.linkedin.com/in/soumyajit-saha-9b4186191"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>.
      </p>
    </section>
  );
};

export default Projects;
