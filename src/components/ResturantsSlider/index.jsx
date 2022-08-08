import React from "react";
import SwiperSlider from "../SwiperSlider";
import { SwiperSlide } from "swiper/react";
import ResSumCard from "../ResSumCard";

export default function ResturantsSlider() {
  const resturants = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="resturants__slider__wrapper">
      <SwiperSlider spv={7.5}>
        {resturants.map((item, index) => (
          <SwiperSlide key={index}>
            <ResSumCard />
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </div>
  );
}
