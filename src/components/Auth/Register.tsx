import React from 'react'
import { Link } from 'react-router-dom'
import google from '../../assets/google.svg'
import { motion } from 'framer-motion'


export default function Register() {
  const pageMotion = {
    initial: {opacity: 0, },
    animate: {opacity: 1, transition: {duration: 0.8}},
    exit: {opacity: 0, transition: {duration: 0.8}}
  };
  
  return (
    <motion.section className='heightLayout' initial="initial" animate="animate" exit="exit" variants={pageMotion}>
      <div className='layout'>
        <div className='border-b-2 border-headerColor'>
          <h2 className='header'>Login</h2>
        </div>
        <div className='mt-1'>
          <div>
            <input type="email" placeholder='Email' className="input" />
          </div>
          <div>
            <input type="password" placeholder='password' className="input" />
          </div>
          <div>
            <input type="password" placeholder='confirm password' className="input" />
          </div>
        </div>
        <div className='pt-2 font-bold text-base text-headerColor font-sans pb-24'>
          <p className='pl-1'>Already registered<span className='text-registerLink underline pl-1'><Link to="/register">Login</Link></span></p>
          <button className='btn mt-2.5'>Register</button>
          <div className='flexCenter flex-col mt-2 gap-1'>
            <strong className='uppercase font-semibold'>or</strong>
            <div className='flex items-center w-[220px] bg-white shadow-lg py-3 pl-4 gap-3'>
              <img src={google} alt='google_logo' className='google'/>
              <strong className='text-goggle text-sm font-medium '>Sign in With Google</strong>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
