import React from 'react'

import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-start flex-row items-center mr-3"
        >
          <h4 className="font-poppins text-white xs:text-[40px] font-semibold text-[30px] xs:leading-[53px] leading-[43px] " >{stat.value}</h4 >
          <p className="font-poppins text-gradient uppercase ml-3 xs:text-[20px] font-normal text-[15px] xs:leading-[26px] leading-[21px]">{stat.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats