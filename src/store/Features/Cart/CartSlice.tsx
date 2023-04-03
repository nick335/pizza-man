import { createSlice } from "@reduxjs/toolkit"

interface cartDisplay {
  isOpen: boolean
}
interface cartItems {
  id: number,
  isPizza: boolean,
  quantity: number,
  price: number,
  total: number,
}
interface cartGroups{
  pizzaData: Array<cartItems>
  dessertData: Array<cartItems>
}
interface cart {
  cartDisplay: cartDisplay
  cartItems: cartGroups
}


const initialState: cart  = {
  cartDisplay: {
    isOpen: false
  },
  cartItems: {
    pizzaData: [],
    dessertData: []
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartDisplay: (state) => {
      state.cartDisplay.isOpen = !state.cartDisplay.isOpen
    },
    increaseCartItemQtn: (state, action) => {
      const id:number = action.payload.id
      const isPizza:boolean = action.payload.isPizza
      const quantity:number = action.payload.quantity
      const price:number = action.payload.price
      console.log(quantity)
      if(isPizza){
        if(state.cartItems.pizzaData.length === 0){
          state.cartItems.pizzaData.push({
            id:id,
            isPizza:isPizza,
            quantity: quantity + 1,
            price: price,
            total: (quantity + 1) * price
          })
        }else{
          if(state.cartItems.pizzaData.some((each, idx) => {
            return each.id === id ? true : false
          })){
            state.cartItems.pizzaData.forEach((each, idx) => {
              if(each.id === id){
                state.cartItems.pizzaData[idx].quantity += 1
                state.cartItems.pizzaData[idx].total = (quantity + 1) * price
              }
            })
          }else{
            state.cartItems.pizzaData.push({
              id:id,
              isPizza:isPizza,
              quantity: quantity + 1,
              price: price,
              total: (quantity + 1) * price
            })
          }
        }
      }else{
        if(state.cartItems.dessertData.length === 0){
          state.cartItems.dessertData.push({
            id:id,
            isPizza:isPizza,
            quantity: quantity + 1,
            price: price,
            total: (quantity + 1) * price
          })
        }else{
          if(state.cartItems.dessertData.some((each, idx) => {
            return each.id === id ? true : false
          })){
            state.cartItems.dessertData.forEach((each, idx) => {
              if(each.id === id){
                state.cartItems.dessertData[idx].quantity += 1
                state.cartItems.dessertData[idx].total = (quantity + 1) * price
              }
            })
          }else{
            state.cartItems.dessertData.push({
              id:id,
              isPizza:isPizza,
              quantity: quantity + 1,
              price: price,
              total: (quantity + 1) * price
            })
          }
        }
      }
    },
    decreaseCartItemQtn: (state, action) => {
      const id:number = action.payload.id
      const isPizza:boolean = action.payload.isPizza
      const quantity:number = action.payload.quantity
      const price:number = action.payload.price
      console.log(quantity)
      if(quantity > 0){
        if(isPizza){
          if(quantity === 1){
            state.cartItems.pizzaData.forEach((each, idx) => {
              if(each.id === id){
                state.cartItems.pizzaData.splice(idx, 1)
              }
            })
          }else{
            state.cartItems.pizzaData.forEach((each, idx) => {
              if(each.id === id){
                state.cartItems.pizzaData[idx].quantity = quantity-1
                state.cartItems.pizzaData[idx].total = (quantity - 1) * price
              }
            })
          }
        }else{
          if(quantity === 1){
            state.cartItems.dessertData.forEach((each, idx) => {
              if(each.id === id){
                state.cartItems.dessertData.splice(idx, 1)
              }
            })
          }else{
            state.cartItems.dessertData.forEach((each, idx) => {
              if(each.id === id){
                state.cartItems.dessertData[idx].quantity = quantity-1
                state.cartItems.dessertData[idx].total = (quantity - 1) * price
              }
            })
          }
        }
      }
    },
    removeCartItem: (state, action) => {
      const id:number = action.payload.id
      const isPizza: boolean = action.payload.isPizza

      if(isPizza){
        state.cartItems.pizzaData.forEach((each, idx) => {
          if(each.id === id){
            state.cartItems.pizzaData.slice(idx, 1)
          }
        })
      }else{
        state.cartItems.dessertData.forEach((each, idx) => {
          if(each.id === id){
            state.cartItems.dessertData.slice(idx, 1)
          }
        })
      }
    }
  }
})


export default cartSlice.reducer
export const {toggleCartDisplay, increaseCartItemQtn, decreaseCartItemQtn, removeCartItem} = cartSlice.actions