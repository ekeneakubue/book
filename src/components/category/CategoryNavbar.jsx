import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from './Category.module.css'

export default function CategoryNavbar() {
  return (
    <div>
        <h2 className={styles.header}>
          <div className={styles.cat_title_bar}>
            <h4>Category</h4>
            <div className={styles.arrows}>
              <IoIosArrowBack className={styles.icon}/>
              <IoIosArrowForward className={styles.icon}/>
            </div>
          </div>
          <div className={styles.cat_navbar}>
            <div className={styles.nav_item}>Popular</div>
            <div className={styles.nav_item}>Novels</div>
            <div className={styles.nav_item}>Science</div>
            <div className={styles.nav_item}>Wiki</div>
            <div className={styles.nav_item}>Lifestyle</div>
            <div className={styles.nav_item}>Tech</div>
            <div className={styles.nav_item}>Fashion</div>
          </div>
        </h2>
    </div>
  )
}
