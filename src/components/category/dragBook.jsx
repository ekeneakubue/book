import React from 'react';
import { useDrag } from 'react-dnd';
import styles from './styles.module.css';


const ItemType = 'ITEM';

const DraggableBook = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType,
    item: { id: item.id, title: item.title, image: item.formats['image/jpeg'],authors: item.authors,genre:item.bookshelves
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={styles.cat_body}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      {item.formats && item.formats['image/jpeg'] && (
        <img src={item.formats['image/jpeg']} alt={item.title} />
      )}
      <h3>{item.title}</h3>
      {item.authors && item.authors.length > 0 && (
        <p>Author: {item.authors[0].name}</p>
      )}
      <div className={styles.save_download}>
        <div className={styles.save_btn}>
          {/* <MdOutlineBookmarkBorder className={styles.s_icon} /> */}
          Save
        </div>
        {/* <FiDownload className={styles.d_icon} /> */}
      </div>
    </div>
  );
};

export default DraggableBook;
