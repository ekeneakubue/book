import React from 'react'
import styles from './BookModal.module.css'

export default function BookModal({closeModal}) {
  return (
    <div className={styles.modal_background}>
        <div className={styles.modal_container}>
            <button onClick={() => closeModal(false)}>X</button>
            <div className={styles.modal_title}>
                <h1>BookWorm Modal</h1>
            </div>
            <div className={styles.modal_body}>
                <p>Book Description</p>
            </div>
            <div className={styles.modal_footer}>
                <button onClick={() => closeModal(false)}>Cancel</button>
                <button>Continue</button>
            </div>
        </div>
    </div>
  )
}
