import React from 'react'
import styles from './Dashboard.module.css'
import TopNavbar from '../../components/topNavbar/TopNavbar'
import SideNavbar from '../../components/sideNavbar/SideNavbar'
import Lifestyle from '../../components/category/lifestyle/Lifestyle'

export default function Dashboard() {
  return (
    <>
      <SideNavbar/>
      <main>
        <TopNavbar/>
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
            <Lifestyle />
          </div>
          <div className={styles.bookshelf_container}>

          </div>
        </div>
      </main>    
    </>    
  )
}
