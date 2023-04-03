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
  return (
    <div className={`fixed top-[80px] left-[4%] z-[15] w-[92%] bg-white rounded-xl shadow-2xl pt-3 lg:max-w-[345px] lg:left-[65%] lg:top-[70px] ${isOpen ? 'block' : 'hidden'} `}>
      <div className=' px-5 border-b-2 border-boxbg pb-4 flex justify-between items-center'>
        <h3 className='font-bold text-secondaryText text-lg'>Cart</h3>
        <FontAwesomeIcon icon={faX} className=""  onClick={() => dispatch(toggleCartDisplay())}/>
      </div>
      {/* <EmptyCart /> */}
      <CartItems />
    </div>
  )
}
