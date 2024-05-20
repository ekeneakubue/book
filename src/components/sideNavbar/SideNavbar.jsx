import React from 'react';
import styles from './SideNavbar.module.css';
import { RxDashboard } from "react-icons/rx";
import { FiCompass } from "react-icons/fi";
import { LuBookMinus } from "react-icons/lu";
import { BsBookmarksFill } from "react-icons/bs";
import { RiSettingsLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";

import { Link } from 'react-router-dom';

export default function SideNavbar() {
  return (
    <div className={styles.sideNavbar}>
        <div className={styles.top_nav}>
            <Link to = '/'>
                <div className={styles.brand}>
                    <img src="images/logo.jpg" alt="" />
                    <div>BookWorm</div>
                </div>
            </Link>
            <div className={styles.sideNavs}>
                <ul>
                    <Link to = '/dashboard'>
                        <li className={styles.side_nav_link}><RxDashboard className={styles.icon}/> Dashboard</li>
                    </Link>
                    <Link to = '/explore'>
                        <li className={styles.side_nav_link}><FiCompass className={styles.icon}/> Explore</li>
                    </Link>
                    <Link to = '/bookshelf'>
                        <li className={styles.side_nav_link}><LuBookMinus className={styles.icon}/> My Bookshelf</li>
                    </Link>                    
                    <Link to = '/settings'>
                        <li className={styles.side_nav_link}><RiSettingsLine className={styles.icon}/> Settings</li>
                    </Link>
                </ul>
            </div>            
        </div>        
        <div className={styles.down_navbar}>
            <TbLogout2 className={styles.icon}/> Log out
        </div>        
    </div>
  )
}
 