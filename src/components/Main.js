import React from "react";
import "../scss/components/main.scss";
import Header from "./Header";
import Intro from "./Introduction";
import Project from "./Project";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <main className="main">
        <Intro id="intro" />
        <Project id="project" />
        <About id="about" />
        <Skills id="skills" />
        <Contact id="contact" />
        <Footer />
      </main>
    </>
  );
};

export default Main;
