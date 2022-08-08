import React from "react";
import { Swiper } from "swiper/react";

import "swiper/css";

export default function SwiperSlider({ children, spv }) {
  return (
    <Swiper spaceBetween={20} slidesPerView={spv || 4.5} modules={[]}>
      {children}
    </Swiper>
  );
}
