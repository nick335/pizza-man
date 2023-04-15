import { createSlice } from "@reduxjs/toolkit";

interface UserAuth {
  uid: string | undefined
}

const initialState: UserAuth ={
  uid: undefined
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUid: (state, action) => {
      const uid:string = action.payload
      state.uid = uid
    }
  }
})

export default userSlice.reducer
export const {setUid} = userSlice.actions