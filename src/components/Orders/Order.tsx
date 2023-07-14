import React from 'react'
import OrderTable from './OrderTable'
import { orderDate, orderslist, userAddress } from '../../store/Features/User/UserSlice'

interface props {
  address: userAddress
  date: orderDate
  orders: Array<orderslist>
  
}

export default function Order({address, date, orders}: props) {
  var total = 0
  orders.forEach((each) => {
    total = each.total + total
  })
  return (
    <div className='border-y-[0.5px] border-headerColor py-4'>
      <div className=''>
        <strong>Time:<span className='ml-1 font-normal'>{date.day}th {date.month} {date.year}</span></strong>
        <div className='mt-1'>
          <strong>Address:</strong>
          <p className='p-normal'>{address.number} {address.street}</p>
          <p className='p-normal'>{address.city}, {address.state}, {address.country}</p>
          <p className='p-normal'>PIN:<span className='ml-1.5'>{address.pinCode}</span></p>
        </div>
      </div>
      <div>
        <OrderTable 
            orders={orders}
        />
      </div>
      <div className='mt-3'>
        <strong>Total Price:<span className='ml-1 font-normal'>${total}</span></strong>
      </div>
    </div>
  )
}
