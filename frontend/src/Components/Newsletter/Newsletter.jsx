import React from 'react'
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive offers on your email</h1>
        <p>Subscribe to our newsLetter and stay Updated</p>
        <div>
        <input type="email" placeholder='Your email id' />
        <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter