import React from "react";
import "../scss/components/about.scss";
import skillsData from "../data/data.json";

const About = () => {
  const personalInfo = {
    aboutMe:
      "I'm a passionate web developer with expertise in front-end technologies. My goal is to create user-friendly and visually appealing websites.",
  };

  const skills = skillsData.skills && Array.isArray(skillsData.skills) ? skillsData.skills : [];

  return (
    <section className="about-wrapper">
      <div className="about">
        <div className="about__section">
          <h3>About Me.</h3>
          <p className="about__description">{personalInfo.aboutMe}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
