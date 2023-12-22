// Project.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/components/project.scss";
import projectsData from "../data/data.json";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (projectsData && Array.isArray(projectsData.projecten)) {
      setProjects(projectsData.projecten);
    } else {
      console.error("Invalid projectsData structure:", projectsData);
    }
  }, []);

  const languageToIcon = {
    HTML: "fa-brands fa-html5",
    CSS: "fa-brands fa-css3-alt",
    SCSS: "fa-brands fa-sass",
    JavaScript: "fa-brands fa-js",
    React: "fa-brands fa-react",
    // Add more mappings as needed
  };

  return (
    <section className="projects">
      <h3 className="projects__heading">My Projects.</h3>
      <ul className="projects__list">
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project) => (
            <li key={project.id} className="projects__item">
              <img
                src={`${process.env.PUBLIC_URL}/${project.image}`}
                alt={project.title}
                className="projects__image"
              />
              <div className="projects__content">
                <h4 className="projects__title">{project.title}</h4>
                <p className="projects__text">{project.intro}</p>
                <p className="projects__info">
                  <span>
                    <i className="fas fa-users"></i> {project.numPeople}
                  </span>
                  {project.languages && Array.isArray(project.languages) ? (
                    <span className="projects__language">
                      {project.languages.map((language, index) => {
                        const iconClass = languageToIcon[language];
                        return iconClass ? (
                          <i key={index} className={iconClass}></i>
                        ) : null;
                      })}
                    </span>
                  ) : (
                    <span>No languages specified</span>
                  )}
                </p>
                {/* Only render the Link if there is a valid project */}
                {project.id && (
                  <Link to={`/modal/${project.id}`} className="projects__link">
                    Learn More
                  </Link>
                )}
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
