import React, { useState, useEffect } from "react";
import { useDarkMode } from "./DarkMode";
import "../scss/components/header.scss";

const ScrollButton = ({ label, to, onClick }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(to);

    if (targetElement) {
      const offset = targetElement.offsetTop - 70;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });

      onClick();
    }
  };

  return (
    <div className="header__buttons" onClick={handleClick}>
      {label}
    </div>
  );
};

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const headerClass = `header ${darkMode ? "dark-mode" : ""}`;
  const navClass = `header__nav ${menuOpen ? "header__nav--open" : ""}`;
  const darkModeToggleClass = "header__darkmode-toggle";

  return (
    <header className={headerClass}>
      {isMobile && (
        <div className="header__hamburger-menu" onClick={toggleMenu}>
          <div className={`header__menu-toggle ${menuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      <div className={navClass}>
        <ScrollButton label="Projects" to="project" onClick={toggleMenu} />
        <ScrollButton label="About me" to="about" onClick={toggleMenu} />
        <ScrollButton label="Skills" to="skills" onClick={toggleMenu} />
        <ScrollButton label="Contact" to="contact" onClick={toggleMenu} />
      </div>

      <button
        className={`${darkModeToggleClass} ${darkMode ? "dark-mode" : ""}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </button>
    </header>
  );
};

export default Header;
