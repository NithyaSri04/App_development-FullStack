import React, { useState } from "react";
import "../assets/css/enrollment.css"; // Import the CSS file

function Enrollment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("beginner");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [requirements, setRequirements] = useState("");
  const [comments, setComments] = useState("");
  const [commentLength, setCommentLength] = useState(0);
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleCommentsChange = (e) => {
    const inputText = e.target.value;
    setComments(inputText);
    setCommentLength(inputText.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (!name || !email || !countryCode || !phoneNumber || !country) {
      alert("Please fill out all required fields.");
      return;
    }

    // Set submitted state to true
    setSubmitted(true);
  };

  

  return (
    <div className="enrollment-container">
      
      {submitted ? (
        <div>
          <p>Thanks for contacting us! We will be in touch with you shortly.</p>
        </div>
      ) : (
        <div>
          <h2>Enrollment</h2>
          <p>Please fill out the form below to enroll in our courses:</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="course">Select Course:</label>
              <select id="course" value={course} onChange={(e) => setCourse(e.target.value)}>
              <option value="select">Select...</option>
                <option value="beginner">Chess Fundamentals</option>
                <option value="advanced">Mastering Movements</option>
                <option value="endgame">Train your Tactics</option>
                <option value="advanced">Mate in 1</option>
                <option value="beginner">Chess Stratergies</option>
                <option value="beginner">Chess for Dummies</option>
                <option value="endgame">Advanced Tactics</option>
              </select>
            </div>
            <div>
              <label htmlFor="countryCode">Country Code:</label>
              <input type="text" id="countryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div>
              <label htmlFor="country">Country of Residence:</label>
              <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>
            <div>
              <label htmlFor="comments">Please message if you have any specific requirements</label>
              <textarea id="comments" value={comments} onChange={handleCommentsChange} maxLength={160} />
              <div>{commentLength} of 160 characters</div>
            </div>
            <button type="submit">Enroll</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Enrollment;
