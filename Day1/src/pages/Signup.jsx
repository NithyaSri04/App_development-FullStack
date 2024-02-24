import React from 'react'
import '../assets/css/signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <div className='container'>
            <div className='header'>
              <div className='text'>Sign Up</div>
              <div className='underline'></div>
          </div>
          <div className='inputs1'> 

          <div className='input1'>
            <input type="text" placeholder='Name'/>
          </div>

          <div className='input1'>
            <input type="email" placeholder='Email'/>
          </div>

          <div className='input1'>
            <input type="text" placeholder='Address'/>
          </div>

          <div className='input1'>
            <input type="text" placeholder='School/College'/>
          </div>

          <div className='input1'> 
            <input type="password" placeholder='Password'/>
          </div>

          <div className='input1'> 
            <input type="password" placeholder='Confirm Password'/>
          </div>

          </div>

          <div className='submit-container'>
            <div className='submit'><Link to={`/login`}>Submit</Link></div>
          </div>
        </div>
        </div>
    );
}

export default Signup;




















{/* First Name: <Textfields type='text' name='firstname'/><br/>
Last Name: <Textfields type='text' name='lastname'/><br/>
Email ID: <Textfields type='text' name='mail'/><br/>
Username: <Textfields type='text' name='newusername'/><br/>
Password: <Textfields type='text' name='newpassword'/><br/>
<Buttons name='Submit'/><br/> */}
