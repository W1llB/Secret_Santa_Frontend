import React, { useEffect } from "react";
import PropTypes from "prop-types";
import darkModeIconLight from "../../icons/night-mode-light.png";
import darkModeIconDark from "../../icons/night-mode-dark.png";

export default function DarkMode({ darkMode, setDarkMode }) {
  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkMode));
  }, [darkMode]);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <img
      src={darkMode ? darkModeIconLight : darkModeIconDark}
      className="darkmode-toggle"
      onClick={handleClick}
    />
  );
}

DarkMode.propTypes = {
  darkMode: PropTypes.bool,
  setDarkMode: PropTypes.func,
};
