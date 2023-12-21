// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Modal from "./components/ProjectDetail"; // Import the Modal component
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./App.css";
import { DarkModeProvider } from "./components/DarkMode";

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modal/:id" element={<Modal />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
};

export default App;
