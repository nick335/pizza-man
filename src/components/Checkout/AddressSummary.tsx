import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/RootReducer'

interface props {
  addAddress: () => void
}

export default function AddressSummary({addAddress} : props) {

  const {  number, city, state, country, pinCode, street } = useSelector((state: RootState) => state.user.data.address)

  return (
    <div>
        <div className=''>
          <p className='p-normal'>{number} {street}</p>
          <p className='p-normal'>{city}, {state}, {country}</p>
          <p className='p-normal'>PIN:<span className='ml-1.5'>{pinCode}</span></p>
        </div>
        <div className='mt-5'>
          <button className='btn' onClick={addAddress}>Update Address</button>
        </div>
    </div>
  )
}
