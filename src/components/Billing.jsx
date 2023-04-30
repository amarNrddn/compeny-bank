import React from 'react'

import {apple, google, bill} from '../assets'
import styles, {layout} from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse} >
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute top-0 z-[3] -left-1/2 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute top-0 z-[0] -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>

        <div className="flex flex-row flex-wrap mt-2">
            <img src={apple} alt="" className='w-[128px] h-[48px] object-contain cursor-pointer mr-5' />
            <img src={google} alt="" className='w-[128px] h-[48px] object-contain cursor-pointer mr-5' />
        </div>
      </div>
    </section >
  )
}

export default Billing