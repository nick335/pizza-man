import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className='text-center font-mono my-auto  flex w-screen h-screen'>
      <div className='m-auto'>
        <h1 className="font-black lg:text-[230px] text-[112px] text bg-[url('https://colorlib.com/etc/404/colorlib-error-404-10/img/bg.jpg')] bg-clip-text text-transparent bg-center bg-cover p-0 leading-none ">Oops!</h1>
        <h3 className='font-bold text-2xl pt-2'>404 - Page Not Found</h3>
        <p className='max-w-[410px] mx-auto font-normal text-sm pt-3'>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <button className='mt-4'><Link to='/'>Go home</Link></button>
      </div>
      
    </div>
  )
}