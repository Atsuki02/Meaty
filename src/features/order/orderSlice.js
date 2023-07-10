import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderedList: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder(state, action) {
      state.orderedList.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;

export const getOrderedList = (state) => state.order.orderedList;

export const getTotalOrderedListPrice = (state) =>
  state.order.orderedList.reduce((sum, item) => sum + item.totalPrice, 0);
