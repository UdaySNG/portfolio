// Project.jsx

import React, { useState, useEffect } from "react";
import "../scss/components/project.scss";
import projectsData from "../data/data.json";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Check if projectsData has the expected structure
    if (projectsData && Array.isArray(projectsData.projecten)) {
      // Set the projects state with data from the JSON file
      setProjects(projectsData.projecten);
    } else {
      console.error("Invalid projectsData structure:", projectsData);
    }
  }, []);

  const languageToIcon = {
    javascript: "devicon-javascript-plain",
    html: "devicon-html5-plain",
    css: "devicon-css3-plain",
    // Add more mappings as needed
  };

  return (
    <section className="projects">
      <h3 className="projects__heading">My Projects</h3>
      <ul className="projects__list">
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project) => (
            <li key={project.id} className="projects__item">
              <img
                src={project.image}
                alt={project.title}
                className="projects__image"
              />
              <div className="projects__content">
                <h4 className="projects__title">{project.title}</h4>
                <p className="projects__text">{project.text}</p>
                <p className="projects__info">
                  <span>
                    <i className="fas fa-users"></i> {project.numPeople} People
                  </span>
                  {project.languages && Array.isArray(project.languages) ? (
                    <span className="projects__language">
                      {project.languages.map((language, index) => {
                        const iconClass =
                          languageToIcon[language.toLowerCase()];
                        return iconClass ? (
                          <i key={index} className={iconClass}></i>
                        ) : null;
                      })}
                    </span>
                  ) : (
                    <span>No languages specified</span>
                  )}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link"
                >
                  Learn More
                </a>
              </div>
            </li>
          ))
        ) : (
          <p className="projects__empty">No projects available</p>
        )}
      </ul>
    </section>
  );
};

export default Project;
