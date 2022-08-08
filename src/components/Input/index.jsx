import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import styles from './.module.scss'

export default function Input({ type, placeholder, value, setValue, icon, id, data }) {

  const [showPasord, setShowPassword] = useState(false);

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
        onChange={e => {
          setValue({
            ...data,
            [id]: e.target.value
          })
        }}
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
