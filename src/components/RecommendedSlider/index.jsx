import React from "react";
import CardsRow from "../CardsRow";
import MealsSlider from "../MealsSlider";
import styles from "./.module.scss";

export default function RecommendedSlider() {
  return (
    <div className={styles.recommended__items__slider}>
      <CardsRow title={"Recommended for you"} link="/recommended">
        <MealsSlider />
      </CardsRow>
    </div>
  );
}
