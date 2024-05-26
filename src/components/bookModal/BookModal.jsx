import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './BookModal.module.css';
import { Link } from 'react-router-dom'
import { reviews } from './ReviewData';
import {io} from 'socket.io-client';
const baseURL = 'https://bookworm-backend-1.onrender.com';
const base= 'http://localhost:8000'

export default function BookModal({ closeModal, book }) {
    const [toggleState, setToggleState] = useState(1);
    const [textContent, setTextContent] = useState('');
    const [message, setMessage] = useState('');
    const [receivedMessage, setReceivedMessage] = useState('');
    const formatLink = book.formats['text/html'];
    const [socket, setSocket] = useState(null);
    // const socket = io(base);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const fetchBookContent = async () => {
        try {
            const response = await axios.post(`${baseURL}/getText`,{
                url:formatLink,
            });
            const text=response.data.text
            let textContent = text;
            // Limit to 30 lines
            let lines = textContent.split('\n').filter(line => line.trim() !== '');
            lines = lines.slice(0, 30).join('\n');
            setTextContent(lines);
        } catch (error) {
            console.error('Error fetching book content:', error);
        }
    };

    useEffect(() => {
        fetchBookContent();
    }, []);
    
    useEffect(() => {
        const newSocket = io(baseURL);
        setSocket(newSocket);

        newSocket.on('connect', () => {
            console.log('Connected to server');
        });

        newSocket.on('chat message', (message) => {
            // console.log(message);
            setReceivedMessage(message);
            // console.log(receivedMessage,'kkkk')
        });

        // Clean up the socket connection on component unmount
        return () => {
            newSocket.disconnect();
        };
    }, []);
    
    useEffect(() => {
        if (receivedMessage) {
            // console.log('Updated received message:', receivedMessage);
        }
    }, [receivedMessage]);

    const sendMessage = () => {
        if (message.trim() !== '') {
            socket.emit('chat message', message);
            setMessage('');
        }
    };
    
    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";

    return (
        <div className={styles.modal_background}>
            <div className={styles.modal_container}>
                <button onClick={() => closeModal(false)}>X</button>
                <div className={styles.modal_main}>
                    <div className={styles.modal_image}>
                        <img src={book.formats['image/jpeg']} alt="" />
                    </div>
                    <div className={styles.modal_detail}>
                        <div className={styles.title}><h3>{book.title}</h3></div>
                        <p>{book.authors && book.authors.length > 0 ? book.authors[0].name : ''}</p>
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
                            <Link to='/readout' state={{book}}>
                            <button><img src="images/mo5.png" alt=""/> Read Book</button>
                            </Link>
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
                            <p>{textContent}</p>
                        </div>
                        <div className={`${styles.content} ${getActiveClass(2, `${styles.active_content}`)}`}>
                    <h2>Send Message</h2>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={sendMessage}>Send</button>
                    <h2>Received Message</h2>
                    <p>{receivedMessage}</p>
                </div>
            
                        <div className={`${styles.content} ${getActiveClass(3, `${styles.active_content}`)}`}>
                            <p>See all</p>
                            <div>
                                {reviews.map((item) => (
                                    <div className={styles.review_card} key={item.name}>
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
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
