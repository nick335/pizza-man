import React from 'react'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/RootReducer'
import { nanoid } from '@reduxjs/toolkit'
import { resetAllQtn } from '../../store/Features/Data/DataSlice'
import { clearCart } from '../../store/Features/Cart/CartSlice'
import { toggleCartDisplay } from '../../store/Features/Cart/CartSlice'
// import { cartItems } from '../../store/Features/Cart/CartSlice'
import { useNavigate } from 'react-router-dom'


export default function CartItems() {
  const { cartItems } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pizzaData, DessertData } = useSelector((state: RootState) => state.data)
  const elements:any = []
  let total:number = 0
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
        total = each.total + total
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
        total = each.total + total
      }
    })
  })

  function handleClearCart(){
    const pizzaData = cartItems.pizzaData
    const dessertData = cartItems.dessertData
    dispatch(resetAllQtn({pizzaData, dessertData}))
    dispatch(clearCart())
  }

  function toCheckout(){
    navigate('/checkout')
    dispatch(toggleCartDisplay())
  }
  return (
    <div>
        <div className='max-h-[60vh] overflow-y-scroll'>
          {elements}
        </div>  
      <div className='pl-4 mt-2'>
        <h3 className='font-bold text-headerColor text-lg'>Total: ${total} </h3>
      </div>
      <div className='my-4  w-full flexCenter gap-4'>
        <button className='btn font-Roboto' onClick={toCheckout}>To Check Out</button>
        <button className='btn bg-youtube font-Roboto' onClick={handleClearCart}>Clear Cart</button>
      </div>
      
    </div>
  )
}
