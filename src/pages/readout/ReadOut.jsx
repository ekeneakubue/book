import React, { useEffect, useState } from 'react'
import styles from './ReadOut.module.css'
import { IoCloseOutline } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const baseURL = 'https://bookworm-backend-1.onrender.com';
const base= 'http://localhost:8000'

export default function ReadOut(){
  const location = useLocation();
  const { book } = location.state || {};
  const formatLink = book.formats['text/html'];
  const [textContent, setTextContent] = useState('');
  const [chapternumber, setChaptersnumber] = useState([]);
  const [first10Letters, setFirst10Letters] = useState([]);
  


  const fetchBookContent = async () => {
    try {
        const response = await axios.post(`${baseURL}/getText`, {
            url: formatLink,
        });

        const text = response.data.text;
        setTextContent(text);

        // Split the text into chapters based on the occurrence of the word "chapter"
        const chapters = text.split(/chapter/i);
        
        // Filter out any empty strings
        const filteredChapters = chapters.filter(chapter => chapter.trim() !== '');

        // Initialize arrays to hold chapter numbers and first 10 letters
        const chapterNumbers = [];
        const first10LettersArray = [];

        // Iterate through filteredChapters and extract chapter number and first 10 letters
        filteredChapters.forEach((chapter, index) => {
            // Extract chapter number
            const chapterNumber = index + 1;
            chapterNumbers.push(chapterNumber);

            // Extract first 10 letters
            const first10Letters = chapter.substring(0, 50);
            first10LettersArray.push(first10Letters);

            // console.log(`Chapter ${chapterNumber}: ${first10Letters}`);
        });

        // Set the state for chapter numbers and first 10 letters
        setChaptersnumber(chapterNumbers);
        setFirst10Letters(first10LettersArray);

        // You can set the chapters state with filteredChapters
        // setChapters(filteredChapters);
    } catch (error) {
        console.error('Error fetching book content:', error);
    }
};



useEffect(() => {
    fetchBookContent();
},[])

    return(
        <div className={styles.readout}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src='images/logo.jpg' alt='logo' />
                    <p>BookWorm</p>
                </div>

                <div className={styles.title}>
                    <h1>{book.title}</h1>
                </div>

                <div className={styles.close}>
                    <IoCloseOutline className={styles.close_icon}/>
                </div>
            </div>
            <hr className={styles.divider}/>

            <div className={styles.sidenav}>
                <ul>
                    {/* <li className={styles.sidenav_link}>Chapter 1 <span className={styles.pages}>Page 1-50</span> <p>The Great Mine</p></li>
                    <li className={styles.sidenav_link}>Chapter 2<span className={styles.pages}>Page 51-120</span><p>The Great Mine</p></li>
                    <li className={styles.sidenav_link}>Chapter 3<span className={styles.pages}>Page 121-163</span><p>Rise of the Miners</p></li>
                    <li className={styles.sidenav_link}>Chapter 4</li>
                    <li className={styles.sidenav_link}>Chapter 5</li>
                    <li className={styles.sidenav_link}>Chapter 6</li>
                    <li className={styles.sidenav_link}>Chapter 7</li>
                    <li className={styles.sidenav_link}>Chapter 8</li>
                    <li className={styles.sidenav_link}>Chapter 9</li>    */}
                   {chapternumber.map((number, index) => (
    <li key={index} className={styles.sidenav_link}>
        <span className={styles.pages}>Chapter {number}: {first10Letters[index]}</span>
    </li>
))}
                </ul>

                <div>

                    {textContent}
                </div>
            </div>        
        </div>
    );
}