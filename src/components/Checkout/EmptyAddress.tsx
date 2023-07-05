import React from 'react'

interface props {
  addAddress: () => void
}

export default function EmptyAddress({addAddress}: props) {
  return (
    <div>
      <div className='bg-errorBg my-7 p-4  text-errorColor rounded-md'>
        <strong>No Address Found</strong>
      </div>
      <button className='btn mb-4' onClick={addAddress}>Add Address</button>
    </div>
  )
}
