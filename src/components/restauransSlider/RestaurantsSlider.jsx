import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import MainCard from '../MainCard'

import styles from './restauransSlider.module.scss'
import "swiper/css";
import "swiper/css/pagination";

const RestaurantsSlider = () => {

  const restaurnats = [
    {
      id: 1,
      name: 'Albaik',
      rating: 4.8,
      img: '/assets/unnamed.png',
      closed: true,
      content: ['Food', 'Deserts', 'Drinks'],
      duratio: 20
    },
    {
      id: 2,
      name: 'Albaik',
      rating: 4.8,
      img: '/assets/unnamed.png',
      new__content: true,
      content: ['Food', 'Deserts', 'Drinks'],
      duratio: 20
    },
    {
      id: 3,
      name: 'Albaik',
      rating: 4.8,
      img: '/assets/unnamed.png',
      discount: 50,
      content: ['Food', 'Deserts', 'Drinks'],
      duratio: 20
    },
    {
      id: 4,
      name: 'Albaik',
      rating: 4.8,
      img: '/assets/unnamed.png',
      content: ['Food', 'Deserts', 'Drinks'],
      duratio: 20
    },
    {
      id: 5,
      name: 'Albaik',
      rating: 4.8,
      img: '/assets/unnamed.png'
    },
    {
      id: 6,
      name: 'Albaik',
      rating: 4.8,
      img: '/assets/unnamed.png'
    },
    {
      id: 7,
      name: 'Albaik',
      rating: 4.8,
      img: '/assets/unnamed.png'
    },
    {
      id: 8,
      name: 'Albaik',
      rating: 4.8,
      img: '/assets/unnamed.png'
    },
    {
      id: 9,
      name: 'Albaik',
      rating: 4.8,
      img: '/assets/unnamed.png'
    },
    {
      id: 10,
      name: 'Albaik',
      rating: 4.8,
      img: '/assets/unnamed.png'
    },
    {
      id: 11,
      name: 'Albaik',
      rating: 4.8,
      img: '/assets/unnamed.png'
    },
    {
      id: 12,
      name: 'Albaik',
      rating: 4.8,
      img: '/assets/unnamed.png'
    },
    {
      id: 13,
      name: 'Albaik',
      rating: 4.8,
      img: '/assets/unnamed.png'
    },
  ]

  return (
    <Swiper
      spaceBetween={21}
      slidesPerView={7.5}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className={styles.restaurantsSlider}
    >
    {restaurnats.map(r => 
      <SwiperSlide key={r.id}>
        <MainCard
          id={r.id}
          name={r.name}
          img={r.img}
          rating={r.rating}
          closed={r?.closed}
          new__content={r?.new__content}
          discount={r?.discount}
          content={r?.content}
          duratio={r.duratio}
        />
      </SwiperSlide>
    )}
  </Swiper>
  )
}

export default RestaurantsSlider