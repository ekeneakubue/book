

import React, {useState} from 'react'
import styles from './Upload.module.css'
import SideNavbar from '../../components/sideNavbar/SideNavbar'
import TopNavbar from '../../components/topNavbar/TopNavbar'
import { IoArrowBackCircleOutline } from "react-icons/io5";


export default function Upload() {


  return (
    <>
      <SideNavbar />
      
      <main>
      <TopNavbar />
        <button className={styles.back}><IoArrowBackCircleOutline className={styles.back_btn} /> Back</button>


        <div className={styles.note}>
            <div className={styles.upload}>
          <p className={styles.default_note}>You have no uploads yet</p> 
          <button className={styles.import_btn}> Import from file</button>
            </div>

        </div>
      

      

        
       
      </main>
    </>
  )
}

