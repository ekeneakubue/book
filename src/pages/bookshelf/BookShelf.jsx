import React, { useState ,useEffect } from 'react';
import styles from './BookShelf.module.css'
import SideNavbar from '../../components/sideNavbar/SideNavbar'
import { FiDownload } from "react-icons/fi";
import TopNavbar from '../../components/topNavbar/TopNavbar';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
const baseURL = 'https://bookworm-backend-1.onrender.com';
const base= 'http://localhost:8000'

export default function BookShelf() {
  const [cookies] = useCookies(['token']);
  const [bookshelves, setBookshelves] = useState([]);
  const [loading, setLoading] = useState(true); // Initial loading state
  const handleGetBookshelf =async()=>{
    try {
      const token = cookies.token;
      const response = await axios.get(`${baseURL}/getBookshelfByUser`, {
        headers: {
          Authorization: `Bearer ${token}` 
        },
        withCredentials: true,
      });
      const {bookshelf} = response.data
      setBookshelves(bookshelf);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  }
  
  useEffect(() => {
    handleGetBookshelf();
  }, []);
  return (
    <>
      <SideNavbar />
      <main>
        <TopNavbar />
        <div className={styles.bookshelf}>
          <div className={styles.bookshelf_menu}>
            
            <div className={styles.menu_card}>
              <h3>Downloads</h3>
              <div className={styles.menu_detail}>
                <h3>0</h3>
                <FiDownload />
              </div>
            </div>

            <div className={styles.menu_card}>
              <h3>Saved</h3>
              <div className={styles.menu_detail}>
                <h3>0</h3>
                <FiDownload />
              </div>
            </div>

            <Link to ='/shared' className={styles.menu_card}>
              <div >
                <h3>Shared</h3>
                <div className={styles.menu_detail}>
                  <h3>0</h3>
                  <FiDownload />
                </div>
              </div>
            </Link>

            <div className={styles.menu_card}>
              <h3>Uploads</h3>
              <div className={styles.menu_detail}>
                <h3>0</h3>
                <FiDownload />
              </div>
            </div>

            <Link to = '/mynotes' className={styles.menu_card}>
              <div >
                <h3>My Notes</h3>
                <div className={styles.menu_detail}>
                  <h3>0</h3>
                  <FiDownload />
                </div>
              </div>
            </Link>

          </div>
          <div>
          {bookshelves.map((item) => (
                      <div className={styles.rack} key={item._id}>
                        <img src={item.image} alt="" />
                        <span className={styles.rack}>Name:{item.name}</span>
                        <span className={styles.rack}>Genre:{item.genre}</span>
                        <span className={styles.rack}>Auther:{item.author}</span>
                      </div>
                     
                    ))}
          </div>
        </div>
      </main>
    </>
  )
}
