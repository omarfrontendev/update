import React from "react";
import CardsRow from "../CardsRow";
// import MealsSlider from "../MealsSlider";

export default function RecommendedSlider() {
  return (
    <div className="recommended__items__slider">
      <CardsRow title={"Recommended for you"} link="/">
        {/* <MealsSlider /> */}
      </CardsRow>
    </div>
  );
}
