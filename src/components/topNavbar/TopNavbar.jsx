import React from 'react'
import './TopNavbar.css'
import { CiSearch } from "react-icons/ci";
import { MdMic, MdOutlineNotifications } from "react-icons/md";
import { PiBookOpenText } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";

export default function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="left-bar">
        <button>Basic </button>
        <form>
          <div className="search-box">
            <CiSearch className='icon'/>
            <input type="text" placeholder='Search in basic form'/>
            <MdMic className='icon'/>
          </div>
        </form> 
      </div>
      <div className="right-bar">
        <PiBookOpenText />
        <MdOutlineNotifications />
        <RxAvatar />
      </div>
    </div>
  )
}

