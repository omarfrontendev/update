import React from "react";
import styles from "./.module.scss";
import SwiperSlider from "../SwiperSlider";
import { SwiperSlide } from "swiper/react";
import OfferCard from "../OfferCard";

const offersArray = [
  {
    description: "60% off the full Price of tridint Food",
    img: "/assets/unnamed.png",
  },
  {
    description: "60% off the full Price of tridint Food",
    img: "/assets/unnamed.png",
  },
  {
    description: "60% off the full Price of tridint Food",
    img: "/assets/unnamed.png",
  },
  {
    description: "60% off the full Price of tridint Food",
    img: "/assets/unnamed.png",
  },
];

export default function OffersSlider() {
  return (
    <div className="mb-5">
      <div className={styles.offers__slider__wrapper}>
        <SwiperSlider spv={3.8}>
          {offersArray.map((offer, index) => (
            <SwiperSlide key={index}>
              <OfferCard
                index={index}
                description={offer.description}
                img={offer.img}
              />
            </SwiperSlide>
          ))}
        </SwiperSlider>
      </div>
    </div>
  );
}
