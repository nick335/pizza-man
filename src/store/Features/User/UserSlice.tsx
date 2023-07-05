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

interface userData {
  address: userAddress
}

interface userState {
  auth: UserAuth
  data: userData
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
    }
  }
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
    }
  }
})

export default userSlice.reducer
export const {Loggedin, setAddressData } = userSlice.actions