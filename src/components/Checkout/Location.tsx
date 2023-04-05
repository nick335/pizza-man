import React from 'react'
import AddressForm from './AddressForm'
import AddressSummary from './AddressSummary'
import EmptyAddress from './EmptyAddress'

export default function Location() {
  return (
    <div className='mb-8'>
      <div className='y-flex mb-1'>
        <h3 className='checkout-header'>Location</h3>
        <div className='checkout-bar'></div>
      </div>
      <div>
        <strong>Address: </strong>
        {/* <EmptyAddress /> */}
        {/* <AddressForm /> */}
        <AddressSummary />
      </div>
    </div>
  )
}
