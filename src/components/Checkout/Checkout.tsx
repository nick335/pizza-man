import React from 'react'
import ModeofPayment from './ModeofPayment'
import Location from './Location'
import { motion } from 'framer-motion'
import { collection, doc } from 'firebase/firestore'
import { firestore } from '../firebase/firebase'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/RootReducer'
import { useFirestoreDocument } from '@react-query-firebase/firestore'
import EmptyAddress from './EmptyAddress'
import AddressForm from './AddressForm'
import { setAddressData, setHistoryData, userAddress, userOrderHistory } from '../../store/Features/User/UserSlice'





export default function Checkout() {
  const dispatch = useDispatch()
  const [addAddress, setAddAddress] = React.useState<boolean>(false)
  const { uid } = useSelector((state: RootState) => state.user.auth)
  const { isAdded } = useSelector((state: RootState) => state.user.data.address)
  const collectionRef = collection(firestore, "users")
  const docref = doc(collectionRef, uid)

  const userAddress = useFirestoreDocument(['user', uid], docref, {}, {
    onSuccess(snapshot){
      const addressData: userAddress = snapshot.data()?.address
      const orderHistory: Array<userOrderHistory> = snapshot.data()?.orderHistory
      console.log(addressData)
      dispatch(setAddressData({addressData}))
      dispatch(setHistoryData({orderHistory}))
    },
    onError(error){
      console.log(error.message)
    }
  })
  
  const pageMotion = {
    initial: {opacity: 0, },
    animate: {opacity: 1, transition: {duration: 0.8}},
    exit: {opacity: 0, transition: {duration: 0.8}}
  };

  function add(){
    setAddAddress(true)
  }
  function cancel(){
    setAddAddress(false)
  }
  if(userAddress.isLoading) return <div>Loading...</div>
  return (
    <motion.section className='heightLayout pb-20'  initial="initial" animate="animate" exit="exit" variants={pageMotion}>
      <div className='layout'>
        <div className='border-b-2 border-headerColor mb-5'>
          <h2 className='header'>checkout</h2>
        </div>
        { addAddress ? <AddressForm cancel = {cancel} /> :  isAdded ? <Location addAddress={add} /> : <EmptyAddress addAddress = {add} /> }
        <ModeofPayment />
      </div>
    </motion.section>
  )
}
