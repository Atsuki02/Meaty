import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tableNumber: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createTableNumber(state, action) {
      state.tableNumber = action.payload;
    },
  },
});

export const { createTableNumber } = userSlice.actions;

export default userSlice.reducer;
