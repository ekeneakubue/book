import React from "react";
import ReactCardCarousel from "react-card-carousel";
import styles from "./MyCarousel.module.css";

const MyCarousel = () => {
  const CONTAINER_STYLE = {
    position: "relative",
    height: "70vh",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "middle",
  };

  const CARD_STYLE = {
    height: "400px",
    width: "800px",
    paddingTop: "3rem",
    textAlign: "center",
    background: "#213336",
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "10px",
    boxSizing: "border-box"
  };

  return (
    <div style={CONTAINER_STYLE}>
      <ReactCardCarousel autoplay={true} autoplay_speed={10000}>
        <div style={CARD_STYLE}  className={styles.cards}>
          <img src="images/rachael.png" alt="" />
          <p>
            “Bookworm has revolutionized how I study. The AI summarization 
            feature is a game-changer!”
          </p>
          <h2>- Rachael D.</h2>
        </div>

        <div style={CARD_STYLE} className={styles.cards}>
          <img src="images/john.png" alt="" />
          <p>
            “As an avid reader, I've tried many ebook readers, but this 
            one stands out. The AI summary feature is a game-changer – perfect 
            for when I want a quick overview of a book before diving in.”
          </p>
          <h2>- John C.</h2>
        </div>

        <div style={CARD_STYLE} className={styles.cards}>
          <img src="images/emily.png" alt="" />
          <p>
            “I'm so impressed with this ebook reader! Not only is it 
            user-friendly, but it also has an extensive library of books 
            to choose from. I love being able to see reviews from other readers 
            before deciding on a book.”
          </p>
          <h2>- Emily R.</h2>
        </div>

        <div style={CARD_STYLE} className={styles.cards}>
          <img src="images/james.png" alt="" />
          <p>
            “I can't say enough good things about this Bookworm! It's easy 
            to use, has a wide selection of books, and the AI summary feature 
            is incredibly helpful.”
          </p>
          <h2>- James L.</h2>
        </div>

        <div style={CARD_STYLE} className={styles.cards}>
          <img src="images/sarah.png" alt="" />
          <p>
            “Absolutely love this ebook reader! The interface is intuitive, 
            the slection of books is fantastic, and the ability to customize 
            settings makes reading a breeze. Highly recommend!”
          </p>
          <h2>- Sarah R.</h2>
        </div>
      </ReactCardCarousel>      
    </div>
  );
};

export default MyCarousel;
