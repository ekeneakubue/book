import React from 'react'
import styles from './Login.module.css';
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className={styles.login_page}>
        <div className={styles.login_left}>
            <Link to='/'>
                <div className={styles.login_brand}>
                    <img src="images/logo.jpg" alt="" />
                    BookWorm
                </div>
            </Link>
            <form action="POST">
                <div className={styles.login_form_title}>
                    Login to Your Account
                </div>
                <p>
                    welcome back! Chose your prefarred login method
                </p>
                <div className={styles.social_btn}>
                    <button className={styles.google_btn}>
                        <img src="images/g.png" alt="" />
                        Google
                    </button>
                    <button className={styles.twitter_btn}>
                        <img src="images/twit.png" alt="" />
                        Twitter
                    </button>
                </div> 
                <div className={styles.or}>
                    <hr />or<hr />    
                </div>
                <div className={styles.user_detail_field}>
                    <div className={styles.email_box}>                        
                        <input type="email" placeholder='Email'/>
                    </div>  
                    <div className={styles.email_box}>
                        <input type="password" placeholder='Password'/>
                    </div>       
                </div> 
                <div className={styles.pwd_details}>
                    <div className={styles.left_detail}>Remember me</div>
                    <div className={styles.right_detail}>Forgot password</div>    
                </div>  
                <div className={styles.login_button}>Login</div>  
                <div className={styles.dont_have_account}>
                    <span>Don't have an account? </span>
                    <span>
                        <Link to = '../signup'>Create one</Link>
                    </span>    
                </div>      
            </form>
        </div>
        <div className={styles.login_right}>
            <img src="images/login-pic.png" alt="" />
            <div>
                <div className={styles.title}>Let's Begin</div>
                <p>Open the pages to a world of free reads!</p>
                <div className={styles.page_circ}>
                    <span className={styles.circ}></span>
                    <span className={`${styles.circ} ${styles.active}`}></span>
                </div>
            </div>
        </div>
    </div>
  )
}
