import React from "react";
import icon from "../../src/icon.png";
import "../styling/Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <h1>Daily Planner</h1>
      <img src={icon} alt="header-icon" />
    </div>
  );
};

export default Header;
