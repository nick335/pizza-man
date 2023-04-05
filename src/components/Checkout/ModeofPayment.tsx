import React from 'react'

export default function ModeofPayment() {
  return (
    <div>
      <div className='y-flex mb-5'>
        <h3 className='checkout-header'>Mode of Payment</h3>
        <div className='checkout-bar'></div>
      </div>
      {/* radios */}
      <div className='y-flex gap-3 mb-2'>
        <input className='h-[1.25em] w-[1.25em] transition-colors ease-in-out duration-150 cursor-pointer' type="radio" name='ModeofPayment'  required/>
        <label className='p-normal text-headerColor'>Cash on Delivery</label>
      </div>
      <div className='y-flex gap-3 mb-2'>
        <input className='disabled-radio' type="radio" name='ModeofPayment'  disabled/>
        <label className='p-normal text-headerColor opacity-50 bg-white'>Wallet</label>
      </div>
      <div className='y-flex gap-3 mb-2'>
        <input className='disabled-radio' type="radio" name='ModeofPayment'  disabled/>
        <label className='p-normal text-headerColor opacity-50 bg-white'>Credit / Debit Card</label>
      </div>
      <div className='y-flex gap-3 mb-2'>
        <input className='disabled-radio' type="radio" name='ModeofPayment'  disabled/>
        <label className='p-normal text-headerColor opacity-50 bg-white'>Net Banking</label>
      </div>
      <button className='btn mt-3'>Place Order</button>
    </div>
  )
}
