import React from 'react'
import { animate, motion } from 'framer-motion'
import { addQtn, reduceQtn} from '../../store/Features/Data/DataSlice'
import { useDispatch } from 'react-redux'
import { increaseCartItemQtn, decreaseCartItemQtn } from '../../store/Features/Cart/CartSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/RootReducer'
import { resetOrderState } from '../../store/Features/User/UserSlice'


interface BoxProps {
  name: string
  desc: string
  img: string
  price: number
  quantity: number
  id:number
  isPizza:boolean
}


export default function ItemBox({name, price, id, isPizza, quantity, img, desc}: BoxProps) {
  const dispatch = useDispatch()
  const { orderSuccessful } = useSelector((state: RootState) => state.user)

  // add items to cart state and items display state 
  function handleAdd(id:number, isPizza:boolean){
    if(orderSuccessful){
      dispatch(resetOrderState())
    }

    dispatch(addQtn({id, isPizza}))
    dispatch(increaseCartItemQtn({id, isPizza, quantity, price}))
  }
  // remove items from cart state and items display state
  function handleRemove(){
    dispatch(reduceQtn({id, isPizza}))
    dispatch(decreaseCartItemQtn({id, isPizza, quantity, price}))
  }

 
  return (
    <div className='max-w-[200px] bg-NavBg rounded-lg font-Roboto flex-col h-fit-content'>
      <div className='w-[200px] h-[150px] overflow-hidden rounded-t-lg'>
        <motion.img src={img} alt="pizzaimg" className='w-[200px] h-[150px] object-cover rounded-t-lg cursor-pointer' whileHover={{scale: 1.2, transition: {duration: 0.5, type:"spring", stiffness: 100}}} />
      </div>
      <div className='px-4 pt-0.5 font-Roboto flex-col'>
        <strong className=' font-normal text-base text-headerColor font-sans leading-[0px]'>{name}</strong>
        <p className='text-headerColor font-thin text-[13px] italic leading-[15px] pt-[0.7px] min-h-[70px]'>{desc}</p>
        <div className='flex items-center justify-between mt-3 pb-2.5'>
          <p className='font-light italic text-sm'>${price}</p>
          <div>
            <button className='btnBox' onClick={() => handleAdd(id, isPizza)}>+</button>
            <span className='mx-2'>{ quantity }</span>
            <button className='btnBox' onClick = {handleRemove}>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}
