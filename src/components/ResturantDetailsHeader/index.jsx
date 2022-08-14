import React, { useState } from "react";
import styles from "./.module.scss";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiMotorbikeLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";

export default function ResturantDetailsHeader() {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.res__details__header__wrapper}>
      <div className={styles.like__btn__wrapper}>
        <button
          className={styles.meal__like__btn}
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <AiFillHeart className={styles.like__btn__icon} />
          ) : (
            <AiOutlineHeart className={styles.like__btn__icon} />
          )}
        </button>
      </div>
      <div className={`row g-0 ${styles.res__details__header}`}>
        <div className={`col-2 ${styles.header__section__wrapper}`}>
          <div className={`${styles.header__section}`}>
            <div className={styles.res__logo__wrapper}>
              <img src="/assets/unnamed.png" alt="resturant logo" />
            </div>
          </div>
        </div>
        <div className={`col-4 ${styles.header__section__wrapper}`}>
          <div className={`${styles.header__section}`}>
            <div className={styles.resturant__facts}>
              <h5 className={styles.resturant__name}>Pizza Hut</h5>
              <span className={styles.resturant__meals}>
                Food • Deserts • Drinks
              </span>
              <ul className={styles.res__specs__list}>
                <li className={styles.list__item}>
                  <AiFillStar className={styles.star__icon} />
                  <span>4.5</span>
                </li>
                <li className={styles.list__item}>
                  <RiMotorbikeLine className="me-2" />
                  <span>20 MIN</span>
                </li>
                <li className={styles.list__item}>
                  <span>20 SAR</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`col-6 ${styles.header__section__wrapper}`}>
          <div className={`${styles.header__section}`}>
            <div className={styles.search__from__wrapper}>
              <RiSearchLine className={styles.search__icon} />
              <form
                onSubmit={(e) => e.preventDefault()}
                className={styles.search__form}
              >
                <input
                  type="text"
                  className={styles.search__form__input}
                  placeholder="Search Items …"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
