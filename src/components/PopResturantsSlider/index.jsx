import React from "react";
import CardsRow from "../CardsRow";
import ResturantsSlider from "../ResturantsSlider";

export default function PopResturantsSlider() {
  return (
    <div className="pop__resturants__slider__wrapper">
      <CardsRow title={"Popular Resturants"} link="/">
        <ResturantsSlider />
      </CardsRow>
    </div>
  );
}
