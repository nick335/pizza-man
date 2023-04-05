import React from 'react'

export default function AddressSummary() {
  return (
    <div>
        <div className=''>
          <p className='p-normal'>28 adedoyin</p>
          <p className='p-normal'>Surulere, Lagos, Nigeria</p>
          <p className='p-normal'>PIN:<span className='ml-1.5'>83838384848</span></p>
        </div>
        <div className='mt-5'>
          <button className='btn'>Update Address</button>
        </div>
    </div>
  )
}
