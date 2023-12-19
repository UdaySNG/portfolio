import "../scss/components/main.scss";
import Intro from "./Introduction";
import Project from "./Project";
import About from "./About";
import Skills from "./Skills";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <main className="main">
        <Intro />
        <Project />
        <About />
        <Skills />
        <Footer />
      </main>
    </>
  );
};

export default Main;
