import React from 'react'
import styles from './FeedBack.module.css'
import MyCarousel from '../myCarousel/MyCarousel'

export default function FeedBack() {
  return (
    <div>
        <div className={styles.feedback}>
            <div className={styles.title}>Don’t take our word for it</div>
            <p>Here’s what our users are saying about Bookworm</p>
            <div className={styles.feedback_caroucel}>
                <MyCarousel />
            </div>
        </div>
    </div>
  )
}
