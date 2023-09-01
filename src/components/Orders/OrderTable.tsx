import React from 'react'
import { orderslist } from '../../store/Features/User/UserSlice'
import { nanoid } from '@reduxjs/toolkit'

interface props {
  orders: Array<orderslist>
}

export default function OrderTable({orders}: props) {
  var tableElements = []
  tableElements = orders.map((each, idx) => {
    return <tr className='table-border' key={nanoid()} >
              <th className='table-items' scope='row'>{idx + 1}</th>
              <td className='table-items'>{each.name}</td>
              <td className='table-items'>{each.price}</td>
              <td className='table-items'>{each.quantity}</td>
              <td className='table-items'>{each.total}</td>
            </tr>
  })
  return (
    <table className='w-full max-w-[1110px] mt-2 table border-spacing-[20px] '>
      <thead>
        <tr className='table-border border-headerColor'>
          <th className='table-header' scope='col'>#</th>
          <th className='table-header' scope='col'>Item</th>
          <th className='table-header' scope='col'>Price</th>
          <th className='table-header' scope='col'>Quantity</th>
          <th className='table-header' scope='col'>Total</th>
        </tr>
      </thead>
      <tbody>
        {tableElements}
      </tbody>
      
    </table>
  )
}
