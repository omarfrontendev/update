import React, { useEffect, useRef, useState } from "react";
import styles from "./.module.scss";
import { AiFillCaretDown } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

// DROPDOWN MENUS
import CartDropdown from "../CartDropdown";
import UserDropdown from "../UserDropdown";
import MessagesDropdown from "../MessagesDropdown";
import NotificationsDropdown from "../NotificationsDropdown";

import {
  FilterIcon,
  CartIcon,
  MsgIcon,
  BillIcon,
  UserIcon,
} from "../../UI/icons";

export default function MainHeader({ logged }) {

  const navigate = useNavigate();
  const headerRef = useRef()
  const [showHeader, setShowHeader] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [ShowCart, setShowCart] = useState(false);
  const [ShowMessages, setShowMessages] = useState(false);
  const [ShowNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    
    const controlNavbar = () => {
      if(document.body.getBoundingClientRect().top < 0) {
        setScrollPosition (document.body.getBoundingClientRect().top);
        setShowHeader(document.body.getBoundingClientRect().top > scrollPosition);
      }else {
        setShowHeader(null);
      }
      // openMenu && setShowNav(true);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }

  },[scrollPosition]);

  return (
    <>
    <header 
      ref={headerRef} 
      className={`${styles.main__header} ${showHeader === null ? '' : showHeader ? styles.header__show : styles.header__hide}`}
    >
      <div className={`container__wrapper ${styles.main__header__wrapper}`}>
        {!logged && (
          <button
            className={styles.signup_login__btn}
            data-bs-toggle="modal"
            data-bs-target={`#member__area__modal`}
          >
            <UserIcon />
            <span>Sign In/Sign up</span>
          </button>
        )}
        {logged && (
          <div className={`row g-0 ${styles.header__wrapper}`}>
            <div className="col-9 col-sm-8 col-md-8 col-lg-7">
              <div className={styles.search__form__container}>
                <form
                  className={styles.search__form}
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <RiSearchLine className={styles.search__icon} />
                  <input
                    onChange={(e) => {
                      e.target.value
                        ? navigate(`/search?query=${e.target.value}`)
                        : navigate(`/home`);
                    }}
                    className={styles.search__input__field}
                    type="text"
                    placeholder="Search Food or Resturant ..."
                  />
                </form>
                <button className={styles.filter_btn}>
                  <FilterIcon />
                </button>
              </div>
            </div>
            <div className="col-3 col-sm-4 col-md-4 col-lg-5">
              <ul className={styles.user__actions__list}>
                <li className={styles.list__item}>
                  <div class="dropdown">
                    <button
                      class={`${styles.user__settings_list} dropdown-toggle`}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                    >
                      <CartIcon />
                      <span className={styles.count__wrapper}>1</span>
                    </button>
                    <CartDropdown />
                  </div>
                </li>
                <li className={styles.list__item}>
                  <div class="dropdown">
                    <button
                      class={`${styles.user__settings_list} dropdown-toggle`}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                      data-bs-display="static"
                    >
                      <MsgIcon />
                      <span className={styles.count__wrapper}>6</span>
                    </button>
                    <MessagesDropdown />
                  </div>
                </li>
                <li className={styles.list__item}>
                  <div class="dropdown">
                    <button
                      class={`${styles.user__settings_list} dropdown-toggle`}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                      data-bs-display="static"
                    >
                      <BillIcon />
                      <span className={styles.count__wrapper}>+9</span>
                    </button>
                    <NotificationsDropdown />
                  </div>
                </li>
                <li className="ms-3">
                  <div className="dropdown">
                    <button
                      className={`btn dropdown-toggle ${styles.user__settings_list}`}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                    >
                      <div
                        className={`${styles.user__avatar__container} me-3`}
                      ></div>
                      <div className={`mx-2 ${styles.user__info}`}>
                        <p className={`${styles.user__name}`}>Ahmed Nasser</p>
                        <p className={`${styles.user__role}`}>Customer</p>
                      </div>
                      <AiFillCaretDown className="ms-2" />
                    </button>
                    <UserDropdown 
                      setShowCart={setShowCart}
                      setShowMessages={setShowMessages}
                      setShowNotifications={setShowNotifications}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
    {ShowCart && <CartDropdown notMenu={true} onClose={setShowCart} />}
    {ShowMessages && <MessagesDropdown notMenu={true} onClose={setShowMessages} />}
    {ShowNotifications && <NotificationsDropdown notMenu={true} onClose={setShowNotifications} />}
    </>
  );
}
