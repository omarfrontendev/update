import React, { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { EmailIcon, PasswordIcon, UserAdressIcon, UserMobileIcon, UserNameIcon } from '../../UI/icons/icons';
import styles from './.module.scss'

export default function Input({ type, placeholder, value, setValue, id, data }) {

  const [showPasord, setShowPassword] = useState(false);

  const icon = 
  id ===  'user__name' ? <UserNameIcon /> :
  id === 'user__email' ? <EmailIcon /> :
  id === 'user__mobile_Number' ? <UserMobileIcon /> : 
  id === 'user__Address' ? <UserAdressIcon /> : <PasswordIcon />;


  return (
    <div className={`${styles.input__control} d-flex align-items-center`}>
      <span className={styles.input__icon}>
        {icon}
      </span> 
      <input 
        className={styles.input} 
        placeholder={placeholder} 
        type={showPasord ? 'text' : type}
        value={value} 
        onChange={e => setValue({
          ...data,
          [id]: e.target.value
        })}
      />
      {type === 'password' && 
      <button 
        className={styles.show__pass__btn} 
        onClick={() => setShowPassword(prev => !prev)}
      >
        {!showPasord ? <AiOutlineEye className={styles.pass__icon} /> : <AiOutlineEyeInvisible className={styles.pass__icon} />}
      </button>}
    </div>
  )
}
