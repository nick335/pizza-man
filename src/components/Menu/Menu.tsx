import React from 'react'
import PizzaBox from './ItemBox'
import { motion } from 'framer-motion'
import Desserts from './Desserts';
import { collection, doc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import { useFirestoreDocument, useFirestoreDocumentData } from '@react-query-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../store/Features/Data/DataSlice';
import Pizzas from './Pizzas';
import { RootState } from '../../store/RootReducer';
import { Data, PizzaData } from '../../store/Features/Data/DataSlice';
import { cartItems } from '../../store/Features/Cart/CartSlice';
import PizzaLoader from '../Loaders/PizzaLoader';

export default function Menu() {
  const dispatch = useDispatch()
  const cartPizzaData = useSelector((state: RootState) => state.cart.cartItems.pizzaData)
  const cartDessertData = useSelector((state: RootState) => state.cart.cartItems.dessertData)
  const collectionref = collection(firestore, "pizzaman-api")
  const docref = doc(collectionref, 'pizzaman-data')
  const pizzamanData = useFirestoreDocument(['pizzaman-api', 'pizzaman-data'], docref,{
    subscribe: false
  }, {
    onSuccess(snapshot) {
        const pizzaData = snapshot.data()?.pizzaData
        const dessertData:[] = snapshot.data()?.dessertData
        let updatedPizzaData = []
        let updatedDessertData = []

        // due to refecthing of data from serevr we have to check the cart for existing items and update our data slice
        if(cartPizzaData.length === 0){
          updatedPizzaData = pizzaData.map((each: PizzaData) => {
            return {
              ...each,
              quantity: 0
            }
          })
        }else{
          updatedPizzaData = pizzaData.map((each: PizzaData) => {
            cartPizzaData.forEach((item: cartItems) => {
              if(item.id === each.id){
                return{
                  ...each,
                  quantity: item.quantity
                }
              }else{
                return {
                  ...each,
                  quantity: 0
                }
              }
            })
          })
        }
        if(cartDessertData.length === 0){
          updatedDessertData = dessertData.map((each: Data) => {
            return {
              ...each,
              quantity: 0
            }
          })
        }else{
          updatedDessertData = dessertData.map((each: Data) => {
            cartDessertData.forEach((item: cartItems) => {
              if(item.id === each.id){
                return{
                  ...each,
                  quantity: item.quantity
                }
              }else{
                return {
                  ...each,
                  quantity: 0
                }
              }
            })
          })
        }
        dispatch(setData({updatedPizzaData, updatedDessertData}))
        
    },
  })

   const pageMotion = {
    initial: {opacity: 0, },
    animate: {opacity: 1, transition: {duration: 0.8}},
    exit: {opacity: 0, transition: {duration: 0.8}}
  };

  return (
    <motion.section className='heightLayout' initial="initial" animate="animate" exit="exit" variants={pageMotion}>
      <div className='layout'>
        <div className='border-b-2 border-headerColor'>
          <h2 className='header'>Menu</h2>
        </div>
        <div className='my-6'>
          {
             pizzamanData.isLoading ? <PizzaLoader layout={false} /> : pizzamanData.isError ? <div>{pizzamanData.error.message}</div> : 
             <>
              <Pizzas />
              <Desserts />
             </>
          }
        </div>
      </div>
    </motion.section>
  )
}
