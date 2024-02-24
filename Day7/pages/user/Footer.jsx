// Footer.jsx
import React from "react";
import '../../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Chess Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
