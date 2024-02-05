import React from 'react'
import { motion } from 'framer-motion'
import SEOPAGEHeader from '../SEO/Header'

export default function Thankyou() {


  const pageMotion = {
    initial: {opacity: 0,},
    animate: {opacity:1, transition: {duration: 0.8}},
    exit: {opacity: 0, transition: { duration: 0.8}}
  }

  return (
    <motion.section className='heightLayout pb-8' initial="initial" animate="animate" exit="exit" variants={pageMotion}>
      <SEOPAGEHeader 
        page='Thankyou'
        href='https://pizza-man-nine.vercel.app/thankyou'
      />
      <div className='layout'>
        <div className='border-b-2 border-headerColor mb-5'>
            <h2 className='header'>Order Placed</h2>
       </div>
       <p className='font-sans text-3xl font-light md:text-4xl'>Your yummy pizza will arrive at your doorstep soon! :) </p>
      </div>
    </motion.section>
  )
}
