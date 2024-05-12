import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
        <header>
            <div className={styles.homeNavbar_l}>                
                <div className={styles.home_brand}><img src="images/logo.jpg" alt="" /> BookWorm</div>
            </div>
            <div className={styles.homeNavbar_r}>
                <div className={styles.navs}>
                    <div className={styles.nav_link}>Features</div>
                    <div className={styles.nav_link}>About Us</div>
                    <div className={styles.nav_link}>Contact</div>               
                </div>
                <div className={styles.buttons}>
                    <Link to = 'signup'>
                        <button className={styles.signup_btn}>Sign Up</button>
                    </Link>
                    <Link to = 'login'>
                        <button className={styles.login_btn}>Log In</button>
                    </Link>
                </div>
            </div>
        </header>
        <div className={styles.hero_section}>
            <div className={styles.hero_left}>
                <div className={styles.title}>
                    Ignite your learning journey with BookWorm
                </div>
                <p>
                    Immerse yourself in a world of literature like never before with
                    our cutting-edge online eBook reader. Discover thousands of titles 
                    spanning genres, from timeless classics to the latest bestselers, 
                    all at your finger tips.
                </p>
                <Link to = 'signup'>
                    <button className={styles.getStarted_btn}>Get Started</button>
                </Link>
            </div>
            <div className={styles.hero_right}>
                <img src="images/home-hero-img.png" alt="" />
            </div>
        </div>
    </div>
  )
}
