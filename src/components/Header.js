import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 
// Ensure you create a Header.css file for styling
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/main-logo.png" alt="Heritage Tourism Logo" />
        <h1>Discover Tamil Heritage</h1>
      </div>
      <nav>
        
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <div className="dropdown">
          <button className="dropbtn">Gallery ▼</button>
          <div className="dropdown-content">
            <Link to="/gallery/photos">Photos</Link>
            <Link to="/gallery/videos">Videos</Link>
            <Link to="/gallery/collaboration">Collaboration</Link>
          </div>
        </div>
        <Link to="/maps">Maps</Link>
        <Link to="/voice">Voice Query</Link>
        <Link to="/blogs">Blogs</Link>
        <SearchBar />
      </nav>
    </header>
  );
};

export default Header;