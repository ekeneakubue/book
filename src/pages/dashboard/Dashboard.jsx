import React from 'react'
import styles from './Dashboard.module.css'
import TopNavbar from '../../components/topNavbar/TopNavbar'
import SideNavbar from '../../components/sideNavbar/SideNavbar'
import Tab from '../../components/category/Tab'
import { IoBookOutline } from "react-icons/io5";
import { PiBookBookmarkDuotone } from "react-icons/pi";
import BookModal from '../../components/bookModal/BookModal'

export default function Dashboard() {
  return (
    <>
      <SideNavbar/>
      <main>
        <div className={styles.topp}>
          <TopNavbar />
        </div>        
        <div className={styles.dashboard}> 
          <BookModal/>  
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
                <PiBookBookmarkDuotone />                  
                Books Read
                <h1>0</h1>
              </div> 
              <div className={styles.book_stat}>
                <IoBookOutline />
                Books Saved
                <h1>0</h1>
              </div>               
            </div> 
            <h3>My Bookshelf</h3> 
            <div className={styles.table}>
              <div className={styles.first_row}></div> 
              <div className={styles.second_row}>
                <div className={styles.rack}><span>UNN Journal</span></div> 
                <div className={styles.rack}><span>Love Doctor Journal</span></div> 
                <div className={styles.rack}><span>Love Doctor Journal</span></div>
                <div className={styles.rack}><span>Love Doctor Journal</span></div>       
              </div>  
              <div className={styles.third_row}></div> 
              <div className={styles.first_row}></div> 
              <div className={styles.second_row}>
                <div className={styles.rack}><span>UNN Journal</span></div> 
                <div className={styles.rack}><span>Love Doctor Journal</span></div> 
                <div className={styles.rack}><span>Love Doctor Journal</span></div>
                <div className={styles.rack}><span>Love Doctor Journal</span></div>          
              </div>  
              <div className={styles.third_row}>

              </div>     
            </div>            
          </div>
        </div>
      </main>    
    </>    
  )
}
