import React, { createContext, useContext, useState } from "react";

const Darkmode = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <Darkmode.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </Darkmode.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(Darkmode);
};
