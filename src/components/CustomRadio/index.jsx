import React, { useState } from 'react'

import styles from './.module.scss'

export default function CustomRadio() {

  const [checked, setChecked] = useState('')

  return (
    <>
    <div className={`${styles.radio__container} d-flex align-item-center justify-content-center`}>
      <input checked={checked === 'Vegetarian'} onChange={e => setChecked(e.target.value)} className={`${styles.input} d-none`} type="radio" name='choose' value='Vegetarian' id='Vegetarian' />
      <div onClick={() => setChecked('Vegetarian')} className={`${styles.input__check} ${checked === 'Vegetarian' ? styles.active : ''}`}></div>
      <label className={styles.label} htmlFor="Vegetarian">Vegetarian</label>
    </div>
    {/* <div className={`${styles.radio__container} d-flex align-item-center justify-content-center`}>
      <input checked={checked === 'op1'} onChange={e => setChecked(e.target.value)} className={`${styles.input} d-none`} type="radio" name='choose' value='op1' id='op1' />
      <div onClick={() => setChecked('op1')} className={`${styles.input__check} ${checked === 'op1' ? styles.active : ''}`}></div>
      <label className={styles.label} htmlFor="op1">op1</label>
    </div> */}
    </>
  )
}
