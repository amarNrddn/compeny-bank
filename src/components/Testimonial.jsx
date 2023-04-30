import React from 'react'

import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedBackCard'

const Testimonial = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      {/* TODO */}
      <div className='absolute w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ">
        <h4 className={styles.heading2}>
          What people are <br className='sm:block hidden' /> saying about us
        </h4>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-full sm:justify-start feedback-container relative z-[1] ">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default Testimonial