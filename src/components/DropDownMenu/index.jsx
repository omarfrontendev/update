import React from "react";
import styles from "./.module.scss";
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function DropdownMenu({ alignedEnd, margin, children, notMenu, onClose }) {
  return (
    <div
      style={{ marginLeft: margin || "-124px" }}
      class={`${notMenu ? styles.not__menu : 'dropdown-menu'} ${alignedEnd && "dropdown-menu-end"} ${
        styles.dropdown__menu__wrapper
      }`}
    >
      {notMenu && <button onClick={() => onClose(prev => !prev)} className={styles.close__btn}>
        <AiOutlineCloseCircle />
      </button>}
      <div
        className={`${styles.menu__content__wrapper} ${
          alignedEnd && styles.righted__menu
        }`}
      >
        {children}
      </div>
    </div>
  );
}
