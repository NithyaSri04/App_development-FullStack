

import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../../assets/css/login.css';

const Login = ({ handleSwitchPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => { 
    e.preventDefault();

    // Perform validation
    if (!email || !password) {
      setErrorMessage('Please enter both email and password');
      return;
    }

    setEmail('');
    setPassword('');
    handleSwitchPage();
  };

  return (

    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="form-group">
          <Link to="./Home"><button type="submit">Login</button></Link>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="switch-page">
          Don't have an account?{' '}
          <Link to="/signup">Signup</Link>      
        </div>
      </form>
    </div>
    
  );
};

export default Login;



