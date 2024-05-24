import React from 'react'
import styles from './AboutUs.module.css'

export default function AbouotUs() {
  return (
    <>
        <h1>About Us</h1>
        <div className={styles.about_us}>
            <div className={styles.left}>
                <p>
                    At Bookworm, we are passionate about revolutionizing the way students 
                    learn and study. Founded by Sophia Abubakar, a dedicated educator with 
                    a vision for leveraging technology to enhance education, Bookworm is 
                    the culmination of years of research and development aimed at addressing 
                    the challenges students face in managing their study resources effectively.
                </p>
                <p>
                    Our team comprises experienced developers, designers, and educators who 
                    share a common goal: to empower students of all ages and disciplines to 
                    excel academically. We understand the struggles students encounter when 
                    trying to juggle multiple textbooks, notes, and study materials. That's 
                    why we've created Bookworm - your all-in-one study buddy designed to 
                    streamline your study process and maximize your learning potential.
                </p>
            </div>
            <div className={styles.right}>
                <img src="images/Rectangle755.png" alt="" />    
            </div>      
        </div>
        <div className={styles.mission}>
            <div className={styles.left}>
            <img src="images/Rectangle756.png" alt="" />
            </div>
            <div className={styles.right}>
            <h3>Our Mission</h3>
            <p>
                At Bookworm, we are passionate about revolutionizing the way students 
                learn and study. Founded by Sophia Abubakar, a dedicated educator with 
                a vision for leveraging technology to enhance education, Bookworm is 
                the culmination of years of research and development aimed at addressing 
                the challenges students face in managing their study resources effectively.
            </p>
            <p>
                Our team comprises experienced developers, designers, and educators who 
                share a common goal: to empower students of all ages and disciplines to 
                excel academically. We understand the struggles students encounter when 
                trying to juggle multiple textbooks, notes, and study materials. That's 
                why we've created Bookworm - your all-in-one study buddy designed to 
                streamline your study process and maximize your learning potential.
            </p>
            </div>
        </div>
    </> 
  )
}
