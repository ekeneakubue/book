import React from 'react'
import { Link } from 'react-router-dom'
import { AccessFreeBooks } from './Data';
import styles from './Home.module.css'
import Footer from '../../components/footer/Footer';
import WhyBookworm from '../../components/whyBookworm/WhyBookworm';
import AbouotUs from '../../components/aboutus/AbouotUs';

export default function Home() {
  return (
    <div className={styles.home}>
        <header>
            <div className={styles.homeNavbar_l}>                
                <div className={styles.home_brand}><img src="images/full_logo.png" alt="" /></div>
            </div>
            <div className={styles.homeNavbar_r}>
                <div className={styles.navs}>
                    <div className={styles.nav_link}><a href="#features">Features</a></div>
                    <div className={styles.nav_link}><a href="#about">About Us</a></div>
                    <div className={styles.nav_link}><a href="#contacts">Contact</a></div>               
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

        <section id='features'>
            <div className={styles.access_freeBooks} >
                <p>Access free Ebooks, Organize Study Materials, and Master your Subjects with AI-Powered Tools</p>
                <div className={styles.free_access}>
                    {
                        AccessFreeBooks.map((item) =>                            
                            <div className={styles.free_features}>
                                <img src={item.image} alt="" />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>                               
                        )
                    }                         
                </div>
            </div>
        </section>

        <div className={styles.study_potentials} id=''>
            <div className={styles.left}><img src="images/potential.png" alt="" /></div>
            <div className={styles.study_potentials_text}>
                <h1>Unlock your <br/>full study potential</h1>
                <ul>
                    <li>Browse the Ebook Library</li>
                    <li>Organize Your Bookshelf</li>
                    <li>Take Notes and Annotate</li>
                    <li>Access AI-Powered Tools</li>
                    <li>Ace Your Exams with Custom Quizzes</li>
                </ul>
                <button>Get Started</button>
            </div>
        </div>

        <div className={styles.aboutus} id='about'>
            <AbouotUs />
        </div>  
        <WhyBookworm />

        {/* 
        <div id="contacts">
            <Footer />           
        </div>  */}

        
    </div>
  )
}
