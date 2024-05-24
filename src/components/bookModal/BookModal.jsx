import React from 'react'
import styles from './BookModal.module.css'

export default function BookModal() {
  return (
    <div>
        <div className={styles.modal_container}>
            <button>X</button>
            <div className={styles.modal_title}>
                <h1>BookWorm Modal</h1>
            </div>
            <div className={styles.modal_body}>
                <p>Book Description</p>
            </div>
            <div className={styles.modal_footer}>
                <button>Cancel</button>
                <button>Continue</button>
            </div>
        </div>
    </div>
  )
}
