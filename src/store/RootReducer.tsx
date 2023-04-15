import { combineReducers } from "@reduxjs/toolkit";
import CartSlice from "./Features/Cart/CartSlice";
import MenuSlice from "./Features/Menu/MenuSlice";
// import DataReducer from "./Features/Data/DataSlice";
import DataSlice from "./Features/Data/DataSlice";
import UserSlice from "./Features/User/UserSlice";

const rootReducer = combineReducers({
  menu: MenuSlice,
  cart: CartSlice,
  data: DataSlice,
  user: UserSlice,
})


export type RootState = ReturnType<typeof rootReducer>

export default rootReducer