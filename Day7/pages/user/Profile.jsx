// Profile.jsx
import React from 'react';
import '../../assets/css/Profile.css';

function Profile({ enrollmentData }) {
  const { name, email, course, countryCode, phoneNumber, country, requirements, comments } = enrollmentData;

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Course:</strong> {course}</p>
        <p><strong>Country Code:</strong> {countryCode}</p>
        <p><strong>Phone Number:</strong> {phoneNumber}</p>
        <p><strong>Country of Residence:</strong> {country}</p>
        <p><strong>Requirements:</strong> {requirements}</p>
        <p><strong>Comments:</strong> {comments}</p>
      </div>
    </div>
  );
}

export default Profile;
