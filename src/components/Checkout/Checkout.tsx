import React from 'react'
import ModeofPayment from './ModeofPayment'
import Location from './Location'
import { motion } from 'framer-motion'

export default function Checkout() {

  const pageMotion = {
    initial: {opacity: 0, },
    animate: {opacity: 1, transition: {duration: 0.8}},
    exit: {opacity: 0, transition: {duration: 0.8}}
  };

  return (
    <motion.section className='heightLayout pb-20'  initial="initial" animate="animate" exit="exit" variants={pageMotion}>
      <div className='layout'>
        <div className='border-b-2 border-headerColor mb-5'>
          <h2 className='header'>checkout</h2>
        </div>
        <Location />
        <ModeofPayment />
      </div>
    </motion.section>
  )
}
