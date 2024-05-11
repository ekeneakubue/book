import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='signup-page'>
        <div className="signup-left">
            <Link to='/'>
                <div className="signup-brand">
                    <img src="images/logo.jpg" alt="" />
                    BookWorm
                </div>
            </Link>
            <form action="">
                <div className="signup-form-title">
                    Create an account
                </div>
                <p>
                    Choose a preferred signup method
                </p>
                <div className="signup-social-btn">
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
                <div className="signup-user-detail-field">
                    <div className="signup-email-box">
                        <input 
                            type="text" 
                            placeholder='Full name'
                            name='user'
                            id='user'
                            required
                        />
                    </div> 
                    <div className="signup-email-box">
                        <input 
                            type="email" 
                            placeholder='Email'
                            name='email'
                            id='email'
                            required
                        />
                    </div>  
                    <div className="signup-email-box">
                        <input 
                            type="password" 
                            placeholder='Password'
                            name='pass'
                            id='pass'
                            required
                        />
                    </div>     
                    <div className="signup-email-box">
                        <input type="password" placeholder='Confirm password'/>
                    </div>  
                </div> 
                <div className="pwd-details">
                    <div className="left-detail">Remember me</div>
                </div>  
                <div className="signup-button" onClick={Signup}>Sign up</div>  
                <div className="dont-have-account">
                    <span>Already have an account? </span>
                    <span>
                        Login
                    </span>    
                </div>      
            </form>
        </div>
        <div className="login-right">
            <img src="images/signup-pic.png" alt="" />
            <div>
                <div className="title">Let's Get You Started</div>
                <p>Open the pages to a world of free reads!</p>
                <div className="page-circ">
                    <span className="circ active"></span>
                    <span className="circ"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
