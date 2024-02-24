import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/Courses">Courses</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
