import React from "react";
import SwiperSlider from "../SwiperSlider";
import { SwiperSlide } from "swiper/react";
import MealCard from "../MealCard";

export default function MealsSlider() {
  const mealsArray = [
    { img: "/assets/unnamed.png" },
    { img: "/assets/unnamed.png" },
    { img: "/assets/unnamed.png" },
    { img: "/assets/unnamed.png" },
    { img: "/assets/unnamed.png" },
  ];
  return (
    <div className="meals__slider__wrapper">
      <SwiperSlider spv={3.8}>
        {mealsArray.map((item, index) => (
          <SwiperSlide key={index}>
            <MealCard img={item.img} />
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </div>
  );
}
