import { createSlice } from '@reduxjs/toolkit';

const filterReducer = createSlice({
   name: 'filter',
   initialState: {
      filter: 'all',
   },
   reducers: {
      toggleFilter(state, action) {
         state.filter = action.payload;
      },
   },
});
export default filterReducer.reducer;
export const { toggleFilter } = filterReducer.actions;
