import React from 'react'
import './LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup' id="login">
      <div className="loginsignup_container">
        <h1>Sign Up </h1>
        <div className="loginsignup_fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="Password" placeholder='Password' />
        </div>
        <button style={{textAlign:'center'}}>Continue</button>
        <p className='loginsignup_login'>Already have an account? <span>Login here</span></p>
        <div className='loginsignup_agree'>
          <input type="checkbox" />
          <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignUp
