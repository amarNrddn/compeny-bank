import React from 'react'

import { logo } from '../assets'
import styles from '../style'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row mb-8 w-full flex-col`}>

        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="" className='w-[266px] h-[72px] object-contain' />
          <p className={`${styles.paragraph} max-w-[310px] mt-4 `}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className="flex-[1.5] flex w-full flex-row justify-between flex-wrap md:mt-0 mt-10 ">
          {footerLinks.map((footerLink, i) => (
            <div
              key={i}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className='font-poppins font-medium text-[18px] text-white leading-[27px] '>{footerLink.title}</h4>

              <ul className='list-none mt-4'>
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins text-[16px] text-dimWhite leading-[24px] font-normal hover:text-secondary cursor-pointer  ${index !== footerLink.links.length - 1 ? "mb-4" : "mr-0"} `}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className='font-poppins font-medium text-[18px] text-white leading-[27px]'>2021 HooBank. All Rights Reserved.</p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((item, index) => (
            <img
              key={item.id}
              src={item.icon}
              alt=""
              className={`w-[21px] h-[21px] object-contain ${index !== item.length - 1 ? "mr-4" : "mr-0"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer