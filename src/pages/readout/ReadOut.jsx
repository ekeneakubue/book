import React from 'react'
import styles from './ReadOut.module.css'
import { IoCloseOutline } from "react-icons/io5";

export default function ReadOut(){

    return(
        <div className={styles.readout}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src='images/logo.jpg' alt='logo' />
                    <p>BookWorm</p>
                </div>

                <div className={styles.title}>
                    <h1>King Solomon's Mines By Anthony W. Knapp</h1>
                </div>

                <div className={styles.close}>
                    <IoCloseOutline className={styles.close_icon}/>
                </div>
            </div>
            <hr className={styles.divider}/>

            <div className={styles.sidenav}>
                <ul>
                    <li className={styles.sidenav_link}>Chapter 1 <span className={styles.pages}>Page 1-50</span> <p>The Great Mine</p></li>
                    <li className={styles.sidenav_link}>Chapter 2<span className={styles.pages}>Page 51-120</span><p>The Great Mine</p></li>
                    <li className={styles.sidenav_link}>Chapter 3<span className={styles.pages}>Page 121-163</span><p>Rise of the Miners</p></li>
                    <li className={styles.sidenav_link}>Chapter 4</li>
                    <li className={styles.sidenav_link}>Chapter 5</li>
                    <li className={styles.sidenav_link}>Chapter 6</li>
                    <li className={styles.sidenav_link}>Chapter 7</li>
                    <li className={styles.sidenav_link}>Chapter 8</li>
                    <li className={styles.sidenav_link}>Chapter 9</li>        
                </ul>
            </div>        
        </div>
    );
}