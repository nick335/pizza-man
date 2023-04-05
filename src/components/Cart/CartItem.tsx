import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { addQtn, reduceQtn, deleteQtn } from '../../store/Features/Data/DataSlice'
import { increaseCartItemQtn, decreaseCartItemQtn, removeCartItem } from '../../store/Features/Cart/CartSlice'
interface cartProps {
  name:string
  price:number
  total:number
  quantity:number
  id:number
  isPizza:boolean
}

export default function CartItem({name, price, total, quantity, id, isPizza}: cartProps) {
  const dispatch = useDispatch()

  function handleAdd(){
    dispatch(addQtn({id, isPizza}))
    dispatch(increaseCartItemQtn({id, isPizza, quantity, price}))
  }
  function handleRemove(){
    dispatch(reduceQtn({id, isPizza}))
    dispatch(decreaseCartItemQtn({id, isPizza, quantity, price}))
  }
  function handleDelete(){
    dispatch(deleteQtn({id, isPizza}))
    dispatch(removeCartItem({id, isPizza}))
  }
  return (
    <div className='px-4 pt-5 pb-3 border-b border-headerColor'>
      <div className='flex justify-between items-start '>
        {/* <img src={product1} alt='product' className='
        w-14 h-14 rounded-lg'/> */}
        <div className='b'>
          <h4 className='text-headerColor font-bold text-base font-Roboto '>{name}</h4>
          <p></p>
          <p className='text-primaryText'>${price}.00 x {quantity} <span className='text-secondaryText font-bold ml-1.5'>${total}</span></p>
        </div>
        <div className=' flex flex-col items-center gap-1'>
        <FontAwesomeIcon icon={faTrash} className="text-red-500 cursor-pointer lg:text-primaryText lg:hover:text-red-500" onClick={handleDelete} />
        <div className=' bg-box flex justify-between items-center  font-bold   rounded-lg w-[70px]' >
            <span className=' text-2xl font-bold text-secondaryHighlight lg:cursor-pointer' onClick={handleRemove} >-</span> { quantity }<span className=' text-2xl font-bold text-secondaryHighlight lg:cursor-pointer' onClick={handleAdd} >+</span>
          </div>
        </div>
       
      </div>
    </div>
  )
}
