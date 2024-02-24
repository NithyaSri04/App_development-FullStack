import React from 'react';
import '../../assets/css/Home.css'; // Importing the CSS file for styling
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <div className="home-container">
      
      <h1>Welcome to Our Website!</h1>
      *<p>This is the home page of our awesome website.</p>
      <p>Feel free to explore and discover amazing things!</p>
      <Link to="/Courses">
        <button>Courses</button>
  </Link>
    </div>
  );
};

export default Home;
