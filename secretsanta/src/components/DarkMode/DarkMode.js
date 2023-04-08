import React, { useState, useEffect } from "react";
import darkModeIconLight from "../../icons/night-mode-light.png";
import darkModeIconDark from "../../icons/night-mode-dark.png";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkmode")) || false;
  });

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
