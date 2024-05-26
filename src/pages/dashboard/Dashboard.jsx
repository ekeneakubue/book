// Inside your Dashboard component
import React, { useState ,useEffect } from 'react';
import styles from './Dashboard.module.css';
import TopNavbar from '../../components/topNavbar/TopNavbar';
import SideNavbar from '../../components/sideNavbar/SideNavbar';
import Tab from '../../components/category/Tab';
import { IoBookOutline } from "react-icons/io5";
import { PiBookBookmarkDuotone } from "react-icons/pi";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrop } from 'react-dnd';
import axios from 'axios';
const baseURL = 'https://bookworm-backend-1.onrender.com';
const base= 'http://localhost:8000'
const ItemType = 'ITEM';
import { useCookies } from 'react-cookie';

const DroppableArea = ({ children, bookshelfId, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item) => {
     
      onDrop(item, bookshelfId); // Pass the dropped item and bookshelf ID to the parent component
      return { name: 'DroppableArea' };
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={styles.droppableArea}>
      {children}
    </div>
  );
};

export default function Dashboard() {
  const [droppedItems, setDroppedItems] = useState({});
  const [customBookshelfName, setCustomBookshelfName] = useState('');
  const [cookies] = useCookies(['token']);
  const [bookshelves, setBookshelves] = useState([]);
  const [loading, setLoading] = useState(true); // Initial loading state

  // Function to handle the dropped item
  const handleDrop = (item, bookshelfId) => {
    setDroppedItems((prevDroppedItems) => ({
      ...prevDroppedItems,
      [bookshelfId]: item,
    }));
  };

  const handleSaveBook = async (book) => {
    try {
      const token = cookies.token;
      let authors = ''; 
      if (book.authors && book.authors.length > 0) {
        authors = book.authors[0].name;
      }
      const response = await axios.post(`${baseURL}/saveBookshelf`, {
        name: book.title,
        author: authors, 
        genre: book.genre[0] || 'Comedy', 
        image: book.image, 
      },{
        headers: {
          Authorization: `Bearer ${token}` 
        },
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

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
    <DndProvider backend={HTML5Backend}>
      <SideNavbar />
      <main>
        <div className={styles.topp}>
          <TopNavbar />
        </div>
        <div className={styles.dashboard}>
          <div className={styles.dashboard_container}>
            <div className={styles.dash_hero_section}>
              <div className={styles.left}>
                <h2>Read free library Ebooks online</h2>
                <p>Discover and read any book you can possibly think of!</p>
                <button>Explore</button>
              </div>
              <div className={styles.right}><img src="images/dashboardHeroBook.png" alt="" /></div>
            </div>
            <Tab />
          </div>
          <div className={styles.bookshelf_container}>
            <div className={styles.shelf_menu}>
              <div className={styles.book_stat}>
                <PiBookBookmarkDuotone />
                Books Read
                <h1>0</h1>
              </div>
              <div className={styles.book_stat}>
                <IoBookOutline />
                Books Saved
               {
                loading ?(
                  <p>Loading...</p>
                ):bookshelves.length ===0?(
                  <h1>0</h1>
                ):(
                  <h1>{bookshelves.length}</h1>
                )
               }
              </div>
            </div>
            <h3>My Bookshelf</h3>
            <div className={styles.table}>
              <div className={styles.first_row}></div> 
              <div className={styles.second_row}>
                {loading ? (
                  <p>Loading...</p>
                ) : bookshelves.length === 0 ? (
                  <p>No bookshelves found</p>
                ) : (
                  <DroppableArea bookshelfId={customBookshelfName} onDrop={handleSaveBook}>
                    {bookshelves.map((item) => (
                      <div className={styles.rack} key={item._id}>
                        <img src={item.image} alt="" />
                        {/* <span>{item.image}</span> */}
                      </div>
                    ))}
                  </DroppableArea>
                )}
              </div> 
            </div>     
          </div>
        </div>
      </main>
    </DndProvider>
  );
}
