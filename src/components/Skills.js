import React from "react";
import "../scss/components/skills.scss";
import skillsData from "../data/data.json";

const Skills = () => {
  return (
    <section>
      <h3 className="skills-heading">Skills</h3>
      <div className="skills-container">
        {skillsData.cards.map((card, index) => (
          <article key={index} className="skill-card">
            <figure className="skill-card__icon">
              <i className={`fa ${card.icon}`}></i>
            </figure>
            <div className="skill-card__content">
              <h3 className="skill-card__title">{card.title}</h3>
              <p className="skill-card__text">{card.text}</p>
              <p className="skill-card__experience">Experience: {card.experience}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
