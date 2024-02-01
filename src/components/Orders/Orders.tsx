import React from 'react'
import Order from './Order'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/RootReducer';
import { collection, doc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import { useFirestoreDocument } from '@react-query-firebase/firestore';
import { setHistoryData, userOrderHistory } from '../../store/Features/User/UserSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import PizzaLoader from '../Loaders/PizzaLoader';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-hot-toast';



export default function Orders() {
  const dispatch = useDispatch()
  const { uid } = useSelector((state: RootState) => state.user.auth)
  const { history } = useSelector((state: RootState) => state.user)
// user firebase refrence
  const collectionRef = collection(firestore, "users")
  const ref = doc(collectionRef, uid)
 // getting user orders date from orders store
  var orderElement = []
  const reversedHistory = [...history].reverse();
  orderElement = reversedHistory.map((each) => {
    return <Order 
            address={each.address}
            date={each.date}
            orders={each.orders}
            key={nanoid()}
          />
  })
// getting user orders from firebase database 
  const userOrders = useFirestoreDocument(['users', uid], ref, {}, {
    onSuccess(snapshot) {
      const orderHistory:Array<userOrderHistory> = snapshot.data()?.orderHistory
      dispatch(setHistoryData({orderHistory}))
    },
    onError(error){
      toast.error(error.message, {
        duration: 8000,
        position: 'top-right',
      })
    },
  })

  const pageMotion = {
    initial: {opacity: 0, },
    animate: {opacity: 1, transition: {duration: 0.8}},
    exit: {opacity: 0, transition: {duration: 0.8}}
  };

  return (
    <motion.section className='heightLayout pb-8' initial="initial" animate="animate" exit="exit" variants={pageMotion}>
      <div className='layout'>
        <div className='border-b-2 border-headerColor mb-5'>
          <h2 className='header'>Orders</h2>
        </div>
        {/* checking if query is loading , then if there is error, if user hasn't order anything */}
        { userOrders.isLoading ? <PizzaLoader layout={false} />  : userOrders.error ? <div className='text-red-500'>{ userOrders.error.message }</div>  : history.length === 0 ? <h2 className=''>You haven't ordered anything yet!</h2> : orderElement }
      </div>
    </motion.section>
  )
}
