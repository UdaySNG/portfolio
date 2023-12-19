import React, { useState, useEffect } from "react";
import { useDarkMode } from "./DarkMode"; // Update the path accordingly
import "../scss/components/header.scss";

const MenuItem = ({ label, onClick }) => (
  <button className="header__buttons" onClick={onClick}>
    {label}
  </button>
);

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
        <MenuItem label="Home" onClick={toggleMenu} />
        <MenuItem label="Projects" onClick={toggleMenu} />
        <MenuItem label="About me" onClick={toggleMenu} />
        <MenuItem label="Contact" onClick={toggleMenu} />
      </div>

      <button
        className={`${darkModeToggleClass} ${darkMode ? "dark-mode" : ""}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? "🔆" : "🌙"}
      </button>
    </header>
  );
};

export default Header;
