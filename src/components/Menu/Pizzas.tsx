import { collection, doc } from 'firebase/firestore'
import React from 'react'
import { firestore } from '../firebase/firebase'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/RootReducer'
import ItemBox from './ItemBox'
import { nanoid } from '@reduxjs/toolkit'


export default function Pizzas() {
  const vegElements:any  = []
  const nonVegElements:any = []
  const { pizzaData } = useSelector((state: RootState) => state.data)
 
  pizzaData.forEach((each) => {
    if(each.veg){
      vegElements.push(
        <ItemBox 
            key={nanoid()}
            name={each.name}
            price={each.price}
            isPizza = {each.isPizza}
            quantity = {each.quantity}
            img={each.img}
            desc={each.description}
            id={each.id}
        />
      )
    }else{
      nonVegElements.push(
        <ItemBox 
            key={nanoid()}
            name={each.name}
            price={each.price}
            isPizza = {each.isPizza}
            quantity = {each.quantity}
            img={each.img}
            desc={each.description}
            id={each.id}
        />
      )
    }
  })

  return (
    <div>
        <div className=''>
          <div className='y-flex mb-2'>
            <h3 className='checkout-header'>Veg Pizzas</h3>
            <div className='checkout-bar'></div>
          </div> 
          <div className='flex items-stretch justify-evenly w-full flex-wrap gap-y-6'>
            {vegElements}
          </div>
        </div>
        <div className=''>
          <div className='y-flex mb-2'>
            <h3 className='checkout-header'>Non Veg Pizzas</h3>
            <div className='checkout-bar'></div>
          </div> 
          <div className='flex items-stretch  justify-evenly w-full flex-wrap gap-y-6'>
            {nonVegElements}
          </div>
        </div>
       
    </div>
  )
}
