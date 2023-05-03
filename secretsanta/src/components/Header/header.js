import React from "react";
import "./Header.css";
import PropTypes from "prop-types";
import DarkMode from "../DarkMode/DarkMode";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div />
      <h1>Secret Santa</h1>
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}

export default Header;

Header.propTypes = {
  darkMode: PropTypes.bool,
  setDarkMode: PropTypes.func,
};
