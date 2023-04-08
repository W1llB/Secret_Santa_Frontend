import React from "react";
import "./Header.css";
import DarkMode from "../DarkMode/DarkMode";

function Header() {
  return (
    <header className="header">
      <div />
      <h1>Secret Santa</h1>
      <DarkMode />
    </header>
  );
}

export default Header;
