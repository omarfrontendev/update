import React from 'react'
import { Star } from '../UI/icons'
import styles from './restauransSlider/restauransSlider.module.scss'

const RestaurnatCard = ({ id, name, rating, img, closed, new__content, discount, content, duratio }) => {

  const classes = `
  ${styles.restaurant__Card} 
  ${new__content ? styles.new :''} 
  ${discount ? styles.discount :''}
  ${content ? styles.default__Card : ''}
  `

  return (
    <div className={classes}>
      {closed && <div className={styles.closed}>CLOSED</div>}
      {new__content && <div className={styles.tag}>NEW</div>}
      {discount && <div className={styles.dicount__tag}>{discount}%</div>}
      <img src={img} alt="Restaurnt Image" />
      <p>{name}</p>
      {content && <span>{content.map(c => <span>{c}</span>)}</span>}
      <div className={`${styles.rating} ${duratio ? styles.rating__duration : ''}`}>
        <div>
          <Star />{rating}
        </div>
        {duratio && 
        <div className={styles.duratio}>
          'icon'
          <span>
            {duratio} MIN
          </span>
        </div>}
      </div>
    </div>
  )
}

export default RestaurnatCard