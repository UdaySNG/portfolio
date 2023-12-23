import React, { useState, useEffect } from "react";
import { useDarkMode } from "./DarkMode";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "../scss/components/header.scss";

const MenuItem = ({ label, to, onClick }) => (
  <Link
    activeClass="active" // Add an 'active' class to the active link
    to={to}
    spy={true}
    smooth={true}
    offset={-70} // Adjust the offset if needed to account for fixed header
    duration={500}
  >
    <button className="header__buttons" onClick={onClick}>
      {label}
    </button>
  </Link>
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
        {/* <MenuItem label="Home" to="home" onClick={toggleMenu} /> */}
        <MenuItem label="Projects" to="projects" onClick={toggleMenu} />
        <MenuItem label="About me" to="about" onClick={toggleMenu} />
        <MenuItem label="Contact" to="footer" onClick={toggleMenu} />
      </div>

      <button
        className={`${darkModeToggleClass} ${darkMode ? "dark-mode" : ""}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? <i class="fa-solid fa-sun"></i> :<i class="fa-solid fa-moon"></i>}
      </button>
    </header>
  );
};

export default Header;
