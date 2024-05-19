import React, { useState } from "react";
import styles from "./styles.module.css";
import { popular, novels, science } from '../CategoryData'

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  return (
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
                    <h3>{item.title}</h3>
                    <p>{item.author}</p>
                </div>                               
                )
            }      
          </div>
        </div>

        <div className={`${styles.content} ${getActiveClass(2, `${styles.active_content}`)}`}>
          <div className={styles.category_card}>
            {
                novels.map((item) =>                            
                <div className={styles.cat_body}>
                    <img src={item.image} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.author}</p>
                </div>                               
                )
            }      
          </div>
        </div>

        <div className={`${styles.content} ${getActiveClass(3, `${styles.active_content}`)}`}>
          <div className={styles.category_card}>
            {
              science.map((item) =>                            
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
    </div>
  );
};

export default Tab;