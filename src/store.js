import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './features/order/orderSlice';
import userSlice from './features/user/userSlice';
import cartSlice from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    order: orderSlice,
  },
});

export default store;
