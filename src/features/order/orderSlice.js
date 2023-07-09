import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
