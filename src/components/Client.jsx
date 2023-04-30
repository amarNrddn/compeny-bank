import React from 'react'

import {clients} from '../constants'
import styles from '../style'

const Client = () => {
  return (
    <div className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex flex-wrap w-full`}>
        {clients.map((item) => (
          <div className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`} key={item.id}>
            <img src={item.logo} alt="" className='sm:w-[192px] w-[100px] object-contain' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Client