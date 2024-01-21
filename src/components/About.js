import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import "../scss/components/about.scss";
import aboutData from "../data/data.json";

const About = () => {
  const { aboutMeData } = aboutData;

  const openCV = () => {
    const pdfPath = `${process.env.PUBLIC_URL}/images/Uday-cv-EN.pdf`; // Vervang 'cv.pdf' met de daadwerkelijke naam van je PDF-bestand
    window.open(pdfPath, "_blank");
  };

  return (
    <section className="about__wrapper">
      <h3 className="about__title">About Me.</h3>
      <div className="about__cards">
        {aboutMeData.map((item) => (
          <div
            className="about__card"
            key={item.title}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.image})`,
            }}
          >
            <div className="about__section">
              <h3 className="about__card-title">{item.title}</h3>
              <p className="about__card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="about__cv-button" onClick={openCV}>
        <FontAwesomeIcon icon={faFilePdf} />
        My CV
      </button>
    </section>
  );
};

export default About;
