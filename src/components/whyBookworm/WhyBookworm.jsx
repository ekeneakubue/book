import React from 'react'
import styles from './WhyBookworm.module.css'
import { Link } from 'react-router-dom'

export default function WhyBookworm() {
  return (
    <div className={styles.whybookworm}>
        <div className={styles.left}>
            <div className={styles.title}>Why Choose Bookworm:</div>
            <ul>
                <li>
                    Comprehensive Study Solutions: Whether you're looking for 
                    free ebooks, tools for organizing study materials, or 
                    AI-powered assistance with summarization and quiz creation, 
                    Bookworm has you covered.   
                </li>
                <li>
                    Personalized Learning Experience: We understand that every 
                    student learns differently. That's why Bookworm offers 
                    customizable features that adapt to your unique learning 
                    style and preferences.
                </li>
                <li>
                    Trusted by Students and Educators: Bookworm has earned rave 
                    reviews from students, educators, and educational institutions 
                    alike. Join the thousands of users who have already transformed 
                    their study routine with Bookworm.
                </li>
            </ul>
        </div>
        <div className={styles.right}>
            <div className={styles.title}>Why Choose Bookworm:</div>
            <p>
                Ready to take your study routine to the next level? Join 
                the Bookworm community today and embark on a journey of 
                academic excellence. Whether you're a high school student 
                preparing for exams or a college student tackling complex 
                course materials or just a book lover, Bookworm is here to 
                support you every step of the way.
            </p>
            <p>
                Together, let's unlock the power of knowledge and unleash your 
                full potential with Bookworm.
            </p>
            <Link to = 'signup'><button>Sign Up</button></Link>
        </div>
    </div>
  )
}
