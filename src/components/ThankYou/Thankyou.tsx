import React from 'react'
import { motion } from 'framer-motion'

export default function Thankyou() {


  const pageMotion = {
    initial: {opacity: 0,},
    animate: {opacity:1, transition: {duration: 0.8}},
    exit: {opacity: 0, transition: { duration: 0.8}}
  }

  return (
    <motion.section className='heightLayout pb-8' initial="initial" animate="animate" exit="exit" variants={pageMotion}>
      <div className='layout'>
        <div className='border-b-2 border-headerColor mb-5'>
            <h2 className='header'>Order Placed</h2>
       </div>
       <p>Your yummy pizza will arrive at your doorstep soon! :) </p>
      </div>
    </motion.section>
  )
}
