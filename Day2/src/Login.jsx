import React from 'react'
import '../assets/css/login.css'
import email_img from '../assets/images/email.png'
import user_img from '../assets/images/person.png'
import password_img from '../assets/images/password.png'
import { Link } from 'react-router-dom'
import Mail from '../components/mail'


const Login = () => {
    return (
      <div className='body_login'>
          <div className='container'>
            <div className='header'>
              <div className='text'>Login</div>
              <div className='underline'></div>
          </div>
          <div className='inputs'> 

          {/* <div className='input'>
            <img src={user_img} alt="" />
            <input type="text" placeholder='Name' required/>
          </div> */}
          <div className='input'>
            <img src={email_img} alt="" />
            {/* <input type="email" placeholder='Email'required/> */}
            <Mail/>
          </div>
          <div className='input'>
            <img src={password_img} alt="" />
            <input type="password" placeholder='Password' required/>
          </div>
          </div>
<br/>
          <div className='forget-password'>Lost Password? <span>Click Here!</span></div>
          <div className='submit-container'>
            <div className='submit'><Link to={`/signup`}>Sign up</Link></div>
            <div className='submit'><Link to={`/home`}>Login</Link></div>
          </div>
          <div className='admin_login'>
            For admins,<Link to={`/adminlogin`}> <span>Click here!</span>  </Link>
          </div>
        </div>
        </div>
    );
  };
  
  export default Login;
  
  
  
  
  
  {/* <div>
  UserName: <Textfields id='username' type='text' name='username'/><br/>
  </div>
  <p>
   Password: 
  </p>
  <div>
  <InputGroup inside style={styles}>
  <Input type={visible ? 'text' : 'password'} />
  <InputGroup.Button onClick={handleChange}>
  {visible ? <EyeIcon /> : <EyeSlashIcon />}
  </InputGroup.Button>
  </InputGroup>
  </div>
  <br></br>
  <div>
  <Buttons name="Login"/><br/>
  </div>
  <br></br>
  <div>
  <Buttons name="Signup"/><br/>
  </div> */}