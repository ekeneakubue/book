import React from 'react';
import './SideNavbar.css';
import { RxDashboard } from "react-icons/rx";
import { FiCompass } from "react-icons/fi";
import { LuBookMinus } from "react-icons/lu";
import { BsBookmarksFill } from "react-icons/bs";
import { RiSettingsLine } from "react-icons/ri";

export default function SideNavbar() {
  return (
    <div className='sideNavbar'>
        <div className="top-nav">
            <div className="brand">
                <img src="images/logo.jpg" alt="" />
                <div>BookWorm</div>
            </div>
            <div className="sideNavs">
                <ul>
                    <li className="side-nav-link"><RxDashboard className='icon'/> Dashboard</li>
                    <li className="side-nav-link"><FiCompass className='icon'/> Explore</li>
                    <li className="side-nav-link"><LuBookMinus className='icon'/> My Bookshelf</li>
                    <li className="side-nav-link"><BsBookmarksFill className='icon'/> About</li>
                    <li className="side-nav-link"><RiSettingsLine className='icon'/> Settings</li>
                </ul>
            </div>            
        </div>
        <div className="logout-btn">
            Log out
        </div>
    </div>
  )
}
 