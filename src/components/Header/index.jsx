import React, { useState } from "react";
import styles from "./.module.scss";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

import FilterIcon from "../../UI/icons/Filter_icon";
import { FiSearch } from "react-icons/fi";
import CartIcon from "../../UI/icons/Cart_icon";
import MsgIcon from "../../UI/icons/Msg_icon";
import BillIcon from "../../UI/icons/Bill_icon";
import UserIcon from "../../UI/icons/User_icon";
import CartDropdown from "../CartDropdown";
import MessagesDropdown from "../MessagesDropdeown";
import NotificationDropdown from "../NotificationDropdown";
import UserDropdown from "../UserDropdown";
import { IoMdArrowDropdown } from 'react-icons/io'

export default function Header() {

  const [fakeLogged, setFakeLogged] = useState(false);
  const [openCartMenu, setOpenCartMenu] = useState(false);
  const [openMessageMenu, setOpenMessageMenu] = useState(false);
  const [openNotificationsMenu, setOpenNotificationsMenu] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  return (
    <header className={styles.main__header}>
      {!fakeLogged && (
        <Link to="/" onClick={() => setFakeLogged(true)}>
          <a href="/" className={styles.signup_login__btn}>
            <UserIcon />
            <span>Sign In/Sign up</span>
          </a>
        </Link>
      )}
      {fakeLogged && (
        <div className="row align-items-center">
          <div className="col-7">
            <div className={styles.search__form__container}>
              <form
                className={styles.search__form}
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <FiSearch className={styles.search__icon} />
                <input
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
          <div className="offset-1 col-4">
            <ul className={styles.user__actions__list}>
              <li className={`mx-3`}>
                <div className="position-relative">
                  <button
                    className={`${styles.user__settings_list} position-relative`}
                    id='cart-btn'
                    type="button"
                    onClick={() => setOpenCartMenu(prev => !prev)}
                  >
                    <span className={styles.icon__span}>
                      <CartIcon />
                    </span>
                    {openCartMenu && <IoMdArrowDropdown className={`position-absolute ${styles.dropdown__icon}`} />}
                  </button>
                    <CartDropdown 
                      state={openCartMenu} 
                      id='cart-btn' 
                      setState={setOpenCartMenu} 
                    />
                </div>
              </li>
              <li className={`mx-3`}>
                <div className="position-relative">
                  <button
                    className={`${styles.user__settings_list} position-relative`}
                    type="button"
                    id='message-btn'
                    onClick={() => setOpenMessageMenu(prev => !prev)}
                  >
                    <span className={styles.icon__span}>
                      <MsgIcon />
                    </span>
                    {openMessageMenu && <IoMdArrowDropdown className={`position-absolute ${styles.dropdown__icon}`} />}
                  </button>
                  <MessagesDropdown
                    state={openMessageMenu}
                    setState={setOpenMessageMenu}
                    id='message-btn'
                  />
                </div>
              </li>
              <li className={`mx-3`}>
                <div className="position-relative">
                  <button
                    className={`${styles.user__settings_list} position-relative`}
                    type="button"
                    id="notifications-btn"
                    onClick={() => setOpenNotificationsMenu(prev => !prev)}
                  >
                    <span className={styles.icon__span}>
                      <BillIcon />
                    </span>
                    {openNotificationsMenu && <IoMdArrowDropdown className={`position-absolute ${styles.dropdown__icon}`} />}
                  </button>
                  <div className={`${styles.dropdown}`}>
                    <NotificationDropdown
                      id="notifications-btn"
                      state={openNotificationsMenu}
                      setState={setOpenNotificationsMenu}
                    />
                  </div>
                </div>
              </li>
              <li className="ms-3">
                <div className="position-relative">
                  <button
                    type="button"
                    className={`${styles.user__settings_list} position-relative`}
                    onClick={() => setOpenUserMenu(prev => !prev)}
                    id='user-menu'
                  >
                    <div
                      className={`${styles.user__avatar__container} me-1 pe-none`}
                    ></div>
                    <div className={`mx-2 pe-none ${styles.user__info}`}>
                      <p className={`p-0 m-0 ${styles.user__name}`}>
                        Ahmed Nasser
                      </p>
                      <p className={`p-0 m-0 ${styles.user__role}`}>Customer</p>
                    </div>
                    <span className={styles.icon__span}>
                      <AiFillCaretDown className="ms-2" />
                    </span>
                  </button>
                  <div className={`${styles.dropdown}`}>
                    <UserDropdown
                      state={openUserMenu}
                      setState={setOpenUserMenu}
                      id='user-menu'
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
