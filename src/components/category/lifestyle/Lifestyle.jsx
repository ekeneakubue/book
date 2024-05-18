import React from 'react'
import styles from './Lifestyle.module.css'
import { lifestyle } from '../CategoryData'
import CategoryNavbar from '../CategoryNavbar'

export default function Lifestyle() {
  return (
    <div>
        <div className={styles.category}>
            <CategoryNavbar/>
            <div className={styles.category_card}>
                {
                    lifestyle.map((item) =>                            
                    <div className={styles.cat_body}>
                        <img src={item.image} alt="" />
                        <h3>{item.title}</h3>
                        <p>{item.author}</p>
                    </div>                               
                    )
                }      
            </div>
        </div> 
    </div>
  )
}

