import React from 'react'
import styles from '../style'

import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} w-[100%] h-[100%] rounded-full bg-primary flex-col`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins text-[18px] font-medium leading-[23px]'>
            <span className='text-gradient mr-2'>Get</span>
          </p>
          <img src={arrowUp} alt="" className='w-[23px] h-[23px] obje' />
        </div>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins text-[18px] font-medium leading-[23px]'>
            <span className='text-gradient'>Started</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GetStarted