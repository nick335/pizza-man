import React from 'react'
import Order from './Order'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/RootReducer';
import { collection, doc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import { useFirestoreDocument } from '@react-query-firebase/firestore';



export default function Orders() {
  const [orderHistory, setOrderHistory] = React.useState([])
  const { uid } = useSelector((state: RootState) => state.user.auth)
  const collectionRef = collection(firestore, "users")
  const ref = doc(collectionRef, uid)

  const userOrders = useFirestoreDocument(['users', uid], ref, {}, {
    onSuccess(snapshot) {
      const userData:any = snapshot.data()?.orderHistory
      console.log(userData)
      setOrderHistory(userData)
    },
    onError(error){
      console.log(error.message)
    },
  })

  const pageMotion = {
    initial: {opacity: 0, },
    animate: {opacity: 1, transition: {duration: 0.8}},
    exit: {opacity: 0, transition: {duration: 0.8}}
  };
  if(userOrders.error) return <div>error</div>
  if (userOrders.isLoading) return <div>loading</div>
  return (
    <motion.section className='heightLayout pb-8' initial="initial" animate="animate" exit="exit" variants={pageMotion}>
      <div className='layout'>
        <div className='border-b-2 border-headerColor mb-5'>
          <h2 className='header'>Orders</h2>
        </div>
        <Order />
      </div>
    </motion.section>
  )
}
