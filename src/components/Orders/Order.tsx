import React from 'react'
import OrderTable from './OrderTable'

export default function Order() {
  return (
    <div className='border-y-[0.5px] border-headerColor py-4'>
      <div className=''>
        <strong>Time:<span className='ml-1 font-normal'>26th Friday</span></strong>
        <div className='mt-1'>
          <strong>Address:</strong>
          <p className='p-normal'>28 adedoyin</p>
          <p className='p-normal'>Surulere, Lagos, Nigeria</p>
          <p className='p-normal'>PIN:<span className='ml-1.5'>83838384848</span></p>
        </div>
      </div>
      <div>
        <OrderTable />
      </div>
      <div className='mt-3'>
        <strong>Total Price:<span className='ml-1 font-normal'>$6566</span></strong>
      </div>
    </div>
  )
}
