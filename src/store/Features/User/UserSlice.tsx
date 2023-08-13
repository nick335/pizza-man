import { createSlice } from "@reduxjs/toolkit";

interface UserAuth {
  uid: string 
  email: string | undefined
  loggedIn: boolean
}

export interface userAddress {
  isAdded: boolean,
  number: string | number,
  street: string,
  city: string,
  state: string,
  country: string,
  pinCode: string | number,
}

export interface orderslist {
  name:string,
  quantity:number,
  price: number,
  total: number, 
}

interface userData {
  address: userAddress
}

export interface orderDate {
  day: number,
  month:string
  year: number
}


export interface userOrderHistory{
  date: orderDate,
  address: userAddress
  orders: Array<orderslist>
}

interface userState {
  auth: UserAuth
  data: userData
  history: userOrderHistory[]
  orderSuccessful: boolean
}  

const initialState: userState ={
  auth: {
    uid: '',
    email: undefined,
    loggedIn: false
  },
  data:{
    address : {
      isAdded: false,
      number: 0,
      street: '',
      city: '',
      state: '',
      country: '',
      pinCode: 0,
    },
  },
  history: [],
  orderSuccessful: false
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Loggedin: (state, action) => {
      const uid:string = action.payload
      state.auth.uid = uid
      state.auth.loggedIn = true
    },
    setAddressData: (state, action) => {
      const data: userAddress = action.payload.addressData
      state.data.address ={
        isAdded: data.isAdded,
        number: data.number,
        street: data.street,
        city:  data.city,
        state:  data.state,
        country:  data.country,
        pinCode: data.pinCode,
      }
    },
    setHistoryData: (state, action) => {
      const data: Array<userOrderHistory> = action.payload.orderHistory
      state.history = data
    },
    confirmOrder: (state) => {
      state.orderSuccessful = true;
    },
    resetOrderState: (state) => {
      state.orderSuccessful = false
    },
    LoggedOut: (state) => {
      state.auth.loggedIn = false,
      state.auth.uid= ''
    }
  }
})

export default userSlice.reducer
export const {Loggedin, setAddressData, setHistoryData, confirmOrder, resetOrderState, LoggedOut } = userSlice.actions