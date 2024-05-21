import React from 'react'
import styles from './BookShelf.module.css'
import SideNavbar from '../../components/sideNavbar/SideNavbar'
import { FiDownload } from "react-icons/fi";
import TopNavbar from '../../components/topNavbar/TopNavbar';

export default function BookShelf() {
  return (
    <>
      <SideNavbar />
      <main>
        <TopNavbar />
        <div className={styles.bookshelf}>
          <div className={styles.bookshelf_menu}>
            
            <div className={styles.menu_card}>
              <h3>Downloads</h3>
              <div className={styles.menu_detail}>
                <h3>0</h3>
                <FiDownload />
              </div>
            </div>

            <div className={styles.menu_card}>
              <h3>Saved</h3>
              <div className={styles.menu_detail}>
                <h3>0</h3>
                <FiDownload />
              </div>
            </div>

            <div className={styles.menu_card}>
              <h3>Shared</h3>
              <div className={styles.menu_detail}>
                <h3>0</h3>
                <FiDownload />
              </div>
            </div>

            <div className={styles.menu_card}>
              <h3>Uploads</h3>
              <div className={styles.menu_detail}>
                <h3>0</h3>
                <FiDownload />
              </div>
            </div>

            <div className={styles.menu_card}>
              <h3>My Notes</h3>
              <div className={styles.menu_detail}>
                <h3>0</h3>
                <FiDownload />
              </div>
            </div>

          </div>
          
        </div>
      </main>
    </>
  )
}
