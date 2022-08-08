import React from 'react'
import { CloseIcon } from '../../UI/icons/icons'
import styles from './.module.scss'

export default function ModalHeader({ title, onClose }) {
  return (
    <div className={`${styles.header__modal} d-flex align-items-center justify-content-between`}>
      <div className={`${styles.title}`}>
        {title}
      </div>
      <button className={styles.close__btn} onClick={() => onClose(false)}>
        <CloseIcon />
      </button>
    </div>
  )
}
