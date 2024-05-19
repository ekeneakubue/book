import React from 'react'
import styles from './Dashboard.module.css'
import TopNavbar from '../../components/topNavbar/TopNavbar'
import SideNavbar from '../../components/sideNavbar/SideNavbar'
import Tab from '../../components/category/novels/Tab'
import { IoBookOutline } from "react-icons/io5";

export default function Dashboard() {
  return (
    <>
      <SideNavbar/>
      <main>
        <div className={styles.topp}>
          <TopNavbar />
        </div>        
        <div className={styles.dashboard}>
          <div className={styles.dashboard_container}>
            <div className={styles.dash_hero_section}>
              <div className={styles.left}>
                <h2>Read free library Ebooks online</h2>
                <p>Discover and read any book you can possibly think of!</p>
                <button>Explore</button>
              </div>
              <div className={styles.right}><img src="images/dashboardHeroBook.png" alt="" /></div>
            </div>
            <Tab />
          </div>
          <div className={styles.bookshelf_container}>
              <div className={styles.shelf_menu}>
                <div className={styles.book_stat}>
                  <IoBookOutline />
                  Books Read
                  <h1>0</h1>
                </div> 
                <div className={styles.book_stat}>Books Saved</div>               
              </div>
          </div>
        </div>
      </main>    
    </>    
  )
}
