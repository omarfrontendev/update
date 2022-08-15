import React from "react";
import { LogoutIcon, OrderIcon, SettingIcon } from "../../UI/icons";
import { IoIosArrowForward, IoMdNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import DropdownMenu from "../DropdownMenu";
import styles from "./.module.scss";

export default function UserDropdown({
  setShowCart,
  setShowMessages,
  setShowNotifications,
  showHeader
}) {
  return (
    <DropdownMenu alignedEnd={true} showHeader={showHeader}>
      <div className={`d-flex flex-column ${styles.user__dropdown}`}>
        <button
          className={`d-flex justify-content-between align-items-center ${styles.row}`}
        >
          <div className={`d-flex align-items-center  ${styles.left__row}`}>
            <OrderIcon />
            <p className={styles.title}>My Orders</p>
          </div>
          <IoIosArrowForward />
        </button>
        <button
          className={`d-flex justify-content-between align-items-center ${styles.row}`}
        >
          <div className={`d-flex align-items-center  ${styles.left__row}`}>
            <SettingIcon />
            <p className={styles.title}>Change Password</p>
          </div>
          <IoIosArrowForward />
        </button>
        <button
          className={`d-flex justify-content-between align-items-center ${styles.small__screen} ${styles.row}`}
          onClick={() => setShowCart((prev) => !prev)}
        >
          <div className={`d-flex align-items-center   ${styles.left__row}`}>
            <FaShoppingCart className={styles.icon} />
            <p className={styles.title}>Cart</p>
          </div>
          <IoIosArrowForward />
        </button>
        <button
          onClick={() => setShowMessages((prev) => !prev)}
          className={`d-flex justify-content-between align-items-center ${styles.small__screen} ${styles.row}`}
        >
          <div className={`d-flex align-items-center  ${styles.left__row}`}>
            <RiMessage2Fill className={styles.icon} />
            <p className={styles.title}>Messages</p>
          </div>
          <IoIosArrowForward />
        </button>
        <button
          onClick={() => setShowNotifications((prev) => !prev)}
          className={`d-flex justify-content-between align-items-center ${styles.small__screen} ${styles.row}`}
        >
          <div className={`d-flex align-items-center  ${styles.left__row}`}>
            <IoMdNotifications className={styles.icon} />
            <p className={styles.title}>Notifications</p>
          </div>
          <IoIosArrowForward />
        </button>
        <button
          className={`d-flex justify-content-between align-items-center ${styles.row} `}
        >
          <div className={`d-flex align-items-center  ${styles.left__row}`}>
            <LogoutIcon />
            <p className={`${styles.title} ${styles.red__title}`}>Logout</p>
          </div>
        </button>
      </div>
    </DropdownMenu>
  );
}
