import React from "react";
import styles from "./.module.scss";
import { Link } from "react-router-dom";

export default function OfferCard({ description, img, index }) {
  const cardStyles = [
    "purple__card",
    "orange__card",
    "dark__gray__card",
    "light__gray__card",
  ];
  return (
    <Link to={"/"}>
      <a
        href="/"
        className={`${styles.offer__card} ${styles[`${cardStyles[index]}`]}`}
      >
        <p className={styles.offer__description}>{description}</p>
        <img className={styles.offer__image} src={img} alt="offer_image" />
      </a>
    </Link>
  );
}
