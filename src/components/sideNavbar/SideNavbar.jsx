import React from 'react';
import './SideNavbar.css';
import { RxDashboard } from "react-icons/rx";
import { FiCompass } from "react-icons/fi";
import { LuBookMinus } from "react-icons/lu";
import { BsBookmarksFill } from "react-icons/bs";
import { RiSettingsLine } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";

import { Link } from 'react-router-dom';

export default function SideNavbar() {
  return (
    <div className='sideNavbar'>
        <div className="top-nav">
            <Link to = '/'>
                <div className="brand">
                    <img src="images/logo.jpg" alt="" />
                    <div>BookWorm</div>
                </div>
            </Link>
            <div className="sideNavs">
                <ul>
                    <Link to = '/'>
                        <li className="side-nav-link"><RxDashboard className='icon'/> Dashboard</li>
                    </Link>
                    <Link to = 'explore'>
                        <li className="side-nav-link"><FiCompass className='icon'/> Explore</li>
                    </Link>
                    <Link to = 'bookshelf'>
                        <li className="side-nav-link"><LuBookMinus className='icon'/> My Bookshelf</li>
                    </Link>
                    <Link to = 'about'>
                        <li className="side-nav-link"><BsBookmarksFill className='icon'/> About</li>
                    </Link>
                    <Link to = 'settings'>
                        <li className="side-nav-link"><RiSettingsLine className='icon'/> Settings</li>
                    </Link>
                </ul>
            </div>            
        </div>        
        <div className="down-navbar">
            <TbLogout2 className='icon'/> Log out
        </div>        
    </div>
  )
}
 