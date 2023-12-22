import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/data.json";
import { useDarkMode } from "./DarkMode";
import "../scss/components/projectdetail.scss";
import Footer from "../components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [isSecondAccordionOpen, setSecondAccordionOpen] = useState(false);
  const [isThirdAccordionOpen, setThirdAccordionOpen] = useState(false);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Check if the device is a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Scroll to the top when the component mounts
  useEffect(() => {
    scrollToTop();
  }, []);

  let project;

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  const toggleSecondAccordion = () => {
    setSecondAccordionOpen(!isSecondAccordionOpen);
  };

  const toggleThirdAccordion = () => {
    setThirdAccordionOpen(!isThirdAccordionOpen);
  };

  // Validation and project retrieval
  if (!id || isNaN(parseInt(id, 10))) {
    return (
      <section className="project-detail project-detail--error">
        <div className="project-detail__content">
          <h2 className="project-detail__title">Invalid Project ID</h2>
          <p className="project-detail__text">Please select a valid project.</p>
        </div>
      </section>
    );
  }

  project = projectsData.projecten.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return (
      <section className="project-detail project-detail--error">
        <div className="project-detail__content">
          <h2 className="project-detail__title">Project Not Found</h2>
          <p className="project-detail__text">
            The project with ID {id} does not exist.
          </p>
        </div>
      </section>
    );
  }

  // Mapping of languages to icons
  const languageToIcon = {
    HTML: "fa-brands fa-html5",
    CSS: "fa-brands fa-css3-alt",
    SCSS: "fa-brands fa-sass",
    JavaScript: "fa-brands fa-js",
    React: "fa-brands fa-react",
    // Add more mappings as needed
  };

  const hasAccordionContent =
    project.features || project.upcoming || project.details;

  const darkModeToggleClass = "dark-mode";

  return (
    <main className={`project__detail ${darkMode ? "dark-mode" : ""}`}>
      <button
        className={`dark-mode-button ${darkModeToggleClass} ${
          darkMode ? "dark-mode" : ""
        }`}
        onClick={toggleDarkMode}
      >
        {darkMode ? "🔆" : "🌙"}
      </button>
      <header className="project__detail__title-and-button">
        <h2 className="project__detail__title">{project.title}</h2>
        <button
          className="project__detail__back__button"
          onClick={() => window.history.back()}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </header>
      <div className="project__detail__image__wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/${project.image}`}
          alt={project.title}
          className="project__detail__image"
        />
      </div>
      <div className="project__detail__skills__and__duration">
        <div className="project__detail__duration">
          <p>
            <i className="fa-solid fa-clock"></i>
            {project.duration}
          </p>
        </div>
        <div className="project__detail__buttons__wrapper">
          <div className="project__detail__buttons">
            {/* Add Live Site Button */}
            <button className="project__detail__live-site">
              <i className="fa-solid fa-globe"></i> View
            </button>
            {/* Add GitHub Button */}
            <button className="project__detail__github">
              <i className="fa-brands fa-github"></i> GitHub
            </button>
          </div>
        </div>
        <div className="project__detail__skills">
          <p>
            <span className="project__detail__languages">
              {project.languages.map((language, index) => (
                <i key={index} className={languageToIcon[language]}></i>
              ))}
            </span>
          </p>
        </div>
      </div>
      <section className="project__detail__content__wrapper">
        <article className="project__detail__description">
          <p>{project.text}</p>
        </article>
        <article className="project__details__accordion__wrapper">
          {hasAccordionContent && (
            <>
              {project.features && (
                <Accordion
                  isOpen={isAccordionOpen}
                  toggleAccordion={toggleAccordion}
                  content={project.features}
                  name="Features"
                />
              )}
              {project.upcoming && (
                <Accordion
                  isOpen={isSecondAccordionOpen}
                  toggleAccordion={toggleSecondAccordion}
                  content={project.upcoming}
                  name="Upcoming"
                />
              )}
              {project.details && (
                <Accordion
                  isOpen={isThirdAccordionOpen}
                  toggleAccordion={toggleThirdAccordion}
                  content={project.details}
                  name="Details"
                />
              )}
            </>
          )}
        </article>
      </section>
      <Footer id="footer" />
    </main>
  );
};

const Accordion = ({ isOpen, toggleAccordion, content, name }) => {
  const accordionContentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const contentHeight = accordionContentRef.current.scrollHeight;
      accordionContentRef.current.style.maxHeight = `${contentHeight}px`;
    } else {
      accordionContentRef.current.style.maxHeight = "0";
    }
  }, [isOpen]);

  return (
    <article className="project__detail__accordion">
      <button onClick={toggleAccordion}>
        {isOpen ? (
          <>
            {name} <span>-</span>
          </>
        ) : (
          <>
            {name} <span>+</span>
          </>
        )}
      </button>
      <div ref={accordionContentRef} className="accordion__content">
        {content}
      </div>
    </article>
  );
};

export default ProjectDetail;
