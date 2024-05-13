import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.footer_brand}>
              <img src="images/FooterLogo.png" alt="" />
            </div>
            <div className={styles.foot_socials}>
              <img src="images/FooterFB.png" alt="" />
              <img src="images/FooterInsta.png" alt="" />
              <img src="images/FooterX.png" alt="" />
            </div>
          </div>
          <div className={styles.right}>
            <p>contact@bookwormapp.com</p>
            <p>234-709-892-1741</p>
          </div>
        </div>
        <div className={styles.down}>
            &copy; 2024 Bookworm. All rights reserved
        </div>
    </div>
  )
}
