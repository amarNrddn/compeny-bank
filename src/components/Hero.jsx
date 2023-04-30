import React from 'react'

import styles from '../style'
import { robot, discount } from '../assets'
import GetStarted from '../components/GetStarted'

const Hero = () => {
  return (
    <section id="Home" className={` flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex items-center flex-row py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2 `}>
            <span className='text-white'> 20% </span>
            Discount For
            <span className="text-white"> 1 Mounth </span>
            Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white leading-[75px] ss:leading-[100px]'>
            The Next <br className='ss:block hidden' />
            <span className='text-gradient'>Generation</span> {" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white leading-[68px] ss:leading-[100px] w-full'>
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
          We examine annual percentage rates, annual fees.</p>
      </div>

      <div className={`relative ${styles.flexCenter} md:my-0 my-10 flex flex-1`}>
        <img src={robot} alt="" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] top-0 bottom-40 white__gradient ' />
        <div className='absolute z-[0] w-[50%] h-[50%] top-0 bottom-20 blue__gradient' />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero