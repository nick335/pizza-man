import React from 'react'
import PizzaBox from './ItemBox'
import { motion } from 'framer-motion'
import Desserts from './Desserts';
import { collection, doc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import { useFirestoreDocument, useFirestoreDocumentData } from '@react-query-firebase/firestore';
import { useDispatch } from 'react-redux';
import { setData } from '../../store/Features/Data/DataSlice';
import Pizzas from './Pizzas';
export default function Menu() {
  const dispatch = useDispatch()
  const collectionref = collection(firestore, "pizzaman-api")
  const docref = doc(collectionref, 'pizzaman-data')
  const pizzamanData = useFirestoreDocument(['pizzaman-api', 'pizzaman-data'], docref,{}, {
    onSuccess(snapshot) {
        console.log('done fetching')
        console.log(snapshot)
        const pizzaData = snapshot.data()?.pizzaData
        console.log(pizzaData)
        const dessertData:[] = snapshot.data()?.dessertData
        dispatch(setData({pizzaData, dessertData}))
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
             pizzamanData.isLoading ? <div>loading....</div> : pizzamanData.isError ? <div>error....</div> : 
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
