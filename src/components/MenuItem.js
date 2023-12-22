// MenuItem.js
import React from "react";

const MenuItem = ({ id, label }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(id.replace("#", ""));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="header__buttons" onClick={handleClick}>
      {label}
    </button>
  );
};

export default MenuItem;
