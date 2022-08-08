import React from 'react'

import styles from './mainSlider.module.scss'

const MainCard = ({ text, img }) => {
  return (
    <div className={styles.card}>
      <p>{text}</p>
      <img src={img} alt="" />
    </div>
  )
}

export default MainCard