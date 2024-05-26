import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from 'axios';
import { useDrag } from 'react-dnd';
const baseURL = 'https://bookworm-backend-1.onrender.com';
const base= 'http://localhost:8000';
const ItemType = 'ITEM';
import DraggableBook from './dragBook';
import BookModal from "../bookModal/BookModal";

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);
  const [popular, setPopular]= useState([]);
  const [book, setBook]= useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const toggleTab = (index) => {
    setToggleState(index);
    if (index === 1) {
      handlebook();
    }
    if (index === 2) {
      handlebookSearchBook("novel");
    }
    if (index === 3) {
      handlebookSearchBook("science");
    }
    if (index === 4) {
      handlebookSearchBook("wikipedia");
    }
    if (index === 5) {
      handlebookSearchBook("lifestyle");
    }
    if (index === 6) {
      handlebookSearchBook("tech");
    }
    if(index === 7) {
      handlebookSearchBook("fashion");
    }
  };
  
  const handlebook= async()=>{
    try{
    const response = await axios.get(`${baseURL}/books`)
    const {results}= response.data
    setPopular(results)
    }catch(error){
      console.log(error);
    }
  }
  const handlebookSearchBook = async(title)=>{
    try{
    const response = await axios.post(`${baseURL}/books/search`,{
      title
    })
    const {results}= response.data
    setBook(results)
    }catch(error){
      console.log(error);
    }
  }
  const handleBookClick = (selectedBook) => {
    setSelectedBook(selectedBook);
    setOpenModal(true);
  }
  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  return (
    <div className={styles.container}>
    {openModal && <BookModal closeModal={setOpenModal} book={selectedBook} />} 
      <h2>Category</h2>
      <div className={styles.tab_list}>
        <div 
          className={`${styles.tabs} ${getActiveClass(1, `${styles.active_tabs}`)}`}
          onClick={() => toggleTab(1)}
        >
          Popular
        </div>
        
        <div 
          className={`${styles.tabs} ${getActiveClass(2, `${styles.active_tabs}`)}`}
          onClick={() => toggleTab(2)}
        >
          Novels
        </div>

        <div 
          className={`${styles.tabs} ${getActiveClass(3, `${styles.active_tabs}`)}`}
          onClick={() => toggleTab(3)}
        >
          Science
        </div>

        <div 
          className={`${styles.tabs} ${getActiveClass(4, `${styles.active_tabs}`)}`}
          onClick={() => toggleTab(4)}
        >
          Wiki
        </div>

        <div 
          className={`${styles.tabs} ${getActiveClass(5, `${styles.active_tabs}`)}`}
          onClick={() => toggleTab(5)}
        >
          Lifestyle
        </div>

        <div 
          className={`${styles.tabs} ${getActiveClass(6, `${styles.active_tabs}`)}`}
          onClick={() => toggleTab(6)}
        >
          Tech
        </div>

        <div 
          className={`${styles.tabs} ${getActiveClass(7, `${styles.active_tabs}`)}`}
          onClick={() => toggleTab(7)}
        >
          Fashion
        </div>
      </div>      
      
      <div className={styles.content_container}>
        <div className={`${styles.content} ${getActiveClass(1, `${styles.active_content}`)}`}>
          <div className={styles.category_card}
          ref={drag}>            
            {
                popular.map((item) =>   
                  <div key={item.id} onClick={() => handleBookClick(item)}>
                <DraggableBook item={item} />
              </div>                     
                                        
                )
            }      
          </div>
        </div>

        <div className={`${styles.content} ${getActiveClass(2, `${styles.active_content}`)}`}>
          <div className={styles.category_card}>
            {

               book.map((item) =>   
                <>
               <DraggableBook key={item.id} item={item} />
              
              </>                            
                               
                )
              
                
            }      
          </div>
        </div>

        <div className={`${styles.content} ${getActiveClass(3, `${styles.active_content}`)}`}>
          <div className={styles.category_card}>
            {
             book.map((item) =>  
              <>
             <DraggableBook key={item.id} item={item} />
            
            </>                             
                                
              )
            }      
          </div>
        </div>

        <div className={`${styles.content} ${getActiveClass(4, `${styles.active_content}`)}`}>
          <div className={styles.category_card}>
            {
             book.map((item) =>    
              <>
             <DraggableBook key={item.id} item={item} />
            
            </>                                                  
              )
            }      
          </div>
        </div>
        
        <div className={`${styles.content} ${getActiveClass(5, `${styles.active_content}`)}`}>
          <div className={styles.category_card}>
            {
             book.map((item) =>      
              <>
             <DraggableBook key={item.id} item={item} />
            
            </>                         
                                     
              )
            }      
          </div>
        </div>

        <div className={`${styles.content} ${getActiveClass(6, `${styles.active_content}`)}`}>
          <div className={styles.category_card}>
            {
             book.map((item) =>   
              <>
             <DraggableBook key={item.id} item={item} />
            
            </>                            
                                
              )
            }      
          </div>
        </div>

        <div className={`${styles.content} ${getActiveClass(7, `${styles.active_content}`)}`}>
          <div className={styles.category_card}>
            {
             book.map((item) =>   
              <>
             <DraggableBook key={item.id} item={item} />
            
            </>                            
                               
              )
            }      
          </div>
        </div>

      </div>
    </div>
  );
};

export default Tab;
