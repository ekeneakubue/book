import React from 'react'
import styles from './Dashboard.module.css'
import TopNavbar from '../../components/topNavbar/TopNavbar'
import SideNavbar from '../../components/sideNavbar/SideNavbar'

export default function Dashboard() {
  return (
    <>
      <SideNavbar/>
      <main>
        <TopNavbar/>
        
      </main>    
    </>    
  )
}
