import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'
// import { RootState } from '../../../store/RootReducer'
import { RootState } from '../../store/RootReducer'
import ItemBox from './ItemBox'

export default function Desserts() {
  const { DessertData } = useSelector((state: RootState) => state.data)
  const element = DessertData.map((each) => {
    return <ItemBox 
                key={nanoid()}
                name={each.name}
                price={each.price}
                id={each.id}
                isPizza={each.isPizza}
                quantity={each.quantity}
                img = {each.img}
                desc={each.description}
            />
  })
  return (
      <div>
        <div className='y-flex mb-1'>
          <h3 className='checkout-header'>Dessert</h3>
          <div className='checkout-bar'></div>
        </div>
        <div className='flex  justify-evenly w-full flex-wrap gap-y-6'>
          {element}
        </div>
      </div>
      
    )
}
