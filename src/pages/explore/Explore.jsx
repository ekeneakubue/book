
import React, { useState } from 'react'
import styles from './Explore.module.css'
import { FiDownload } from "react-icons/fi";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import SideNavbar from '../../components/sideNavbar/SideNavbar'
import TopNavbar from '../../components/topNavbar/TopNavbar'
import axios from 'axios'
const baseURL = 'https://bookworm-backend-1.onrender.com';
const base= 'http://localhost:8000'


const Explore = () => {
  const [toggleState, setToggleState] = useState(1);
  const [popular, setPopular]= useState([]);
  const [book, setBook]= useState([]);

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

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  return (
    <>
      <SideNavbar />
      <main>
        
        <div className={styles.topp}>
          <TopNavbar />
          <div className={styles.header}>
            <h2>Category</h2>
            <div className={styles.sort_menu}>
              <p>Sort by:</p>
              <button>Most Popular</button>
            </div>
          </div>
        </div> 
        <div className={styles.container}>
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
          <div className={styles.category_card}>            
            {
                popular.map((item) =>                            
                <div className={styles.cat_body}>
                    <img src={item.image} alt="" />
                    {item.formats['image/jpeg'] && (
              <img src={item.formats['image/jpeg']} alt={item.title} />
            )}
                    <h3>{item.title}</h3>
                    {item.authors && item.authors.length > 0 && (
              <p>Author: {item.authors[0].name}</p>
            )}
                    <div className={styles.save_download}>
                      <div className={styles.save_btn}>
                        <MdOutlineBookmarkBorder className={styles.s_icon}/> 
                        Save
                      </div>
                      <FiDownload className={styles.d_icon}/>
                    </div>
                </div>                               
                )
            }      
          </div>
        </div>

        <div className={`${styles.content} ${getActiveClass(2, `${styles.active_content}`)}`}>
          <div className={styles.category_card}>
            {

               book.map((item) =>                            
                <div className={styles.cat_body}>
                    <img src={item.image} alt="" />
                    {item.formats['image/jpeg'] && (
              <img src={item.formats['image/jpeg']} alt={item.title} />
            )}
                    <h3>{item.title}</h3>
                    {item.authors && item.authors.length > 0 && (
              <p>Author: {item.authors[0].name}</p>
            )}
                    <div className={styles.save_download}>
                      <div className={styles.save_btn}>
                        <MdOutlineBookmarkBorder className={styles.s_icon}/> 
                        Save
                      </div>
                      <FiDownload className={styles.d_icon}/>
                    </div>
                </div>                               
                )
              
                
            }      
          </div>
        </div>

        <div className={`${styles.content} ${getActiveClass(3, `${styles.active_content}`)}`}>
          <div className={styles.category_card}>
            {
             book.map((item) =>                            
              <div className={styles.cat_body}>
                  <img src={item.image} alt="" />
                  {item.formats['image/jpeg'] && (
            <img src={item.formats['image/jpeg']} alt={item.title} />
          )}
                  <h3>{item.title}</h3>
                  {item.authors && item.authors.length > 0 && (
            <p>Author: {item.authors[0].name}</p>
          )}
                  <div className={styles.save_download}>
                    <div className={styles.save_btn}>
                      <MdOutlineBookmarkBorder className={styles.s_icon}/> 
                      Save
                    </div>
                    <FiDownload className={styles.d_icon}/>
                  </div>
              </div>                               
              )
            }      
          </div>
        </div>

        <div className={`${styles.content} ${getActiveClass(4, `${styles.active_content}`)}`}>
          <div className={styles.category_card}>
            {
             book.map((item) =>                            
              <div className={styles.cat_body}>
                  <img src={item.image} alt="" />
                  {item.formats['image/jpeg'] && (
            <img src={item.formats['image/jpeg']} alt={item.title} />
          )}
                  <h3>{item.title}</h3>
                  {item.authors && item.authors.length > 0 && (
            <p>Author: {item.authors[0].name}</p>
          )}
                  <div className={styles.save_download}>
                    <div className={styles.save_btn}>
                      <MdOutlineBookmarkBorder className={styles.s_icon}/> 
                      Save
                    </div>
                    <FiDownload className={styles.d_icon}/>
                  </div>
              </div>                               
              )
            }      
          </div>
        </div>
        
        <div className={`${styles.content} ${getActiveClass(5, `${styles.active_content}`)}`}>
          <div className={styles.category_card}>
            {
             book.map((item) =>                            
              <div className={styles.cat_body}>
                  <img src={item.image} alt="" />
                  {item.formats['image/jpeg'] && (
            <img src={item.formats['image/jpeg']} alt={item.title} />
          )}
                  <h3>{item.title}</h3>
                  {item.authors && item.authors.length > 0 && (
            <p>Author: {item.authors[0].name}</p>
          )}
                  <div className={styles.save_download}>
                    <div className={styles.save_btn}>
                      <MdOutlineBookmarkBorder className={styles.s_icon}/> 
                      Save
                    </div>
                    <FiDownload className={styles.d_icon}/>
                  </div>
              </div>                               
              )
            }      
          </div>
        </div>

        <div className={`${styles.content} ${getActiveClass(6, `${styles.active_content}`)}`}>
          <div className={styles.category_card}>
            {
             book.map((item) =>                            
              <div className={styles.cat_body}>
                  <img src={item.image} alt="" />
                  {item.formats['image/jpeg'] && (
            <img src={item.formats['image/jpeg']} alt={item.title} />
          )}
                  <h3>{item.title}</h3>
                  {item.authors && item.authors.length > 0 && (
            <p>Author: {item.authors[0].name}</p>
          )}
                  <div className={styles.save_download}>
                    <div className={styles.save_btn}>
                      <MdOutlineBookmarkBorder className={styles.s_icon}/> 
                      Save
                    </div>
                    <FiDownload className={styles.d_icon}/>
                  </div>
              </div>                               
              )
            }      
          </div>
        </div>

        <div className={`${styles.content} ${getActiveClass(7, `${styles.active_content}`)}`}>
          <div className={styles.category_card}>
            {
             book.map((item) =>                            
              <div className={styles.cat_body}>
                  <img src={item.image} alt="" />
                  {item.formats['image/jpeg'] && (
            <img src={item.formats['image/jpeg']} alt={item.title} />
          )}
                  <h3>{item.title}</h3>
                  {item.authors && item.authors.length > 0 && (
            <p>Author: {item.authors[0].name}</p>
          )}
                  <div className={styles.save_download}>
                    <div className={styles.save_btn}>
                      <MdOutlineBookmarkBorder className={styles.s_icon}/> 
                      Save
                    </div>
                    <FiDownload className={styles.d_icon}/>
                  </div>
              </div>                               
              )
            }      
          </div>
        </div>

      </div>
        </div>
      </main>
    </>
  )
}

export default Explore;
