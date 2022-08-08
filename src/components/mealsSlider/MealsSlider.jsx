import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import MealCard from './MealCard';

import styles from './mealsSlider.module.scss'
import "swiper/css";
import "swiper/css/pagination";

const MealsSlider = () => {

  const meals = [
    {
      id: 1,
      title: 'Jumbo Shrimp Meal',
      subtitle: 'Albaik Restaurant',
      text: 'Western Food',
      img: '/assets/unnamed.png',
      rating: 4.8,
      duration: 25,
      liked: false
    },
    {
      id: 2,
      title: 'Jumbo Shrimp Meal',
      subtitle: 'Albaik Restaurant',
      img: '/assets/unnamed.png',
      text: 'Western Food',
      rating: 4.8,
      duration: 25,
      liked: false
    },
    {
      id: 3,
      title: 'Jumbo Shrimp Meal',
      subtitle: 'Albaik Restaurant',
      img: '/assets/unnamed.png',
      text: 'Western Food',
      rating: 4.8,
      duration: 25,
      liked: false
    },
    {
      id: 4,
      title: 'Jumbo Shrimp Meal',
      subtitle: 'Albaik Restaurant',
      img: '/assets/unnamed.png',
      text: 'Western Food',
      rating: 4.8,
      duration: 25,
      liked: false
    },
    {
      id: 5,
      title: 'Jumbo Shrimp Meal',
      subtitle: 'Albaik Restaurant',
      img: '/assets/unnamed.png',
      text: 'Western Food',
      rating: 4.8,
      duration: 25,
      liked: false
    },
    {
      id: 6,
      title: 'Jumbo Shrimp Meal',
      subtitle: 'Albaik Restaurant',
      img: '/assets/unnamed.png',
      text: 'Western Food',
      rating: 4.8,
      duration: 25,
      liked: false
    },
  ];

  return (
    <Swiper
      spaceBetween={47}
      slidesPerView={3.85555}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={styles.mealSlider}
    >
      {meals.map(meal => 
        <SwiperSlide key={meal.id}>
          <MealCard 
            id={meal.id} 
            title={meal.title} 
            subtitle={meal.subtitle} 
            text={meal.text}
            duration={meal.duration}
            rating={meal.rating}
            img={meal.img}
          />
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default MealsSlider;