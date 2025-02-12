import React from 'react'
import './CSS/LoginSignup.css'
const loginSign = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup__container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Email Address' />
        <input type="password" placeholder='Password' />
      </div>
      <button>Continue</button>
      <p className="loginsignup-login"> Already Have and account <span>Login Here? </span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id=''/>
        <p>By continiuing, iagree to the terms of use & privacy policy</p>
      </div>
      </div>
    </div>
)}

export default loginSign
