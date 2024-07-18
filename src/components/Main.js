import React from "react";
import "../scss/components/main.scss";
import Intro from "./Introduction";
import Project from "./Project";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Section = ({ id, children }) => (
  <section id={id} className="section">
    {children}
  </section>
);

const Main = () => {
  return (
    <>
      <main className="main">
        <Section>
          <Intro />
        </Section>
        <Section id="project">
          <Project />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        {/* <Section id="work">
          <Work />
        </Section> */}
        <Section id="contact">
          <Contact />
        </Section>
        <Footer />
      </main>
    </>
  );
};

export default Main;
