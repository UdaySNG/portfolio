import "../scss/components/main.scss";
import Intro from "./introduction";
import Project from "./Project";

const Main = () => {
  return (
    <>
      <main className="main">
        <Intro/>
        <Project/>
      </main>
    </>
  );
};

export default Main;
