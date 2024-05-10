import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login-page'>
        <div className="login-left">
            <Link to='/'>
                <div className="login-brand">
                    <img src="images/logo.jpg" alt="" />
                    BookWorm
                </div>
            </Link>
            <form action="">
                <div className="login-form-title">
                    Login to Your Account
                </div>
                <p>
                    welcome back! Chose your prefarred login method
                </p>
                <div className="social-btn">
                    <button className="google-btn">
                        <img src="images/g.png" alt="" />
                        Google
                    </button>
                    <button className="twitter-btn">
                        <img src="images/twit.png" alt="" />
                        Twitter
                    </button>
                </div> 
                <div className="or">
                    <hr />or<hr />    
                </div>
                <div className="user-detail-field">
                    <div className="email-box">
                        <input type="email" placeholder='Email'/>
                    </div>  
                    <div className="email-box">
                        <input type="password" placeholder='Password'/>
                    </div>       
                </div> 
                <div className="pwd-details">
                    <div className="left-detail">Remember me</div>
                    <div className="right-detail">Forgot password</div>    
                </div>  
                <div className="login-button">Login</div>  
                <div className="dont-have-account">
                    <span>Don't have an account? </span>
                    <span>
                        <Link to = '../signup'>Create one</Link>
                    </span>    
                </div>      
            </form>
        </div>
        <div className="login-right">
            <img src="images/login-pic.png" alt="" />
            <div>
                <div className="title">Let's Begin</div>
                <p>Open the pages to a world of free reads!</p>
                <div className="page-circ">
                    <span className="circ"></span>
                    <span className="circ active"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
