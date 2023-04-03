import React from 'react'

export default function EmptyAddress() {
  return (
    <div>
      <div className='bg-errorBg my-7 p-4  text-errorColor rounded-md'>
        <strong>No Address Found</strong>
      </div>
      <button className='btn'>Add Address</button>
    </div>
  )
}
