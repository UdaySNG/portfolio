import React from "react";
import HomePage from "./pages/Homepage";
import "./App.css";
import { DarkModeProvider } from "./components/DarkMode";

const App = () => {
  return (
    <DarkModeProvider>
      <HomePage />
    </DarkModeProvider>
  );
};

export default App;
