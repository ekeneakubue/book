import React from 'react'
import styles from './PasswordReset.module.css'
import { Link } from 'react-router-dom'

export default function PasswordReset() {
  return (
    <div className={styles.reset_password}>
      <div className={styles.pass_left}>
        <div className={styles.logo}>
          <Link to = '/'>
            <img src="images/full_logo.png" alt="" />
          </Link>
        </div>
        <div className={styles.title}>Forgot password?</div>
        <p>No worries, we’ll send you reset information</p>

        <form action="">
          <div className={styles.form_field}>
            <input type="email" placeholder='Enter your email' className={styles.pass_input} />
          </div>
          <Link to = '/newpassword'>
            <button>Reset Password</button>
          </Link>
        </form>

        <div className={styles.pass_footer}>
          <p>Open the pages to a world of free reads!</p>
          <div className={styles.corgs}>
            <Link to = '/forgotpassword'><div className={styles.circle}></div></Link>
            <div className={`${styles.circle} ${styles.active}`}></div>
            <Link to = '/newpassword'><div className={styles.circle}></div></Link>
            <Link to = '/passworddone'><div className={styles.circle}></div></Link>
          </div>
        </div>
      </div>

      <div className={styles.pass_right}>
        <img src="images/ff.png" alt="" />
      </div>
    </div>
  )
}
