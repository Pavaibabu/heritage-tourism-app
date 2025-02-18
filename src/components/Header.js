import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Heritage Tourism</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/map">Map</Link>
        <Link to="/voice">Voice Query</Link>
      </nav>
    </header>
  );
};

export default Header;
