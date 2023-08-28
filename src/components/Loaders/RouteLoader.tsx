import React from 'react'

const RouteLoader = () => {
  return (
    <div className='font-sans w-full h-screen flex flex-col items-center justify-center bg-loadingBody text-black text-2xl pb-28'>
    {/* pencil */}
     <div className='relative w-[18.75rem] h-10 origin-center rotate-[135deg] animate-pencil '>
      <div className='absolute left-0 z-40 top-2/4 -translate-y-2/4 h-2.5 w-2.5 rounded-[3.125rem] bg-pencilSec'></div>
      <div className='absolute left-0 top-2/4 -translate-y-2/4 clip-path-pencilCap bg-pencilPrimary z-50 w-[12%] h-full'></div>
      <div className='absolute left-[12%] top-0 h-full w-5 bg-pencilPrimary'></div>
      <div className='absolute left-[calc(12%+20px)] top-0 h-full w-[70%] bg-pencilSec'></div>
      <div className='absolute left-[calc(12%+70%+20px)] top-0 h-full w-[11%] rounded-tr-[0.3125rem] rounded-br-[0.3125rem] bg-pencilPrimary '></div>
     </div>
     {/* line */}
     <div className='relative top-20 right-[6.4375rem] h-2.5  rounded-[3.125rem] origin-center bg-pencilSec w-[1000px] scale-x-0 animate-line '></div>
     <h2 className='relative top-[9.375rem]'>Page Loading...Please Wait</h2>
    </div>
  )
}

export default RouteLoader