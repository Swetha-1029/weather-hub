import React from 'react'
import styles from './ErrorMessage.module.css'

function ErrorMessage({ message }) {
  return (
    <div className={styles.error}>
      <span className={styles.icon}>⚠️</span>
      <p>{message}</p>
    </div>
  )
}

export default ErrorMessage
