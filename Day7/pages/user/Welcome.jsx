// Welcome.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Import Footer component
import '../../assets/css/Welcome.css';

const Welcome = () => {
  return (
    <div>
      <Navbar>
        <div className="container">
          <h1>Welcome to Chess Academy Admission Portal</h1>
          <p>
            We offer a variety of courses to help you improve your chess skills.
            Enroll now!
          </p>
          <div className="button-container">
            <Link to="/enrollment">
              <button>Enrollment</button>
            </Link>
          </div>
        </div>
      </Navbar>
      <Footer /> {/* Include Footer component */}
    </div>
  );
};

export default Welcome;
