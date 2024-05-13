import React from 'react'
import styles from './TopNavbar.module.css'
import { CiSearch } from "react-icons/ci";
import { MdMic, MdOutlineNotifications } from "react-icons/md";
import { PiBookOpenText } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";

export default function TopNavbar() {
  return (
    <div className={styles.top_navbar}>
      <div className={styles.left_bar}>
        <button>Basic </button>
        <form>
          <div className={styles.search_box}>
            <CiSearch className={styles.icon}/>
            <input type="text" placeholder='Search in basic form'/>
            <MdMic className={styles.icon}/>
          </div>
        </form> 
      </div>
      <div className={styles.right_bar}>
        <PiBookOpenText />
        <MdOutlineNotifications />
        <RxAvatar />
      </div>
    </div>
  )
}

