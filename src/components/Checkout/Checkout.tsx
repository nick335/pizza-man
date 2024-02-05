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
import { toast } from 'react-hot-toast'
import PizzaLoader from '../Loaders/PizzaLoader'
import SEOPAGEHeader from '../SEO/Header'





export default function Checkout() {
  const dispatch = useDispatch()
  const [addAddress, setAddAddress] = React.useState<boolean>(false)
  const { uid } = useSelector((state: RootState) => state.user.auth)
  const { isAdded } = useSelector((state: RootState) => state.user.data.address)
  const collectionRef = collection(firestore, "users")
  const docref = doc(collectionRef, uid)

  // get user adress to deliver pizza
  const userAddress = useFirestoreDocument(['user', uid], docref, {}, {
    onSuccess(snapshot){
      const addressData: userAddress = snapshot.data()?.address
      const orderHistory: Array<userOrderHistory> = snapshot.data()?.orderHistory
      dispatch(setAddressData({addressData}))
      dispatch(setHistoryData({orderHistory}))
    },
    onError(error){
      toast.error(error.message, {
        duration: 8000,
        position: 'top-right'
      })
    }
  })
  
  // page transition 
  const pageMotion = {
    initial: {opacity: 0, },
    animate: {opacity: 1, transition: {duration: 0.8}},
    exit: {opacity: 0, transition: {duration: 0.8}}
  };

  // show add Address form
  function add(){
    setAddAddress(true)
  }
  // close add Address form
  function cancel(){
    setAddAddress(false)
  }
  if(userAddress.isLoading) return <PizzaLoader layout={true} />
  return (
    <motion.section className='heightLayout pb-20'  initial="initial" animate="animate" exit="exit" variants={pageMotion}>
      <SEOPAGEHeader 
        page='Checkout'
        href='https://pizza-man-nine.vercel.app/checkout'
      />
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
