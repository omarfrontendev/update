import React from 'react'
import { Duration, Star } from '../../UI/icons'

import styles from './mealsSlider.module.scss'

const MealCard = ({ id, title, subtitle, text, duration, rating, img }) => {
  return (
    <div className={styles.mealCard}>
      <div className={styles.card__text}>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className={styles.footerCard}>
          <span>{text}</span>
          <div className={styles.rating__duration}>
            <div>
              <Star />
              {rating}
            </div>
            <div>
              <Duration />
              {duration}min
            </div>
          </div>
        </div>
      </div>
      <div className={styles.card__image}>
        <img src={img} alt="Meal Image" />
        <div className={styles.heart}>
          
        </div>
      </div>
    </div>
  )
}

export default MealCard