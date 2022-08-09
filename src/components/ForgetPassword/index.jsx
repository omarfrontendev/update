import React, { useState } from 'react'
import Input from '../Input'
import styles from './.module.scss'

export default function ForgetPassword() {

  const [data, setData] = useState({});

  return (
    <form onSubmit={e => e.preventDefault()} className={`${styles.forget__pass__content} d-flex flex-column`}>
      <Input
        type='email'
        value={data['user__email'] || ''}
        placeholder='Email Address'
        setValue={setData}
        id='user__email'
        data={data}
      />
      <button className={styles.submit__btn}>Send Reset Password</button>
    </form>
  )
}
