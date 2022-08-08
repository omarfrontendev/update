import React from 'react'
import { LogoutIcon, OrderIcon, SettingIcon } from '../../UI/icons/icons'
import { IoIosArrowForward } from 'react-icons/io'
import DropDownMenu from '../DropDownMenu/'
import styles from './.module.scss'

export default function UserDropdown({ state, setState, id }) {
  return (
    <DropDownMenu 
      state={state}
      setState={setState}
      id={id}
      userDropdown={'user'}
    >
      <div className={`d-flex flex-column ${styles.user__dropdown}`}>
        <button className={`d-flex justify-content-between align-items-center ${styles.row}`}>
          <div className={`d-flex align-items-center  ${styles.left__row}`}>
            <OrderIcon />
            <p className={styles.title}>My Orders</p>
          </div>
          <IoIosArrowForward />
        </button>
        <button className={`d-flex justify-content-between align-items-center ${styles.row}`}>
          <div className={`d-flex align-items-center  ${styles.left__row}`}>
            <SettingIcon />
            <p className={styles.title}>Change Password</p>
          </div>
          <IoIosArrowForward />
        </button>
        <button className={`d-flex justify-content-between align-items-center ${styles.row} `}>
          <div className={`d-flex align-items-center  ${styles.left__row}`}>
            <LogoutIcon />
            <p className={`${styles.title} ${styles.red__title}`}>Logout</p>
          </div>
        </button>
      </div>
    </DropDownMenu>
  )
}
