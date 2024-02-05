import React from 'react'
import logo from '../../../assets/pizzman-hero.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOPAGEHeader from '../../SEO/Header';

export default function Hero() {

  const pageMotion = {
    initial: {opacity: 0, },
    animate: {opacity: 1, transition: {duration: 0.8}},
    exit: {opacity: 0, transition: {duration: 0.8}}
  };

  return (
    <motion.section className="h-[calc(100dvh-56px)] after:absolute relative after:top-0 after:w-full after:h-full after:bg-black after:bg-opacity-70 bg-[url('./assets/pizzman-hero-bg.png')] bg-center bg-cover" initial="initial" animate="animate" exit="exit" variants={pageMotion}>
      <SEOPAGEHeader 
        page='home'
        href='https://pizza-man-nine.vercel.app'
      />
      <div className='layout z-[9] relative pt-10'>
        <img src={logo} alt="logo" className=' w-[200px] h-[100px] lg:w-[400px] lg:h-[200px] object-cover mt-12 p-0 -ml-2.5 lg:-ml-8 block sm:w-[300px] sm:h-[150px]'/>
        <h2 className='font-medium text-lg sm:text-[28px] lg:text-[33px] text-white mt-2 mb-2'>Pizza Man Online Ordering</h2>
        <h3 className='font-thin text-[32px] sm:text-[44px] lg:text-[50px] text-white leading-[1.1] lg:my-1'>Your Yummy Pizza Delivered Fast & Fresh</h3>
        <button className='btn mt-4 transition-all duration-75 ease-in-out  '><Link to="/menu">Order Now</Link></button>
      </div>
    </motion.section>
  )
}
