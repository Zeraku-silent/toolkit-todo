import { createSlice } from '@reduxjs/toolkit';

const sortReducer = createSlice({
   name: 'sortTask',

   initialState: {
      sorted: false,
   },
   reducers: {
      toggleSort(state) {
         state.sorted = !state.sorted;
      },
   },
});
export default sortReducer.reducer;
export const { toggleSort } = sortReducer.actions;
