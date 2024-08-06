import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  // Ensure this key matches what you use in the component
  value: 0,
};

export const wishSlice = createSlice({
  name: 'wishlist',
  initialState:[],
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
     
    },
    remove: (state, action) => {
      state.items = state.filter(item => item.id !== action.payload);
      
    },
  },
});

export const { add, remove } = wishSlice.actions;

export default wishSlice.reducer;
