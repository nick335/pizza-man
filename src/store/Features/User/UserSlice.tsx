import { createSlice } from "@reduxjs/toolkit";

interface UserAuth {
  uid: string | undefined
  email: string | undefined
  registered: boolean
}

const initialState: UserAuth ={
  uid: undefined,
  email: undefined,
  registered: false
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUid: (state, action) => {
      const uid:string = action.payload
      state.uid = uid
    },
    confirmRegistered: (state) => {
      state.registered = true
    },
    ResetRegistered: (state) => {
      state.registered = false
    }
  }
})

export default userSlice.reducer
export const {setUid} = userSlice.actions