import React from 'react'

export default function OrderTable() {
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
        <tr className='table-border'>
          <th className='table-items' scope='row'>1</th>
          <td className='table-items'>Non veg supreme</td>
          <td className='table-items'>570</td>
          <td className='table-items'>3</td>
          <td className='table-items'>1110</td>
        </tr>
        <tr className='table-border'>
          <th className='table-items' scope='row'>1</th>
          <td className='table-items'>Non veg supreme</td>
          <td className='table-items'>570</td>
          <td className='table-items'>3</td>
          <td className='table-items'>1110</td>
        </tr>
        <tr className='table-border'>
          <th className='table-items' scope='row'>1</th>
          <td className='table-items'>Non veg supreme</td>
          <td className='table-items'>570</td>
          <td className='table-items'>3</td>
          <td className='table-items'>1110</td>
        </tr>
        <tr className='table-border'>
          <th className='table-items' scope='row'>1</th>
          <td className='table-items'>Non veg supreme</td>
          <td className='table-items'>570</td>
          <td className='table-items'>3</td>
          <td className='table-items'>1110</td>
        </tr>
      </tbody>
      
    </table>
  )
}
