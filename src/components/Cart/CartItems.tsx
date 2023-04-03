import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/RootReducer'
import { nanoid } from '@reduxjs/toolkit'


export default function CartItems() {
  const { cartItems } = useSelector((state: RootState) => state.cart)
  const { pizzaData, DessertData } = useSelector((state: RootState) => state.data)
  const elements:any = []
  cartItems.pizzaData.forEach((each) => {
    pizzaData.forEach((item) => {
      if(each.id === item.id){
        elements.push(
          <CartItem 
                key={nanoid()}
                name={item.name}
                total={each.total}
                quantity={item.quantity}
                price={each.price}
                id={each.id}
                isPizza={each.isPizza}
          />
        )
      }
    })
  })
  cartItems.dessertData.forEach((each) => {
    DessertData.forEach((item) => {
      if(each.id === item.id){
        elements.push(
          <CartItem 
                key={nanoid()}
                name={item.name}
                total={each.total}
                quantity={item.quantity}
                price={each.price}
                id={each.id}
                isPizza={each.isPizza}
          />
        )
      }
    })
  })
  return (
    <div className=''>
        {elements}
      <div className='pl-4 mt-2'>
        <h3 className='font-bold text-headerColor text-lg'>Total: </h3>
      </div>
      <div className='my-4  w-full flexCenter gap-4'>
        <button className='btn font-Roboto'>To Check Out</button>
        <button className='btn bg-youtube font-Roboto'>Clear Cart</button>
      </div>
      
    </div>
  )
}
