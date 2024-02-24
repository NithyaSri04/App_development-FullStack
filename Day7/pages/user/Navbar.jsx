import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Navbar.css";

const Navbar = ({ children }) => {
  return (
    <>
      <div className="main-page">
        <nav id="navbar">
          <h1 className="logo">
            <span> Chess Academy</span>
          </h1>

          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/achievements">Achievements</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </>
  );
};

export default Navbar;
