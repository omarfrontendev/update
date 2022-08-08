import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import SingleCard from './SingleCard';

import styles from './mainSlider.module.scss'
import "swiper/css";
import "swiper/css/pagination";


const MainSlider = () => {

  const data=[
    {
      id: 1,
      text: '60% off the full Price of tridint Food',
      img: '/assets/unnamed.png'
    },
    {
      id: 2,
      text: '60% off the full Price of tridint Food',
      img: '/assets/unnamed.png'
    },
    {
      id: 3,
      text: '60% off the full Price of tridint Food',
      img: '/assets/unnamed.png'
    },
    {
      id: 4,
      text: '60% off the full Price of tridint Food',
      img: '/assets/unnamed.png'
    },
    {
      id: 5,
      text: '60% off the full Price of tridint Food',
      img: '/assets/unnamed.png'
    },
    {
      id: 6,
      text: '60% off the full Price of tridint Food',
      img: '/assets/unnamed.png'
    },
    {
      id: 7,
      text: '60% off the full Price of tridint Food',
      img: '/assets/unnamed.png'
    },
    {
      id: 8,
      text: '60% off the full Price of tridint Food',
      img: '/assets/unnamed.png'
    },
    {
      id: 9,
      text: '60% off the full Price of tridint Food',
      img: '/assets/unnamed.png'
    },
    {
      id: 10,
      text: '60% off the full Price of tridint Food',
      img: '/assets/unnamed.png'
    },
  ]

  return (
    <div className={styles.main__slider}>
      <Swiper
        spaceBetween={20}
        slidesPerView={3.8}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className={styles.slider}
      >
        {data.map(d => 
          <SwiperSlide>
            <SingleCard key={d.id} text={d.text} id={d.id} img={d.img} />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default MainSlider