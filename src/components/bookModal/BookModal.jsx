import React,{ useState } from 'react'
import styles from './BookModal.module.css'
import { reviews } from './ReviewData'

export default function BookModal({closeModal}) {
    
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";

    return (
        <div className={styles.modal_background}>
            <div className={styles.modal_container}>
                <button onClick={() => closeModal(false)}>X</button>
                <div className={styles.modal_main}>
                    <div className={styles.modal_image}>
                        <img src="images/cate1.png" alt="" />
                    </div>
                    <div className={styles.modal_detail}>
                        <div className={styles.title}><h3>Atomic Habits</h3></div>
                        <p>Anthony W. Knapp</p>
                        <button>Art</button>&nbsp;&nbsp;
                        <button>Literature</button>
                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <div><img src="images/mo1.png" alt="" /> 4.8</div>
                                <p>Rating</p>
                            </div>
                            <div className={styles.feature}>
                                <div><img src="images/mo2.png" alt="" /> 249</div>
                                <p>Pages</p>
                            </div>
                            <div className={styles.feature}>
                                <div><img src="images/mo3.png" alt="" /> 5Hrs</div>
                                <p>Reading time</p>
                            </div>
                            <div className={styles.feature}>
                                <div><img src="images/mo4.png" alt="" /> English</div>
                                <p>Language</p>
                            </div>
                        </div>
                        <div className={styles.features_btns}>
                            <button><img src="images/mo5.png" alt="" /> Read Book</button>
                            <button className={styles.listen}><img src="images/mo6.png" alt="" /> Listen</button>
                            <button>Save Offline</button>
                        </div>
                    </div>
                </div>
                
                <div className={styles.modal_footer}>
                    <div className={styles.tab_list}>
                        <div 
                            className={`${styles.tabs} ${getActiveClass(1, `${styles.active_tabs}`)}`}
                            onClick={() => toggleTab(1)}
                        >
                        Description
                        </div>
                        
                        <div 
                            className={`${styles.tabs} ${getActiveClass(2, `${styles.active_tabs}`)}`}
                            onClick={() => toggleTab(2)}
                        >
                        Ask AI
                        </div>

                        <div 
                            className={`${styles.tabs} ${getActiveClass(3, `${styles.active_tabs}`)}`}
                            onClick={() => toggleTab(3)}
                        >
                        Review
                        </div>                    
                    </div>      
                    
                    <div className={styles.content_container}>
                        <div className={`${styles.content} ${getActiveClass(1, `${styles.active_content}`)}`}>
                            <p>
                                Purple Hibiscus" is a poignant exploration of the complexities of family 
                                relationships, the clash between tradition and modernity, and the 
                                resilience of the human spirit. Adichie's prose is rich and evocative, 
                                painting a vivid picture of Nigeria while delving into universal themes 
                                that resonate with readers around the world.
                            </p>
                        </div>

                        <div className={`${styles.content} ${getActiveClass(2, `${styles.active_content}`)}`}>
                            Welcome {reviews.map((item) => <p>{item.name}</p>)}
                            What do you want to know about this book?
                        </div>

                        <div className={`${styles.content} ${getActiveClass(3, `${styles.active_content}`)}`}>
                            <p>See all</p>
                            <div> 
                                {
                                    reviews.map((item) =>                                     
                                        <div className={styles.review_card}>
                                            <div className={styles.review_header}>
                                                <div className={styles.reviewer}>
                                                    <img src={item.image} alt="" />
                                                    <div>
                                                        <div className={styles.name}>{item.name}</div>
                                                        <img src="images/mo1.png" alt="" /> {item.rate}
                                                    </div>
                                                </div>
                                                <div className={styles.time}>
                                                    <p>{item.time} min ago</p>
                                                </div>
                                            </div>
                                            <div className={styles.review_body}>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>                               
                                    )
                                }                             
                            </div>
                        </div>
                    </div> 
                </div>           
            </div>
        </div>
    )
}
