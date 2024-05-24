import React from 'react'
import styles from './BookShelf.module.css'
import SideNavbar from '../../components/sideNavbar/SideNavbar'
import { FiDownload } from "react-icons/fi";
import TopNavbar from '../../components/topNavbar/TopNavbar';
import { Link } from 'react-router-dom';

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

            <Link to ='/shared' className={styles.menu_card}>
              <div >
                <h3>Shared</h3>
                <div className={styles.menu_detail}>
                  <h3>0</h3>
                  <FiDownload />
                </div>
              </div>
            </Link>

            <div className={styles.menu_card}>
              <h3>Uploads</h3>
              <div className={styles.menu_detail}>
                <h3>0</h3>
                <FiDownload />
              </div>
            </div>

            <Link to = '/mynotes' className={styles.menu_card}>
              <div >
                <h3>My Notes</h3>
                <div className={styles.menu_detail}>
                  <h3>0</h3>
                  <FiDownload />
                </div>
              </div>
            </Link>

          </div>
          
        </div>
      </main>
    </>
  )
}
