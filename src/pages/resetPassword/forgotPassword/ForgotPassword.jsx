import React, { useState } from 'react'
import styles from './ForgotPassword.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function ForgotPassword() {
const [email, setEmail]=useState('')

const handleSubmit =  async(e) => {
  e.preventDefault()
  console.log(email)
  const response= await axios.post
}

const handleOnChange= (e) => {
  setEmail(e.target.value)
}

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

        <form action=""  onSubmit={handleSubmit}>
          <div className={styles.form_field}>
            <input type="email" placeholder='Enter your email' className={styles.pass_input}  onChange={handleOnChange} value={email}/>
          </div>
          {/* <Link to = '/passwordreset'> */}
            <button>Reset Password</button>
          {/* </Link> */}
        </form>

        <div className={styles.pass_footer}>
          <p>Open the pages to a world of free reads!</p>
          <div className={styles.corgs}>
            <div className={`${styles.circle} ${styles.active}`}></div>
            <Link to = '/passwordreset'><div className={styles.circle}></div></Link>
            <Link to = '/newpassword'><div className={styles.circle}></div></Link>
            <Link to = '/passworddone'><div className={styles.circle}></div></Link>
          </div>
        </div>
      </div>

      <div className={styles.pass_right}>
        <img src="images/yy.png" alt="" />
      </div>
    </div>
  )
}
