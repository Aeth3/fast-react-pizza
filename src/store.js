import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import orderReducer from "./features/order/orderSlice";
import cartReducer from "./features/cart/cartSlice";
const store = configureStore({
  reducer: { user: userReducer, order: orderReducer, cart: cartReducer },
});
export default store;
