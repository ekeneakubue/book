

import React, {useState} from 'react'
import styles from './Download.module.css'
import SideNavbar from '../../components/sideNavbar/SideNavbar'
import TopNavbar from '../../components/topNavbar/TopNavbar'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Download() {

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
        <h1>Downloads</h1>
        </div>

        <div className={styles.right}>
        <label htmlFor="sort">Sort by:   </label>
        <div className={styles.select_container}>
          <select id="sort" name="sort" className={styles.select} onChange={handleSelect}>
             <option value="All">All</option>
             <option value="Recent">Recent</option>
             <option value="Ascending">Ascending</option>
             <option value="Descending">Descending</option>
            
          </select>
          <TiArrowSortedDown className={styles.dropdown}  />
          
          </div>
          
        </div>
        </div>

        <div className={styles.downloads}>
            <div className={styles.book_one}>
                <div className={styles.book_img}>
                <img src='images/cate3.png' className={styles.bookone_img} alt="control your mind"  />
                </div>
                <div className={styles.book_info}>
                <p className={styles.book_title}>Control Your Mind and Master Your Feelings</p>
                <p className={styles.book_author}>Eric Robertson</p>
                <p className={styles.success}>Download Successful</p>
                </div>
            </div>

            <div className={styles.book_two}>
                <div className={styles.book_img}>
                <img src='images/Rectangle 23 (1).png' />
                </div>
                <div className={styles.book_info}>
                <p className={styles.book_title}>Harry Potter and the Sorcerer's Stone</p>
                <p className={styles.book_author}>J.K. Rowlings</p>
                <p className={styles.success}>Download Successful</p>
                </div>
            </div>

        </div>


       
      

      

        
       
      </main>
    </>
  )
}

