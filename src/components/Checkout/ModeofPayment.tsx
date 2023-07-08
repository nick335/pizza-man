import React from 'react'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/RootReducer'
import { userAddress, userOrderHistory } from '../../store/Features/User/UserSlice'
import { collection, doc } from 'firebase/firestore'
import { firestore } from '../firebase/firebase'
import { useFirestoreDocumentMutation } from '@react-query-firebase/firestore'
import { orderslist } from '../../store/Features/User/UserSlice'


export default function ModeofPayment() {
  const [modeofPayment, setModeofPayment] = React.useState<string>('')
  const addressData: userAddress = useSelector((state: RootState) => state.user.data.address)
  const { cartItems } = useSelector((state:RootState) => state.cart)
  const { pizzaData, DessertData } = useSelector((state: RootState) => state.data)
  const { uid  } = useSelector((state: RootState) => state.user.auth)
  const { history } = useSelector((state: RootState) => state.user)
  const collectionref = collection(firestore, 'users')
  const docref = doc(collectionref, uid)
  const mutation = useFirestoreDocumentMutation(docref, {
    merge:true
  }, {
    onError(error){
      toast.error(error.message, {
        duration: 4000,
        position: 'top-left'
      })
    }
  })

  console.log(cartItems)


  function GetOrdersList(){


    const orders: Array<orderslist> =[]

    cartItems.pizzaData.forEach((each) => {
      pizzaData.forEach((item) => {
        if(each.id === item.id){
          orders.push (
            {
              name: item.name,
              quantity: each.quantity,
              total:each.total,
              price: each.price
            }
          )
        }
      })
    })
    cartItems.dessertData.forEach((each) => {
      DessertData.forEach((item) => {
        orders.push(
          {
            name: item.name,
            quantity: each.quantity,
            total:each.total,
            price: each.price
          }
        )
      })
    })

    return orders
  }

  function selectPayment(){
    setModeofPayment('cash')
  }

  function getDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();

    return {
      day: day,
      month: month,
      year: year
    }
    
  }

  function placeOrder(){
    if(modeofPayment === 'cash'){
      //getting oders saved to firebase 
      // time
      const date = getDate();
      const orders = GetOrdersList();
      const currentOrderData:userOrderHistory = {
        date: {
          day:date.day,
          month: date.month,
          year:date.year
        },
        address: addressData,
        orders:orders
      }
      const updatedUserOrderHistory = history.push(currentOrderData)
      console.log(updatedUserOrderHistory)
      // adress Data
      // orders which is an array of object consting of orders name, price, quantity, total.

    }else{
      toast.error('please select a mode of payment', {
        duration: 8000,
        position: 'top-right'
      })
    }
  }
  return (
    <div>
      <div className='y-flex mb-5'>
        <h3 className='checkout-header'>Mode of Payment</h3>
        <div className='checkout-bar'></div>
      </div>
      {/* radios */}
      <div className='y-flex gap-3 mb-2'>
        <input className='h-[1.25em] w-[1.25em] transition-colors ease-in-out duration-150 cursor-pointer' type="radio" value={'cash'} name='ModeofPayment' onClick={selectPayment}  required/>
        <label className='p-normal text-headerColor'>Cash on Delivery</label>
      </div>
      <div className='y-flex gap-3 mb-2'>
        <input className='disabled-radio' type="radio" name='ModeofPayment'  disabled/>
        <label className='p-normal text-headerColor opacity-50 bg-white'>Wallet</label>
      </div>
      <div className='y-flex gap-3 mb-2'>
        <input className='disabled-radio' type="radio" name='ModeofPayment'  disabled/>
        <label className='p-normal text-headerColor opacity-50 bg-white'>Credit / Debit Card</label>
      </div>
      <div className='y-flex gap-3 mb-2'>
        <input className='disabled-radio' type="radio" name='ModeofPayment'  disabled/>
        <label className='p-normal text-headerColor opacity-50 bg-white'>Net Banking</label>
      </div>
      <button className='btn mt-3' onClick={placeOrder}>Place Order</button>
    </div>
  )
}
