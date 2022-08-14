import React from "react";
import styles from "./.module.scss";
import { Link } from "react-router-dom";
import { MenuIcon, InfoIcon } from "../../UI/icons";
// import MenuIcon from "../../UI/icons/MenuIcon";

export default function ItemDetailsRow() {
  return (
    <div className={styles.item__details__header__wrapper}>
      <ul className={styles.links__list}>
        <li className={styles.link__item}>
          <Link to={"/"}>
            <button className={`${styles.link} ${styles.active__link}`}>
              <MenuIcon />
              <span>menu</span>
            </button>
          </Link>
        </li>
        <li className={styles.link__item}>
          <Link to={"/resturant-info"}>
            <button className={styles.link}>
              <InfoIcon />
              <span>info</span>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
