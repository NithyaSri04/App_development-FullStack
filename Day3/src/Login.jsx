import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/login.css';
import email_img from '../assets/images/email.png';
import password_img from '../assets/images/password.png';
import Home from './Home';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = () => {
    axios.post('http://localhost:8181/api/v1/auth/login', form) // Update the URL to match your backend endpoint
      .then((res) => {
        sessionStorage.setItem('token', res.data.token);
        // Navigate to home page after successful login
        window.location.href = '/home';
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.error(err);
      });
  };

  return (
    <div className='body_login'>
      <div className='login__container'>
        <div className='header'>
          <div className='text'>Login</div>
          <div className='underline'></div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className='inputs'>
            <div className='input'>
              <img src={email_img} alt="" />
              <input
                type="email"
                placeholder='Email'
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input'>
              <img src={password_img} alt="" />
              <input
                type="password"
                placeholder='Password'
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {error && <div className="error">{error}</div>}
          <br />
          {/*<div className='forget-password'>Lost Password? <span>Click Here!</span></div>*/}
          <div className='submit-container'>
            <div className='signup__submit'><Link to={`/signup`}><span>Sign up</span></Link></div>
            <div className='login__submit'>
            <Link to="/Home"><button type="submit">Login</button></Link>
            </div>
          </div>
        </form>
        <div className='admin_login'>
          For admins,<Link to={`/adminlogin`}><span>Click here!</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
