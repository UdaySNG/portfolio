// Footer.jsx

import React from "react";
import "../scss/components/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github social-icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin social-icon"></i>
        </a>
        <a href="mailto:your-email@example.com">
          <i className="fas fa-envelope social-icon"></i>
        </a>
      </div>
      <span className="copyright">
        &copy; 2023 Uday Singh. All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
