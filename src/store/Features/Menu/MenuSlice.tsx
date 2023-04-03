import { createSlice, } from "@reduxjs/toolkit";

interface menu{
  isOpen: boolean
}

const initialState: menu  = {
  isOpen: false
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

export default menuSlice.reducer
export const {toggleMenu} = menuSlice.actions