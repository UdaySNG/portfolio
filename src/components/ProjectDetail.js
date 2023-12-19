// ProjectDetails.jsx

import React from "react";
import "../scss/components/project-details.scss";

const ProjectDetails = ({ project, onBackClick }) => {
  return (
    <div className="project-details-container">
      <div className="project-details">
        <h3 className="project-details__title">{project.title}</h3>
        <p className="project-details__description">{project.details}</p>
        {/* Voeg andere details toe zoals nodig */}
        <button className="project-details__back-button" onClick={onBackClick}>
          Back
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
