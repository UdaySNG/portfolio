import React, { useState, useEffect } from "react";
import { useDarkMode } from "./DarkMode";
import { Link } from "react-scroll";
import "../scss/components/header.scss";

const MenuItem = ({ label, to, onClick }) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <a href={`#${to}`} className="header__buttons" onClick={onClick}>
        {label}
      </a>
    </Link>
  );
};

const Header = (props) => {
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
        <MenuItem label="Projects" to="projects" onClick={toggleMenu} />
        <MenuItem label="About me" to="about__wrapper" onClick={toggleMenu} />
        <MenuItem label="Skills" to="skills-heading" onClick={toggleMenu} />
        <MenuItem label="Contact" to="contact" onClick={toggleMenu} />
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
