import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { cartItems } from "../Cart/CartSlice";

interface Data {
  description: string
  id: number
  img: string
  isPizza: boolean
  name: string
  price: number
  quantity: number
  quantitySelected: number
}

interface PizzaData extends Data{
  veg: boolean 
}

 interface state {
  pizzaData: Array<PizzaData>
  DessertData: Array<Data>
 }

 const initialState: state = {
  pizzaData: [],
  DessertData: []
 }


 const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, actions) => {
      const pizzaData:[] = actions.payload.pizzaData
      const dessertData:[] = actions.payload.dessertData
      state.pizzaData = pizzaData.map((each:PizzaData) => {
            return {
              description: each.description,
              name:each.name,
              price:each.price,
              veg:each.veg,
              quantity: 0,
              quantitySelected:0,
              isPizza:true,
              id:each.id,
              img:each.img
            }
      })
      state.DessertData = dessertData.map((each:Data) => {
        return {
             description: each.description,
              name:each.name,
              price:each.price,
              quantity: 0,
              quantitySelected:0,
              isPizza:false,
              id:each.id,
              img:each.img
        }
      })
    },
    addQtn:(state, action) => {
      const id:number = action.payload.id
      const isPizza:boolean = action.payload.isPizza

      if(isPizza){
        state.pizzaData.forEach((each, idx) => {
          if(each.id === id){
            state.pizzaData[idx].quantity += 1;
          }
        })
      }else{
        state.DessertData.forEach((each, idx) => {
          if(each.id === id){
            state.DessertData[idx].quantity += 1;
          }
        })
      }
    },
    reduceQtn:(state, action) => {
      const id:number = action.payload.id
      const isPizza:boolean = action.payload.isPizza

      if(isPizza){
        state.pizzaData.forEach((each, idx) => {
          if(each.id === id){
            if(state.pizzaData[idx].quantity > 0){
              state.pizzaData[idx].quantity -= 1;
              console.log(state.pizzaData[idx].quantity)
            }
          }
        })
      }else{
        state.DessertData.forEach((each, idx) => {
          if(each.id === id){
            if(state.DessertData[idx].quantity > 0){
              state.DessertData[idx].quantity -= 1;
            }
          }
        })
      }
      
    },
    deleteQtn:(state, action) => {
      const id:number = action.payload.id
      const isPizza: boolean = action.payload.isPizza

      if(isPizza){
        state.pizzaData.forEach((each, idx) => {
          if(each.id === id){
            state.pizzaData[idx].quantity = 0
          }
        })
      }else{
        state.DessertData.forEach((each, idx) => {
          if(each.id === id){
            state.DessertData[idx].quantity = 0
          }
        })
      }
    },
    resetAllQtn:(state, action) => {
      const pizzaData: Array<cartItems> = action.payload.pizzaData
      const dessertData: Array<cartItems>  = action.payload.dessertData

      state.pizzaData.forEach((each, idx) => {
        pizzaData.forEach((item) => {
          if(item.id === each.id){
            state.pizzaData[idx].quantity = 0
          }
        })
      })
      state.DessertData.forEach((each, idx) => {
        dessertData.forEach((item) => {
          if(item.id === each.id){
            state.DessertData[idx].quantity = 0
          }
        })
      })
    }
  }
 })

 export default dataSlice.reducer
 export const {setData, addQtn, reduceQtn, deleteQtn, resetAllQtn} = dataSlice.actions