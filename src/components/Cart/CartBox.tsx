import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import EmptyCart from './EmptyCart'
import CartItems from './CartItems'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/RootReducer'
import { toggleCartDisplay } from '../../store/Features/Cart/CartSlice'


export default function CartBox() {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootState) => state.cart.cartDisplay)
  const { pizzaData, dessertData } = useSelector((state: RootState) => state.cart.cartItems)
  const itemQtn:number = pizzaData.length + dessertData.length
  return (
    <div className={`fixed top-[80px] left-[4%] z-[7] w-[92%] bg-white rounded-xl shadow-2xl pt-3 xs:max-w-[345px] xs:left-[25%] sm:left-[46%] md:left-[52%] ssm:left-[30%] xssm:left-[38%] xmd:left-[58%] lg:left-[65%] lg:top-[70px] ${isOpen ? 'block' : 'hidden'} `}>
      <div className=' px-5 border-b-2 border-boxbg pb-4 flex justify-between items-center'>
        <h3 className='font-bold text-secondaryText text-lg'>Cart</h3>
        <FontAwesomeIcon icon={faX} className=""  onClick={() => dispatch(toggleCartDisplay())}/>
      </div>
      {
        itemQtn === 0 ? <EmptyCart /> : <CartItems />
      }
    </div>
  )
}
