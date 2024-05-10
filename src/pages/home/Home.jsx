import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
        <header>
            <div className="homeNavbar-l">                
                <div className="home-brand"><img src="images/logo.jpg" alt="" /> BookWorm</div>
            </div>
            <div className="homeNavbar-r">
                <div className="navs">
                    <div className="nav-link">Features</div>
                    <div className="nav-link">About Us</div>
                    <div className="nav-link">Contact</div>               
                </div>
                <div className='buttons'>
                    <Link to = 'signup'>
                        <button className="signup-btn">Sign Up</button>
                    </Link>
                    <Link to = 'login'>
                        <button className="login-btn">Log In</button>
                    </Link>
                </div>
            </div>
        </header>
        <div className="hero-section">
            <div className="hero-left">
                <div className="title">
                    Ignite your learning journey with BookWorm
                </div>
                <p>
                    Immerse yourself in a world of literature like never before with
                    our cutting-edge online eBook reader. Discover thousands of titles 
                    spanning genres, from timeless classics to the latest bestselers, 
                    all at your finger tips.
                </p>
                <Link to = 'signup'>
                    <button className="getStarted-btn">Get Started</button>
                </Link>
            </div>
            <div className="hero-right">
                <img src="images/home-hero-img.png" alt="" />
            </div>
        </div>
    </div>
  )
}
