import React from 'react'

import { quotes } from '../assets'

const FeedBackCard = ({ content, name, title, img }) => {
  return (
    <div className='flex justify-between flex-col px-12 py-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>

      <img src={quotes} alt="" className='w-[42px] h-[27px] object-contain' />
      <p className={`font-poppins text-normal text-white text-[18px] leading-[32px] my-10`}>{content}</p>

      <div className="flex flex-row">
        <img src={img} alt="" className='w-[48px] h-[48px] rounded-full' />

        <div className="flex flex-col">
          <h4 className="font-poppins text-semibold text-white text-[20px] ml-4 leading-[32px] ">{name}</h4>
          <p className="font-poppins text-normal text-dimWhite text-[16px] ml-4 leading-[24px] ">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedBackCard