

import React, {useState} from 'react'
import styles from './Saved.module.css'
import SideNavbar from '../../components/sideNavbar/SideNavbar'
import TopNavbar from '../../components/topNavbar/TopNavbar'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { TiArrowSortedDown } from "react-icons/ti";

export default function MyNotes() {

  const [select, setSelect] = useState("All");

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <SideNavbar />
      
      <main>
      <TopNavbar />
        <button className={styles.back}><IoArrowBackCircleOutline className={styles.back_btn} /> Back</button>
        <div className={styles.flex}>
          <div className={styles.left}>
        <h1>Saved</h1>
        </div>

        <div className={styles.right}>
        <label htmlFor="sort">Sort by:   </label>
        <div className={styles.select_container}>
          <select id="sort" name="sort" className={styles.select} onChange={handleSelect}>
     
             <option value="Recent">Recent</option>
             <option value="All">All</option>
             <option value="Ascending">Ascending</option>
             <option value="Descending">Descending</option>
            
          </select>
          <TiArrowSortedDown className={styles.dropdown}  />
          
          </div>
          
        </div>
        </div>

        <div className={styles.flex2}>
          <div className={styles.left2}>
            <p className={styles.category}>{select}</p>
          </div>

         
     
        </div>

        <div className={styles.note}>
        
          <p className={styles.default_note}>You have no book saved</p> 
          <p className={styles.default_note2}> Your saved books will appear here.</p>

        </div>
      

      

        
       
      </main>
    </>
  )
}

